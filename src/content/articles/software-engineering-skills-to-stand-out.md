---
title: "Software Skills to Make Your Student Resume Stand Out"
description: Skills not emphasized in university that will help your resume stand out to developers and hiring managers
date: 2024-12-01
image: "/images/articles/2024/software-engineering-skills-to-stand-out/cover.png"
draft: false
featured: false
---

![tools](/images/articles/2024/software-engineering-skills-to-stand-out/cover.png)

Students often ask how to make their resume stand out, and one key observation I've made is that many students struggle to showcase skills relevant to **building production-quality software** or the **daily responsibilities of a full-time** software engineer.

A typical computer science education doesn’t focus much on these areas, so many students simply aren’t aware that many of the following in-demand skills even exist.

To help bridge this gap, **I’ve compiled a list of skills** to emphasize on internship and entry-level resumes that will help you stand out to potential employers.

To be clear, you by no means need to master everything on this list to secure your first internship. Lots of students will secure jobs with just what they've learned in school and most will only know a small subset of what I've listed below. Think of this article as a guide for **self-learning** or a roadmap for those unsure how to strengthen their resumes.

## Quick Checklist

If you’re too busy to read the article, here is a checklist of the skills I believe are valuable to highlight on a student / new grad level software engineering resume:

- **Automated Testing**: Does your resume highlight familiarity with automated tests (unit, integration, end-to-end)?
- **Collaborative Coding**: Does your resume highlight that you’re able to assist team members through code reviews or pair programming?
- **Building “CRUD Apps”**: Does your resume showcase your ability to develop a full-stack application using a modern JavaScript framework (e.g., React, Angular, or Vue), a RESTful API, and a relational database (e.g., PostgreSQL or MySQL)?
- **Observability**: Does your resume reflect an understanding of monitoring and observability concepts to resolve bugs in your deployed system?
- **Docker**: Does your resume demonstrate experience with Docker? Have you highlighted projects where you containerized applications or demonstrated an understanding of cloud orchestration?
- **MVC Web Frameworks**: Does your resume include experience with a large MVC web framework like Django, Ruby on Rails, Spring, or ASP.NET?
- **Architecture**: Does your resume showcase an understanding of at least one architectural pattern such as microservices, serverless architecture, service-oriented architecture etc.?
- **Cloud Services**: Does your resume demonstrate familiarity with beginner-friendly cloud services like AWS S3, EC2, or equivalent offerings from Azure or GCP? Have you mentioned deploying applications or utilizing these services in projects?
- **CI/CD**: Does your resume highlight experience with Continuous Integration and Deployment (CI/CD)? Have you configured pipelines using tools like GitHub Actions, Jenkins, or GitLab CI to automate testing, build, and deployment workflows?
- **Concurrency and Parallelism**: Does your resume reflect knowledge of concurrency and parallelism concepts?

---

## Automated Testing

A strong foundation in automated testing is one of the most essential yet often overlooked skill sets for aspiring software engineers. While many students don’t learn these skills in school, new grad software engineers are almost always expected to write automated tests.

You should be familiar different kinds of tests like unit tests, integration tests, and end-to-end (E2E) tests as well as with the concepts of the **test pyramid** and **code coverage**.

Including at least one bullet point on your resume about automated testing signals to an engineering manager that you can function closer to a regular full-time developer.

For example, something like:

- _Developed unit and integration tests using {testing library here}, improving system reliability and …_

is a good starting point to craft this kind of resume point.

<!-- Long-term, explore practices like **test-driven development (TDD)** and frameworks such as **Arrange-Act-Assert**. -->

---

## Collaborative Coding

In any software development job, you'll be working with teammates on a shared codebase, participating in code reviews, or pairing up for programming sessions on a regular basis.

On resumes, many students want to highlight their familiarity with Git, but I recommend avoiding using a full resume bullet like “Utilized Git version control to…” as it can come across as a bit immature.

Git is such a foundational skill for software development that it’s often assumed you know it. Simply including a link to your GitHub profile at the top of your resume is enough for an engineering manager to infer your Git proficiency.

Instead of stating the obvious, focus on highlighting experiences like **code reviews** and **pair programming** as these not only imply your Git knowledge but also emphasize your teamwork and leadership. For example, a bullet point like:

- _Leveraged a deep understanding of the codebase to support team members through pair programming and code reviews._

demonstrates leadership, collaboration, and a solid understanding of the daily workflow of a full-time developer.

If you’re unsure how to build this kind of experience, consider starting a **side project with a friend**. Take turns submitting pull requests and reviewing each other’s work.

---

## Building “CRUD Apps”

**TL;DR**: At minimum, your resume should highlight that you’re capable of building simple full-stack applications.

If you’re applying to software developer internships, you need to demonstrate that you have the ability to build real software. The simplest kind of software you can cobble together is what is sarcastically referred to as a **“CRUD App.”**

**CRUD** stands for **Create, Read, Update, and Delete**—the four basic operations for managing data in any software application. The term “CRUD App” is typically used for software projects that only need this functionality, like simple to-do lists, inventory management systems, contact managers, basic blogs, etc.

A CRUD app typically has three components:

1. **Frontend**: A user interface (UI) that allows users to interact with the application, typically built using frameworks like React, Vue, or Angular.
2. **Backend**: A server that processes requests and connects the frontend to the database, often implemented with frameworks like Express.js, Django, or Spring.
3. **Database**: A storage layer for persisting data, which could be relational (PostgreSQL, MySQL) or NoSQL (MongoDB).

### APIs and Backend Development

At a minimum, your resume should demonstrate familiarity with **RESTful APIs**. The exact library or framework you've used is less critical than showing a solid understanding of how to implement and interact with APIs. However, if you’re not sure where to get started, **Express.js** is a widely used and beginner-friendly choice.

There are many other ways of handling communication between services, such as **gRPC**, **GraphQL**, and **WebSockets**, which are also worth highlighting if you have that kind of experience. If you haven't heard of these, start by finding a way to get **RESTful APIs** on your resume.

### Database Management

Your resume should showcase an understanding of relational databases and potentially NoSQL databases.

For relational databases, pick either **MySQL** or **PostgreSQL** to highlight on your resume, even if you’ve only really played around locally with SQLite. For NoSQL databases, consider highlighting **MongoDB**.

As a regular new grad software engineer, you should be able to write simple SQL queries, design schemas, and create entity-relationship diagrams (ERDs) based on application requirements.

Modern applications often interact with databases through an Object-Relational Mapping (ORM) or Object-Document Mapping (ODM) tool, such as **Prisma** or **Mongoose**.

Another critical skill often overlooked in academic settings is **database migrations**, which are essential for updating your database schema without disrupting existing data.

### Modern Frontend Development

While it is not essential to be familiar with frontend development to become a software engineer, many jobs look for candidates with full-stack experience.

If you want to make yourself slightly more hireable, I’d recommend learning at least one modern frontend library. I'd personally recommend learning **React**. You should learn enough React to be able to create reusable components and utilize the **useState**, **useEffect**, and **useContext** hooks.

While **Angular** and **Vue** are also common, I recommend starting with React because it is simpler and more bare-bones. All three have the same core conepts, so you're not missing out on anything by choosing to learn React over Angular or Vue. In terms of complexity, React is comparable to Express.js, where as Angular and Vue are full-fledged frameworks like Django, Ruby on Rails, or Spring.

---

## Observability

Observability is a skill that’s rarely expected of students or new graduates because it’s challenging to learn without real-world experience or exposure to debugging production issues.

Observability is the ability to monitor how a system is behaving and identify why something might not be working.

In large systems, developers rely on **monitors** to send alerts when things go wrong. For instance, a commerce platform that handles payment processing might use a monitor to track the success rate of transactions per minute. If the rate drops below a set threshold—say, 90%—the monitor triggers an alert to notify the team.

Learning observability as a student can feel daunting, but there are simple ways to start:

- **Add logs** (fancier print statements) to your application to track key events and errors.
- **Create a monitor** to notify you when errors occur in your project.

A feature as simple as "getting an email or discord message" when an error occurs in an application demonstrates awareness of how critical observability is in maintaining system reliability and user trust.

---

## Docker

Having Docker on your resume signals a higher level of technical maturity as a student. It shows that you understand how to create consistent development and deployment environments and eludes to you having an understanding of modern cloud orchestration practices, such as containerization and the use of tools like Kubernetes for scaling and managing applications.

If you're unsure where to start, create a simple **Dockerfile** for one of your existing projects.

If you’re familiar with node and npm, a Dockerfile is similar to a package.json in that it defines everything needed to set up your project. However, while package.json focuses on managing dependencies for a JavaScript application, a Dockerfile configures the entire environment required to run your application, including the operating system, software dependencies, and runtime configurations. Essentially, it ensures your project can run consistently across different machines.

If your project includes a database or another external service, use Docker Compose to define and manage multi-container environments. This tool simplifies the process of running multiple services, such as your application and its database, in separate containers.

While tools like Kubernetes (K8s) are popular in industry, I personally believe that as a student, you don't need to dive into advanced orchestration unless you're particularly interested. Focus on mastering Docker and Docker Compose first—they’ll provide a solid foundation for understanding containerized workflows.

---

## MVC Web Frameworks

While lightweight frameworks like Express.js are a good first step, many production systems rely on large MVC Web frameworks such as **Django**, **Ruby on Rails**, **Spring**, or **ASP.NET Core**. These frameworks are designed to minimize the decision-making process by following best practices and conventions, making development faster and more structured.

Using one of these frameworks in a project demonstrates your ability to work with opinionated tools that enforce patterns like **MVC (Model-View-Controller)** and promote clean separation of concerns. This implies familiarity with concepts like:

- **ORMs (Object-Relational Mappers)** for interacting with databases.
- **Migrations** to update database schemas without data loss.
- Built-in **authentication and authorization** systems.
- The concept of reusable components, such as **middlewares**, **services**, or **view templates**.

---

## System Design & Architecture

While you may not be expected to design complex systems as a new grad, demonstrating familiarity with patterns like microservices, serverless architectures, and service-oriented architecture (SOA) will set you apart from other students and demonstrate a deeper understanding of how scalable, maintainable systems are structured.

Being able to include a resume point that speaks to additional system components production systems use like load balancers, job queues & workers, backend caching, etc. will also make you seem like a strong candidate.

Additionally you should ensure you have an understanding of concepts like Fault Tolerance, Horizontal vs Vertical Scaling, as well as Replication & Sharding.

If you are new to system design, I recommend going on Youtube and searching "system design interview" and you'll find a ton of videos that will guide you in the right direction.

---

## Cloud Services

Familiarity with cloud services is an increasingly important skill for software developers. Companies rely on cloud platforms like **AWS**, **Google Cloud Platform (GCP)**, and **Microsoft Azure** to host, scale, and manage their applications. Demonstrating experience with these services shows that you can deploy real-world systems and understand modern development practices.

Beginner-Friendly Services to Focus On:

- **AWS S3**: Used for storing files and assets, like images, videos, or backups.
- **AWS EC2**: Virtual servers for hosting applications, offering flexibility to scale based on traffic or usage.
- **AWS Lambda**: A serverless computing service that runs code in response to events, without needing to manage servers.

If you're new to cloud platforms, start with small projects to highlight on your resume. For example:

- Deploy a web application on **AWS EC2** and use **S3** to store and serve static assets.
- Create a serverless function with **AWS Lambda** to handle a background task like sending an email.
- Set up a simple database using **AWS RDS** (or its equivalent).

Scared of putting your credit card into AWS? Instead just play with the services using LocalStack as a drop-in replacement for AWS in your dev and testing environments.

---

## Continuous Integration and Deployment

Through your resume, you should highlight that you are familiar with the concept of **CI/CD pipelines**.

**CI/CD pipelines** automate the process of merging code changes, running tests, and deploying applications, ensuring that software updates are delivered quickly and reliably. Companies rely on CI/CD to maintain high code quality and minimize downtime during releases.

If you’re new to CI/CD, **GitHub Actions** is an excellent place to begin due to its simplicity and tight integration with GitHub repositories.

Here are some easy projects to get started with:

- **Code Formatting Check**: Set up a GitHub Action to automatically check your code for formatting issues (e.g., with tools like Prettier or ESLint) every time you push a commit.

- **Deploy a Website to GitHub Pages**: Create an action that automatically builds and deploys a static website to GitHub Pages whenever you push changes to the main branch.

---

## Conclusion: Build Real Software

The best way to learn is to build real projects—not just projects that run on your localhost, but fully deployed pieces of software that make use of the skills I’ve mentioned above.

Whether it’s a personal website, a small side hustle, or a fun tool for your friends, the process of deploying an application will teach you more about software engineering than any classroom or tutorial ever could.

By building software while embracing concepts like automated testing, observability, CI/CD, and cloud services, you’ll not only sharpen your technical skills but also set yourself apart as a candidate who can tackle real-world challenges. So, don’t wait—start building and shipping today!

<hr/>
<br/>

_Want advice or just interested in chatting? Feel free to book a chat with me [here](https://calendly.com/matthewmacraebovell/chats) to discuss career stuff, jobs searching, resumes, etc._
