---
title: "How to Diagnose System Issues: A Beginner’s Guide to Observability"
description: "Observability can be intimidating for developers early in their career, this guide aims to fix that"
date: 2025-07-08
image: "/images/articles/default.png"
draft: false
featured: true
---

![badger-developing](/images/articles/default.png)

If you're a developer early in your career, debugging a performance issue or finding a bug in a large distributed system can feel intimidating.

Observability is one of those skills you can’t fully learn from tutorials or just reading documentation.

You only start to understand its value once you’ve worked on real-world systems where things actually go wrong.

This guide aims to bridge that gap. It will give you the context you need and walk you through the kinds of questions experienced engineers ask when diagnosing system issues.

<br/>

## What Is Observability?

Have you ever found yourself asking questions like these?

- Are errors happening in my app?
- Where in my code are they occurring?
- When did they start?
- Why is my app suddenly taking 12 seconds to respond?
- What piece of my system is slow?

These are real questions you need to be able to answer about your software system.

**Observability** is the concept of “observing” or “watching” your system.

It is the means to ask those questions and get meaningful answers, using the data your system emits.

There are **three** kinds of data your system will emit:

<br/>

## 1. Logs

Logs are timestamped text records that describe something your code did.

They’re great for understanding what happened and when, especially during an error or edge case.

Logs are essentially structured print statements — but with a key difference: they’re specially formatted so they can be filtered and searched.

Instead of just dumping text into the console, logs usually include structured metadata like:

- timestamps,
- log levels (e.g. `INFO`, `ERROR`, `DEBUG`),
- service names,
- request IDs, or
- resource identifiers (e.g. user IDs, product IDs)

This structure allows you to quickly narrow in on relevant messages when debugging.

### Example: A Payment Failure

Imagine a user contacts support asking why their payment failed.

Let's imagine you have this code:

```typescript
try {
  await chargeCreditCard(user.id, paymentDetails);
} catch (error) {
  // Log the error with structured metadata
  Logger.error(error.message, {
    event: "payment_failed",
    user_id: user.id,
  });
}
```

```typescript
function chargeCreditCard(userId, paymentDetails) {
  if (!paymentDetails.cardNumber) {
    throw new Error("Invalid credit card information");
  }

  if (isInvalidUser(userId)) {
    throw new Error("Invalid user ID");
  }

  const response = paymentService.charge(paymentDetails);
  if (!response.success) {
    throw new Error("Payment processing failed");
  }

  return {
    success: true,
    transactionId: "txn_123456789",
  };
}
```

You can quickly search your logs with their user ID (ex: _4523_) and find relevant entries.

Let's say we find this log entry:

```text
[2025-07-08T12:31:04Z] level=ERROR service=payments-api event=payment_failed user_id=4523 error="Invalid credit card information"
```

This log entry translates to JSON like this:

```text
{
  "timestamp": "2025-07-08T12:31:04Z",
  "level": "ERROR",
  "service": "payments-api",
  "event": "payment_failed",
  "user_id": 4523,
  "error": "Invalid credit card information"
}
```

We can now clearly see that the payment failed because the user provided invalid credit card information.

Logs are great, but there are other questions that logs alone start to struggle with:

- How many times has this error occurred in the last hour?
- How often does it happen across all users?
- Is the error rate increasing over time?

You could try to answer these with log searches — but it’s slow, hard to scale, and expensive to do across large volumes of traffic.

This is where metrics come in.

<br/>

## 2. Metrics

Metrics are numbers that your system tracks over time.

They help you see how often something is happening and whether it’s getting better or worse.

They’re useful for questions like:

- How many payments failed in the last hour?
- How long does the /checkout page usually take to load?
- Is the CPU getting too high on one of our servers?
- Did error rates go up after the last update?

There are two key kinds of metrics:

- **Counters**: These track how many times something has happened. For example, the number of failed payments.
- **Gauges**: These track a value at a specific point in time. For example, the average response time of your API.

Here is an example of a **counter** that tracks payment failures:

```javascript
try {
  await chargeCreditCard(user.id, paymentDetails);
} catch (error) {
  // Increment a metric for failed payments
  paymentFailureCounter.increment({
    error_type: error.message,
    user_id: user.id,
  });
}
```

Here is an example of a **gauge** that tracks CPU usage before and after an expensive operation:

```javascript
try {
  // Capture CPU usage before the operation
  const cpuBefore = getCurrentCpuUsage();
  cpuUsageGauge.set({"before_charge"}, cpuBefore);

  await chargeCreditCard(user.id, paymentDetails);

  // Capture CPU usage after the operation
  const cpuAfter = getCurrentCpuUsage();
  cpuUsageGauge.set({"after_charge"}, cpuAfter);
} catch (error) {
  ...
}
```

### Logs vs Metrics

Here is the difference between logs and metrics:

- **Logs** are great for investigating specific events. Example: "What happened when user 4523's payment failed?"
- **Metrics** are great for understanding trends and patterns over time. Example: "How often do payment failures happen across all users?"

<br/>

## 3. Traces

Sometimes a single request moves through multiple parts of your system — the frontend, backend, third-party APIs, message queues, and more.

When that request is slow or fails, it’s hard to tell **where** the problem happened just from logs or metrics.

That’s where **traces** come in.

A **trace** shows the full journey of a request through your system. It breaks the request into individual steps, called **spans**, and shows how long each step took.

Traces help you answer questions like:

- Which part of this request took the longest?
- Was the backend slow, or was it waiting on a third-party API?
- Are some user requests consistently slower than others?
- Why is this request timing out, even though every service looks healthy?

### Example: A Slow Checkout

Imagine a user clicks “Checkout” and it takes 12 seconds to load. Your logs show the request was handled. Your metrics show no errors. But users are still unhappy.

You pull up a trace and see:

![trace-example](/images/articles/2025/beginners-guide-to-observability/trace.png)

It turns out the bottleneck wasn’t in your code at all — it was a slow response from a third-party payment provider. And now you know **exactly where** the time is going.

Without traces, you'd be guessing.

### How Traces Work

Most modern tracing tools (like OpenTelemetry, Jaeger, or Datadog APM) attach a unique **trace ID** to each request. That ID follows the request across services and makes it possible to see the full picture.

With good tracing:

- Every user request becomes traceable end-to-end
- You can debug complex slowdowns in seconds
- You can correlate logs and metrics to the exact request that triggered them

<br/>

## Why You Need All Three

Logs, metrics, and traces each have their strengths and weaknesses:

- **Logs** are great for investigating specific events. They provide detailed context about what happened at a particular point in time.
- **Metrics** are useful for understanding trends and patterns over time. They help you see how often something is happening and whether it’s getting better or worse.
- **Traces** give you visibility into the full journey of a request through your system. They help you identify bottlenecks and understand the relationships between different services.

To really understand what’s going on in a complex system, you need all three. But each comes with trade-offs — especially when it comes to cost and performance.

<br />

## Cost Is a Trade-Off

Logs, metrics, and traces all generate **data** — and that data has to go **somewhere**. Whether you’re self-hosting or using a cloud platform, storing and querying observability data can get expensive.

In general:

**Logs** are the most expensive to store and query because they generate a lot of data. They can quickly balloon in size, especially if you log everything at a high level of detail. To keep costs manageable, you often need to sample logs or set retention policies to delete old logs after a certain period.

**Metrics** are more lightweight and efficient to store. They usually consist of simple numerical values and metadata, so they take up less space. However, if you track a lot of different metrics, the costs can still add up.

**Traces** fall somewhere in between. They provide detailed information about request flows, but they typically generate less data than logs. However, the cost can increase significantly if you have a high volume of requests or if you trace every request in production. Most platforms sample traces by default to keep costs under control.

**What is Sampling?** Instead of storing every single log, metric, or trace, you can choose to **only store a percentages** of them. This reduces the amount of data you need to store and query, but it also means you might miss some important events.

You will likely need to balance the level of detail you want with the costs you can afford.

<br/>

## Where Is Observability Data Stored?

Logs, metrics, and traces each have **unique read and write patterns**, so they’re typically stored in different systems — each optimized for that specific kind of data.

These systems are just other processes running on your computer or in the cloud — no different than the datastores you already use for your application data.

Having different stores for different **observability data** is no different than how you might have different datastores for different **application data**.

Ex: you might use PostgreSQL to store persistent user account data with relationships. But for fast, volatile data like session tokens or rate-limiting counters, you’d use a cache like Redis.

The same logic applies here: different data types require different storage engines tailored to how that data behaves.

### Logs → Log Management Systems

Logs are unstructured or semi-structured text-based records. They often contain variable fields (e.g. error messages, user IDs, stack traces), which makes them unpredictable in shape but rich in context.

Log storage systems are optimized for:

- High-volume write ingestion (logs can be extremely chatty)
- Full-text search and filtering
- Fast retrieval by timestamp, log level, service name, etc.

Popular log storage solutions include:

- [Elasticsearch (backbone of the ELK stack)](https://www.elastic.co/elasticsearch/)
- [Splunk](https://www.splunk.com/)
- [Loggly](https://www.loggly.com/)

### Metrics → Time-Series Databases

Metrics are structured, numeric data points associated with a timestamp. They're typically emitted on a regular interval and used to understand system health over time.

TSDBs are optimized for:

- Efficient compression of repeated time/label/value patterns
- High-throughput writes
- Fast aggregations and rollups (e.g. “avg CPU usage over 5 min”)

Popular time-series databases include:

- [Prometheus](https://prometheus.io/) (most widely used in cloud-native environments)
- [InfluxDB](https://www.influxdata.com/)
- [Graphite](https://graphiteapp.org/)

### Traces → Distributed Tracing Systems

Traces represent the full journey of a request through a system, broken into spans that describe each step.

Trace data is structured like a tree or graph, and trace systems are optimized for:

- End-to-end request correlation across services
- Hierarchical data storage (spans within spans)
- Low-latency visualization of request timelines

Popular distributed tracing systems include:

- [Jaeger](https://www.jaegertracing.io/)
- [Zipkin](https://zipkin.io/)
- [Honeycomb](https://www.honeycomb.io/)

Here’s a well-structured version of the missing **Instrumentation** section:

<br/>

## How Does Data Get There?: Instrumentation

Your application doesn’t automatically emit logs, metrics, or traces — you have to add code (or tooling) that collects and sends this data. That process is called instrumentation.

**Instrumentation** is just a fancy word for how your code talks to your observability tools.

There are two main types of Instrumentation:

### 1. **Manual Instrumentation**

This means you write the code yourself to emit logs, metrics, or traces.

Examples:

```javascript
// Log a user requesting the dashboard
Logger.info("Dashboard requested", { user_id: user.id });

// Emit a custom metric
dashboardLoadCounter.increment({ user_id: user.id });

// Start a span for tracing
const span = tracer.startSpan("render_dashboard");

// (...) Do some work to render the dashboard

span.end();
```

Manual instrumentation gives you fine-grained control but takes more effort — and if you're not careful, you might miss important signals or introduce noise.

### 2. **Automatic Instrumentation**

Many observability platforms offer **auto-instrumentation libraries** that hook into common libraries and frameworks. These tools can automatically emit telemetry without you writing much code at all.

A common example is using an APM (Application Performance Monitoring) library that automatically instruments your code to capture key events and metrics.

An APM library or APM agent is just a piece of software that runs alongside your application and automatically collects data about its performance.

In Node.js, enabling automatic tracing might look like:

```javascript
const { start } = require("@opentelemetry/sdk-node");
start(); // sets up auto-instrumentation
```

Auto-instrumentation is great for getting started fast, but it won’t capture **business-specific events** like payment failures or user behavior. That’s where manual instrumentation still matters.

<br/>

## What To Do With This Data

Once you have logs, metrics, and traces flowing into your observability tools, you can start to make sense of it all.

1. **Monitoring**: Set up monitors to watch for anomalies and alert you when something in your system goes wrong.
2. **Dashboards**: Visualize key metrics and logs in real-time.
3. **Search**: Use full-text search to find specific log entries or trace spans.

Using these three tools together, you can quickly answer questions like:

- What caused last night's error spike?
- Does performance drop at certain times?
- Are some endpoints more error-prone?
- Are some users or regions seeing more errors?
- Do certain actions cause slowdowns?
- What service is causing the most latency?

### Monitors & Alerts

A monitor is just a tool that watches your system and notifies you when something goes wrong.

For Example, you might set up a monitor to alert you if:

- The error rate goes above 5% in the last 5 minutes.
- The average response time for the checkout page exceeds 2 seconds.
- The CPU usage on a critical server goes above 80% for more than 5 minutes.

Monitors are often configured to send alerts via email, Slack, or other communication channels.

### Dashboards

Dashboards are visual representations of your observability data. They help you see the big picture at a glance.

You can create dashboards to show:

- Key performance metrics (e.g., response times, error rates)
- System health indicators (e.g., CPU usage, memory consumption)
- Business KPIs (e.g., user signups, revenue)

### Search

Most observability tools provide powerful search capabilities to help you find specific log entries or trace spans.

You can search by:

- Keywords in log messages (e.g., "payment failed")
- Metadata fields (e.g., user ID, service name)
- Time ranges (e.g., "show me logs from the last hour")

<br/>

## How To Diagnose Systems Issues

How you diagnose systems issues depends on the kind of app you're working on and the tools you have available.

For example, you might not have access to logs, metrics, or traces in a smaller project.

In a larger application, you might have access to all three, but they might be stored in different places or require different tools to access.

The kinds of questions you ask will also depend on the kind of data you have available. You may even have to introduce new instrumentation to get the data you need.

### Example Scenario: Slow Dashboard Load Time

Let's imagine a simple web application with a frontend, backend, and a database.

Your application is an online store and you have a dashboard that shows common statistics like total sales, active users, and recent orders.

Your app is simple enough you do not have traces for the dashboard endpoint, but you do have logs and metrics.

Your users report that the dashboard is taking too long to load. You even receive an alert in slack from one of your monitors that the average response time for the dashboard endpoint has exceeded 3 seconds.

You need to figure out why the dashboard is slow and how to fix it.

### Step 1: Check Your Metrics

For the endpoint `/dashboard`, you have the following metrics:

- total_duration_s: (average response time in seconds)
- cpu_duration_s: (average CPU time your application (ie your code) spent processing the request)
- db_duration_s: (average time spent waiting for the database)

You create a simple graph visualization of the average response time for the `/dashboard` endpoint over the last 24 hours.

On the x-axis, you have the time (in hours) and on the y-axis, you put total_duration_s, cpu_duration_s, and db_duration_s.

![before-dashboard-performance](/images/articles/2025/beginners-guide-to-observability/before.png)

You notice that when total_duration_s spikes, so does db_duration_s, but cpu_duration_s remains relatively low.

This suggests that the bottleneck is likely in **the database, not in your application code.**

### Step 2: Check Your Logs

To confirm your suspicion, you search your logs for database queries related to `/dashboard`.

You go to your log management system and search with the following query:

```text
event=db_query endpoint=/dashboard duration_ms>1000
```

And you find several entries like this:

```text
[2025-07-08T14:03:17Z] level=INFO endpoint=/dashboard event=db_query query="SELECT * FROM orders WHERE created_at > ..." duration_ms=1423 rows_returned=20384
```

This confirms that a db query is scanning and returning tens of thousands of rows — and that it consistently takes over a second.

### Step 3: Optimize the Query

Diving into your code, you find this query:

```text
SELECT * FROM orders WHERE created_at > NOW() - INTERVAL '30 days'
```

You realize this query is fetching all orders from the last 30 days, which is a lot of data to process and return.

You also notice that the query is not using any indexes, which is likely causing the database to do a full table scan.

To optimize this, you can add an index on the `created_at` column of the `orders` table. This will allow the database to quickly find the relevant rows without scanning the entire table.

```text
CREATE INDEX idx_orders_recent ON orders(created_at) WHERE created_at > NOW() - INTERVAL '30 days';
```

You also further optimize the query by only selecting the columns you actually need for the dashboard, rather than using

```text
SELECT total_price FROM orders WHERE created_at > NOW() - INTERVAL '30 days'
```

This reduces the amount of data the database has to process and return, further improving performance.

### Step 4: Deploy and Monitor

After making the changes, you deploy the updated code and look at your graph visualization again.

You notice that the average response time for the `/dashboard` endpoint has dropped from 5 seconds to around 0.5 seconds.

![after-dashboard-performance](/images/articles/2025/beginners-guide-to-observability/after.png)

Congratulations! You’ve successfully diagnosed and fixed a performance issue using observability data.

You'll notice that there is still a correlation between total_duration_s and db_duration_s, but the average response time is now much lower.

You could continue to optimize the database query further, but for now, the dashboard is performing well enough.

<br/>

## Conclusion

Observability is a powerful tool for diagnosing and fixing issues in your software systems.

It's definitely not one that is easily learned by just "following a tutorial" or "reading a book". It requires a significant amount of context with both the tools your using and the systems you're working with to be effective.

It's a skill I struggled to learn and I find many early in their career shy away from because they feel overwhelmed by the context needed to complete these kinds of tasks.

I hope this guide has helped you understand the basics of observability and how to use it to diagnose system issues.

If you want to learn more about observability, I personally found reading the [OpenTelemetry Documentation](https://opentelemetry.io/docs/) to be a great resource. It covers the concepts in more detail and presents it in an order that made sense to my brain.

<hr/>
<br/>

_Want advice or just interested in chatting? Feel free to book a chat with me [here](https://calendly.com/matthewmacraebovell/chats) to discuss career stuff, jobs searching, resumes, etc._
