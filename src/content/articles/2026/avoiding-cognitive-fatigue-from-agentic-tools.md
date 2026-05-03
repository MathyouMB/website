---
title: "How To Avoid Cognitive Fatigue While Using Agentic Coding Tools"
description: AI coding tools can increase productivity, but they also make software work more mentally demanding.
date: 2026-05-13
image: "/images/articles/default.png"
slug: "avoiding-cognitive-fatigue-from-agentic-tools"
draft: true
featured: false
template: "ArticleV2"
---

![badger-developing](/images/articles/default.png)

While agentic coding tools seem to have made us more productive, more and more developers are annecdotally reporting they are mentally drained at the end of their work days than ever before.

This drain is called ["cognitive fatigue"](https://www.medicalnewstoday.com/articles/cognitive-fatigue): the mental exhaustion that comes from sustained periods of demanding mental work. It is the deterioration in the ability to think effectively, and just like physical fatigue, prolonged mental activity can cause tiredness that affects the mind. [[0](https://www.medicalnewstoday.com/articles/cognitive-fatigue)]

This problem is not entirely new. Fatigue and cognitive workload have been studied for years in professions like air traffic control [[1](https://doi.org/10.1016/j.ssci.2024.106545)]. What's different now is that AI and agentic tooling are exposing more everyday desk workers to similar high-monitoring, high-context-switching conditions.

Having felt the drain myself, I wouldn't be surprised if in the near future the tech industry starts formally recognizing **AI-induced cognitive fatigue as a workplace wellness concern** in the same way we recognize desk ergonomics, eye strain, carpal tunnel, etc. 

While we've extensively studied the physical side of desk work and developed frameworks like [Hedge's sit-stand-stretch cycle](https://ergo.human.cornell.edu/CUESitStandPrograms.html) [[2](https://ergo.human.cornell.edu/CUESitStandPrograms.html)], we are only just beginning to understand how to manage cognitive fatigue in the era of AI.

I was initially feeling overwhelmed, but having spent the past 4-5 months experimenting with different strategies, I've made adjustments to how I work that have made a real difference and even allowed me to **get more work done**.

So what specifically is causing this fatigue and what strategies can we use to avoid it?

<br/>

## Why Do Agentic Tools Feel So Draining?

### 1. More of the Hard, Less of the Easy

Before agentic tooling, I never really thought about how much mental energy I was spending on different tasks. 

I just did the work and if it was hard... it was hard.

However, agents can now _"just do"_ the easy lower effort work, and now the only work left for us to do is the hard stuff.

Writing boilerplate, applying mechanical feedback from code reviews, reformatting text. That work in some ways actually gave us natural breaks in the day to recharge our mental energy before we had to do the next hard thing.

In Cognitive Science, [Cognitive Load Theory](https://doi.org/10.1207/s15516709cog1202_4) [[3](https://doi.org/10.1207/s15516709cog1202_4)] describes how our working memory has limited capacity. Every decision, moment of focus, and effort to understand something draws from that limited capacity.

Applying this to our work, now that we're doing more of the hard and less of the easy, we're taking on **more cognitive load** while also removing some of the natural recovery periods that used to be built into the workday.

### 2. Compounded Cognitive Debt

Now that code is so easy to generate, we're spitting out more of it and, as a result, spending less time processing why the code is the way it is. 

This creates what researchers have started calling [Cognitive Debt](https://doi.org/10.48550/arXiv.2506.08872) [[4](https://doi.org/10.48550/arXiv.2506.08872)]: the deferred cost of  offloading thinking to an external system, where short-term ease comes at the expense of deeper understanding, memory, ownership, and independent critical thought.

Similar to technical debt, where you would take on long term technical maintenance to deliver customer value in the short term, cognitive debt is the mental equivalent of that. 

You vibe code something out, and it gets the job done, but you haven't really processed why the code is the way it is. 

This means that when code review comes around, when something needs to be debugged, or worst of all, when an incident occurs, you have to do far more work to understand the code and the decisions that led to it, taking a significantly higher toll on your cognitive stamina.

This is further compounded when your entire team is also generating mass amounts of code with agents.

An unfortunate trend has emerged: developers are opening PRs for code they have essentially _"not written"_ themselves, shifting the burden of understanding, validating, and debugging that code onto their reviewers.

[Simon Willison](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/) has coined the anti pattern: _"Don't file pull requests with code you haven't reviewed yourself."_ [[5](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/)]". The idea being:  _"If you open a PR with hundreds (or thousands) of lines of code that an agent produced for you, and you haven't done the work to ensure that code is functional yourself, you are delegating the actual work to other people."_

While a review heavy culture is not necessarily a bad thing, a lot of developers are not used to doing that level of review which when compounded with the authored code not necessarily being processed by a human, can lead to high cognitive drain for reviewers.


### 3. Unrealistic Corporate Performance Expectations

Everything above is then compounded by a larger industry wide problem: no one actually has a clear answer for exactly how much more productive agentic tools should make us.

Estimating engineering work has always been notoriously difficult, and now that we have these new tools that are changing the way we work, everyone has their own opinions on how much more productive we should be, but no one really has a clear answer.

What this has done is put an added performative pressure on developers, without necessarily giving them the support to do so in a sustainable way.

The reality is that it's human nature to not work as well under pressure. When you have a looming deadline, it's easy to fall into the trap pushing yourself harder than you should. 

While that might have used to meant working longer hours, that might now mean trying to run more agents in parallel, or trying to do more cognitively demanding work in a day than you used to.

<br/>

## Strategies I'm Using To Avoid Agentic Fatigue

Most of the strategies I've been practicing basically come down to this idea:

_"You should give each of your tasks a cognitive load estimate"_

I basically just think of tasks as either being **high or low cognitive load**.

Think of your cognitive load like a stamina bar. You have a certain number of cognitive points you can spend in a day and each task you work on costs a certain ammount of your cognitive budget. When you run out of points, you hit a wall and you can't do any more cognitively demanding work until you recharge. However the bar also recharges little by little throughout the day, especially when you take breaks or do less demanding work.

Once you have a rough estimate of how much mental energy each task is going to take, you can start to structure your day and workflow in a way that allows you to manage your cognitive load and avoid fatigue.

### 1. Schedule High Cognitive Load Work After Rest Periods

I try to start each day with my most cognitively demanding work, when my mental stamina is at its highest after a good night's sleep.

Early in the day, I can look at my calendar and use fixed points like lunch, meetings, or planned breaks to schedule the rest of my work. I can intentionally schedule high cognitive load work after breaks so I'll have recharged before I take on those tasks.

If I have many high-load tasks in flight and they are not necessarily due right away, I would even consider putting off a task till the next day to take advantage of the fact that I will have recharged my mental energy overnight.

Obviously, this is not always possible, but when I do have flexibility, I find that being intentional about when I take on difficult work makes a real difference in how drained I feel by the end of the day.

### 2. Don't Do Many Cognitively Demanding Tasks In Parallel

I try to only have one high cognitive load task running at a time paired with multiple low cognitive load tasks.

- For example, I might have one agent applying nitpick type feedback from a code review while I oversee another agent digging into a nuanced bug that requires a lot of mental energy. Originally, these would had to be done sequentially, but by delegating mundane work to the agent, I save time and can put most of my focus on the more demanding work.

- To give the anti example, I would not want to be overseeing two different agents each digging into a nuanced bug at the same time. The mental context switching between the two would be draining and I would likely take more time complete both of them than if I just did them sequentially.

You might see screeenshots of people running dozens of Claude terminals, but I think the reality is that most people can only hold focus on a few high-load tasks at a time.

A lot of people you see running dozens of Claude terminals are not working on complex enterprise brown field work. They're rapidly building green field products where every task is a low cognitive load one by virtue of the project being new or small.

### 3. Incorporate Microbreaks into Your Workflow

A [microbreak](https://workplacenl.ca/site/uploads/2019/09/Microbreaks-Presentation-20191118.pdf) is a short, 1-2 minutes break that you take during work [[6](https://workplacenl.ca/site/uploads/2019/09/Microbreaks-Presentation-20191118.pdf)]. I typically try to take them just before large context switches.

Research on microbreaks suggests that short breaks can reduce fatigue and improve well-being during work [[7](https://doi.org/10.1371/journal.pone.0272460)] and have been shown to prevent the onset and progression of repetitive strain injuries in office workers [[8](https://doi.org/10.1016/S0003-6870(00)00071-5)].

In other words, the goal is not just to “take a break” once you are already exhausted. The goal is to build small moments of recovery into the workflow so your cognitive stamina has a chance to recharge throughout the day.

For agentic work, I think microbreaks are especially useful between phases of attention. For example, after reviewing a large agent-generated diff, responding to a complicated code review, debugging a confusing failure, or deciding whether to accept an agent’s proposed plan, I try not to immediately jump into the next high-load task.

### 4. Avoid Notification Induced Context Switching

Notifications grab our attention and force us to context switch away from our current work to verify the ping isn't of high importance. 

In a world where we're trying to measure and pressure our cognitive stamina, it's important to be mindful of the cost of checking Slack messages, emails, social media, etc.

If your work allows it, schedule "focus time" on your calendar where you can turn off notifications and avoid distractions.

I would also highly recommend avoiding other dopamine-sucking activities during breaks. Anecdotally, I've found doom scrolling social media feeds and even just simple pings from my phone can prolong cognitive fatigue set on by cognitively demanding work.

Instead on your break, do mundane activities that don't require a lot of mental energy, like eating your lunch, going for a walk, or even just sitting outside and enjoying the weather.

### 3. Consider Restructing Your Workday With Larger Break Blocks

Anecdotally, when I do feel the drain, it takes me about an hour to feel like I've recharged enough to take on another demanding task.

If you work remote or have the flexibility to do so, doing a mundane task like some chores or cooking dinner after you've hit that wall can help you recharge your mental energy and come back to do a bit of work in the evening with a fresh mind.

### 6. Be Mindful of Your Teammates

We discussed how pings can be a source of cognitive fatigue, but the same is true for you pinging your teammates. Be mindful of whether you need to ping someone or discuss as a team what channels can have their notifications turned off or muted.

In regards to code review, if you don't want people asking you to review their 10,000 line PRs of agent generated code that they haven't reviewed themselves, don't ask other people to review your 10,000 line PRs of agent generated code that you haven't reviewed yourself. Ask your agents to review the code for you first, and then only ask your teammates to review the code after you've done your own review and are confident in the quality of the code. I'd also highly recommend checking out [stacked pull requests.](https://www.stacking.dev/)

<br/>

## Conclusion

Cognitive load is not literally a muscle, but like physical stamina, our ability to sustain demanding mental work is limited, can be drained by intense effort, and often recovers after rest or lower-intensity tasks.

By being more mindful of our cognitive load and how we schedule our work, I believe we can avoid the worst of the cognitive fatigue that comes with using agentic tools and even get more work done in the long run.

---

## References

[[0](https://www.medicalnewstoday.com/articles/cognitive-fatigue)] West, M. (2025, August 1). [What to know about cognitive fatigue](https://www.medicalnewstoday.com/articles/cognitive-fatigue). *Medical News Today*.

[[1](https://doi.org/10.1016/j.ssci.2024.106545)] Zamarreño Suárez, M., Arnaldo Valdés, R. M., Pérez Moreno, F., Delgado-Aguilera Jurado, R., López de Frutos, P. M., & Gómez Comendador, V. F. (2024). [Understanding the research on air traffic controller workload and its implications for safety: A science mapping-based analysis](https://doi.org/10.1016/j.ssci.2024.106545). *Safety Science, 176*, 106545.

[[2](https://ergo.human.cornell.edu/CUESitStandPrograms.html)] Cornell Human Factors and Ergonomics Research Group. [Sit-Stand Working](https://ergo.human.cornell.edu/CUESitStandPrograms.html). Cornell University Ergonomics Web.

[[3](https://doi.org/10.1207/s15516709cog1202_4)] Sweller, J. (1988). [Cognitive Load During Problem Solving: Effects on Learning](https://doi.org/10.1207/s15516709cog1202_4). *Cognitive Science, 12*, 257–285.

[[4](https://doi.org/10.48550/arXiv.2506.08872)] Kosmyna, N., Hauptmann, E., Yuan, Y. T., Situ, J., Liao, X.-H., Beresnitzky, A. V., Braunstein, I., & Maes, P. (2025). [Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task](https://doi.org/10.48550/arXiv.2506.08872). *arXiv preprint arXiv:2506.08872*.

[[5](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/)] Willison, S. (2026). [Anti-patterns: things to avoid](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/). In *Agentic Engineering Patterns*. Simon Willison’s Weblog.

<!-- [[6](https://www.danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/)] Shapiro, D. (2026, January 23). [The Five Levels: from Spicy Autocomplete to the Dark Factory](https://www.danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/). *Dan Shapiro’s Blog*. -->


[[6](https://workplacenl.ca/site/uploads/2019/09/Microbreaks-Presentation-20191118.pdf)] WorkplaceNL. (2019). [*A Guide to Microbreaks with Practical Exercises: What are Microbreaks?*](https://workplacenl.ca/site/uploads/2019/09/Microbreaks-Presentation-20191118.pdf).

[[7](https://doi.org/10.1371/journal.pone.0272460)] Albulescu, P., Macsinga, I., Rusu, A., Sulea, C., Bodnaru, A., & Tulbure, B. T. (2022). [“Give me a break!” A systematic review and meta-analysis on the efficacy of micro-breaks for increasing well-being and performance](https://doi.org/10.1371/journal.pone.0272460). *PLOS ONE, 17*(8), e0272460.

[[8](https://doi.org/10.1016/S0003-6870(00)00071-5)] McLean, L., Tingley, M., Scott, R. N., & Rickards, J. (2001). [Computer terminal work and the benefit of microbreaks](https://doi.org/10.1016/S0003-6870(00)00071-5). *Applied Ergonomics, 32*(3), 225–237.
