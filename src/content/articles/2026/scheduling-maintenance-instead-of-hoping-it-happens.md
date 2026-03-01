---
title: "Scheduling Maintenance Instead of Hoping It Happens"
description: What happened when my team scheduled dedicated days just for maintenance work and tech debt.
date: 2026-03-01
image: "/images/articles/2025/how-students-can-get-development-experience-without-a-job/cover.png"
slug: "scheduling-maintenance-instead-of-hoping-it-happens"
draft: true
featured: true
template: "ArticleV2"
---

![badger-developing](/images/articles/2025/how-students-can-get-development-experience-without-a-job/cover.png)

On a lot of the teams I've been on, there is some version of this rule:

> "Engineers should spend about x% of their time on maintenance and technical debt."

While on paper this sounds good, this doesn't work without a very disciplined team and support from leadership to actually enforce it.

The _nuanced_ internal politics and prioritization of a large tech company often render technical debt a hard sell to leadership, especially in contrast to feature work that generates more immediate value, leading to tech debt often having to be sold as a blocker for upcoming feature work.

I've lost count of how many times over the years I've heard: _"We'll just make sure to get to it next sprint"_ only for the maintenance to be the first thing deprioritized when the sprint gets busy or have the next sprint come and go without any tech debt work getting done.

To make matters worse, it's often not just product and senior leadership that have a hard time prioritizing maintenance work, but engineers themselves.

The corporate performatism of delivering visible business impact creates a culture where engineers feel pressured to focus on high-visibility tasks that will get them recognized, rather than less glamorous but equally important maintenance work. It's also sometimes just _"not fun"_ work, and when engineers have the choice to work on something more exciting, maintenance often loses out.

Recently, my team tried **something different**. Instead of trying to incorporate a percentage into sprint planning or telling engineers to _"just find time"_, we dedicated two full days exclusively to maintenance work.

The results were pretty surprising. We found that the dedicated time led to much more focused and effective work on technical debt, and it actually felt more rewarding for the engineers involved.

---

## Why We Gave It a Try

I currently work on GitLab's authorization team. We have dozens of teams constantly building on top of our platform every day, and we're often having to reconsider guidelines and conventions as we learn more about how the codebase is evolving.

We do our best to review and guide teams, but inevitably there are always going to be some things that slip through the cracks and create technical debt. It's even harder to push back on teams trying to move fast when they're just _"copying what's already there"_ meaning one crack can easily turn into a dozen cracks before you know it.

One of my coworkers described it best when they said:

> "Sometimes it feels like we're in a leaky boat, and we're trying to patch the holes, but water just keeps coming in."

In addition to the constant influx of new authorization code, we also own the delivery of our own features and improvements, which means that we have to balance maintenance work with our own pressure to deliver new features and the tech debt that we create for ourselves.

It's a lot to juggle, and after a while we'd built up a kind of _"wish list"_ of maintenance work that we wanted to get to, but wasn't easy to justify as a priority when we had so many other things on our plate. Even when one of us did find the time, if others aren't prioritizing your review, a change could sit in a queue for weeks, lose momentum, and quickly fall behind master.

---

## What We Did

We framed the initiative around this idea:

> Dedicated days aren’t extra time, they’re just part of the usual maintenance percentage, batched into concentrated blocks.

For example, a team expected to spend around 10% of its time on maintenance is effectively committing about one day in a 10-day sprint. This was our first attempt at formalizing that time, but we’ve already started discussing reserving two days each quarter as some percentage of our maintenance time is already being spent in regular day-to-day work.

The week prior, engineers were encouraged to add any maintenance work they wanted to get done to a shared document. These tasks we're loosely prioritized and any rational for why they were important was shared to bring awareness to the rest of the team.

While anything was allowed, it was discouraged that engineers add maintenance work or tech debt that could easily be interlocked or sold as a blocker for upcoming feature work to keep the focus of these days on the kind of maintenance work that would normally be deprioritized.

We also made a conscious effort to coordinate where we'd be working to limit conflicts and frequent rebases.

Then, for two full days, we blocked off our calendars and focused exclusively on maintenance work. We made sure to have a shared calendar event and an ongoing Zoom call so everyone could pop in and out as needed.

---

## The Benefits of Dedicated Maintenance Days

Maintenance days create a clear, shared commitment across the team.

Instead of trying to squeeze maintenance into the cracks of feature work, it creates a space where maintenance **is the main priority**.

### Maintenance Stops Feeling Like a Punishment

It can feel demeaning to be the one team member working on maintenance while everyone else is working on features. It can create a sense of isolation and make the work feel like a punishment.

In contrast, when the whole team is focused on maintenance, it creates a sense of camaraderie and shared purpose.

Instead of feeling like you're doing the _"dirty work"_ alone, you're part of a collective effort to improve the codebase for everyone.

### It Eliminates and Becomes The "Performative Priority"

Normally, maintenance work is not going to impact paying customers or get you a pat on the back from senior leadership, ultimately making it feel like a "thankless" task or something that you do out of obligation.

However, in a dedicated maintenance day, that work is front and center, meaning that engineers do not need to overcome the external pressure to deliver visible business impact. This creates a positive feedback loop where engineers are incentivized to complete as much maintenance as possible during the dedicated time.

### Reviews Became Faster and Easier

Normally, it’s easy to delay reviewing a refactor or cleanup task when there’s a customer-facing feature waiting to ship.

During these dedicated days, we only had maintenance work in the review queue and therefore there was not a question of whether these reviews were a priority or not.

Instead of sitting in queues for weeks, changes were merged while the context was still fresh in everyone’s mind. This reduced friction and prevented maintenance work from stalling after the initial effort.

### A Learning Opportunity

If your codebase is complex enough that you have a lot of technical debt, then it's likely that there are parts of the codebase that only a few engineers understand well.

Having dedicated days to focus on diving into that code is a great way to spread that knowledge across the team.

If something is _"worth maintaining"_, it's probably something you'll have to build on top of or interact with in the future, so you might as well take the time to make sure your engineers understand it well.

### Scheduling Is Concrete

A percentage is abstract. A calendar block is concrete.

You can always rationalize deviating from a guideline and someone in product is always going to want you to push a cleanup out of sprint to make room for a feature. For example, It’s easy to say:

> "We’ll just make sure to get to it next sprint".

It’s much harder to ignore time that has already been reserved and agreed upon across the team.

Instead of hoping maintenance happens continuously in the background, scheduling creates the conditions for it to be guaranteed.

### It Felt More Rewarding Than Expected

One of the most surprising outcomes was how positive the experience felt for the team.

Many engineers carry around a mental list of small annoyances in the codebase. Things that make everyday work harder, but never quite rise to the level of sprint priorities.

Having dedicated time to fix those issues created a strong sense of progress and ownership.

---

## Final Thoughts

Technical debt doesn’t accumulate because teams don’t care. It accumulates because maintenance is always easier to postpone than feature work.

By scheduling dedicated maintenance days, we merged a lot of work that might have otherwise not gotten done, and it didn't feel like we we're blocking anyone or fighting external pressures to get it done.

If you feel like your team never has time for maintenance, I'd definitely recommend trying this approach.
