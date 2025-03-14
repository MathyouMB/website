---
title: "Is LeetCode Worth Doing?"
description: A breakdown of why LeetCode exists and why it's not the only way you should prepare for interviews
date: 2024-12-25
image: "/images/articles/2024/is-leetcode-worth-it/cover2.png"
draft: false
featured: true
---

![remote-working-creatures](/images/articles/2024/is-leetcode-worth-it/cover2.png)

_"Is LeetCode worth doing?"_ —The amount of LeetCode practice you need **depends entirely on your goals**.

If your goal is to get into some large tech company with a notable name like Google, Amazon, Microsoft, etc., or some company in the Bay Area of the United States, then yeah… you should follow a LeetCode study plan and do a minimum of 1–2 problems daily because it's very publicly known these larger companies ask these questions.

However, if you are a student and your goal is to find a job in your local city or you’ve never worked before, the reality is you don't need to regularly solve medium-hard LeetCode questions. Your local area is far more likely to value communication skills and your ability to build real software over whether you can solve obscure algorithm problems.

Regardless of how much LeetCode you feel you need, it's also important to recognize that **practicing algorithm-based questions is only one aspect** of how you should prepare for technical interviews.

_*Here is my advice for students regarding technical interview preperation:*_

- At the very least, you need to practice enough to confidently code under pressure using one common programming language.

- You should practice code problems on a variety of platforms instead of just LeetCode to avoid becoming overly comfortable with the LeetCode question style.

- Most students need to practice technical communication. While algorithm-based questions (like those on LeetCode) will be present in **SOME** technical interviews, your ability to communicate technical concepts, will be assessed in **ALL** technical hiring processes.

- Additionally, algorithm-based questions are just one type of coding assessment. You will eventually encounter less common formats that you should familiarize yourself with such as debugging tasks, take-home projects, and system design exercises.

The goal of this article is to give you a deeper understanding of why LeetCode is emphasized in technical interview preparation and to help you determine how much focus it deserves in your own journey.

---

## What is LeetCode?

“LeetCode questions” are designed to evaluate an engineer's understanding of core computer science concepts, such as data structures and algorithms, by asking the participant to complete a code problem with the best possible time and space complexity.

You’re likely to encounter these types of questions in two scenarios:

1. **Automated online assessments**
2. **Whiteboard-style interviews**

### Automated Online Assessments

Automated online assessments are typically the first stage in the hiring process. They involve solving one or a series of problems within a set time frame, often through a platform like **HackerRank** or **Codesignal**.

Since they do not require the supervision of an interviewer and are completely automated, the goal of using these kinds of assessments is typically to **filter candidates** and reduce the time and resources that engineering managers and developers would otherwise spend conducting interviews for large pools of applicants.

### Whiteboard-Style Interviews

Whiteboard-style interviews are conducted in real-time with at least one engineer present. These sessions might take place on a physical whiteboard, a shared document, or an online coding environment.

While they test your ability to solve algorithmic problems under pressure, interviewers are really looking for how you approach the problem:

- Can you communicate your thought process clearly?
- Do you ask thoughtful clarifying questions?
- Are you able to identify and address edge cases?

Your problem-solving skills, communication abilities, and attention to detail all play a crucial role in these evaluations.

---

## What’s Wrong With LeetCode?

LeetCode questions fail to evaluate a candidate’s domain knowledge or their ability to design and build **real software**—skills that actually matter when hiring for software engineering roles.

If you really think about it, questions focused on optimizing time and space complexity are really just **math problems** in disguise.

While they do help assess a candidate’s knowledge of computer science concepts, the reality is that candidates, driven by the desire to ace interviews, turn to **pattern recognition-based studying** to memorize solutions and guarantee success.

The reality is that if you were to ask a candidate if they could solve a LeetCode hard and they actually knew the answer instantly, they probably memorized the solution.

I personally almost see it as a red flag if a developer is only doing LeetCode questions instead of working on real projects.

---

## Where Did Algorithm Questions Come From?

Before algorithm-based questions, we had **“brain teasers.”** Questions like _[“How Would You Move Mount Fuji?”](https://www.amazon.com/How-Would-Move-Mount-Fuji/dp/0316778494)_ were used to gauge candidates' creativity, problem-solving skills, adaptability, and capacity to innovate [[1]](#sources).

As newer tech startups emerged, many copied interviewing styles and questions directly from pioneers like Microsoft. This had the effect of transforming somewhat niche and arcane trivia questions into the industry standard [[2]](#sources). However, these questions failed to assess any kind of true technical ability and have largely fallen out of favor [[2]](#sources).

The most common narrative I’ve found online for the creation of LeetCode-style algorithm questions is that large FAANG companies _“determined through their interview research that the smartest candidates were the ones who were best at algorithms. Google wanted to hire the smartest people, not necessarily the best coders, so that’s why their interviews were mostly algorithmic_ [[3]](#sources).”

Alike to how the industry copied the trend of using brain teasers to hire, they have since also copy pasted the practice of using these algorithm based questions.

Although LeetCode style questions will probably permitate the industry forever, the reality is that there is enough recognition that these questions are lacking in assessing true software development skills.

This has lead to many companies and platforms reevaluating the kinds of questions used in interviews and online assessments (OAs)

---

## Not All Assessments Are LeetCode Questions

While LeetCode-style questions will likely continue to permeate the industry, there is a growing awareness that **technical interviews need to evolve.** Companies are increasingly experimenting with more practical and diverse approaches to candidate evaluation.

Here are some of the most notable alternatives to algorithm-based questions:

### Integration Style Questions

These challenges assess a candidate's ability to integrate various systems or modules, reflecting the types of tasks frequently encountered in real-world development. For example, a question might ask:

_"Using this provided API, retrieve and calculate the necessary data to solve the given problem."_

I can anecdotally say I’ve completed many internship interviews that use this style, however they tend to be less common than LeetCode and tend to be more popular with smaller and startup companies.

### "Find the Bug" Style Assessments

In these assessments, candidates are given pre-written code containing flaws and tasked with identifying and fixing the issues. This approach emphasizes debugging and code comprehension skills.

Anecdotally, I’ve only seen this approach used twice as a student, but I’ve seen it multiple times now in interviewing for full time roles.

During an OA for an intern position with Amazon in 2021, I was presented with five bugged pieces of code and given 20 minutes to resolve each of the bugs. The bugs were straightforward, such as a loop iterating one index too far, where the solution was to change the <= operator in the for loop to a <.

### Take-Home Assessments and Presentations

Take-home assessments are probably the best way to evaluate a developer's real-world ability to create functional software. These assessments typically involve building a project to meet specific requirements or performing tasks that simulate day-to-day development work. For example, candidates might be asked to create a small application, write a detailed pull request (PR) review, or debug and improve an existing codebase.

One key issue is verifying whether the submitted work was done by the candidate themselves. To address this, many companies combine take-home projects with follow-up presentations or pair-programming sessions during interviews. This allows candidates to explain their thought process, defend their design choices, and demonstrate their understanding of the code they submitted.

These types of assessments are more common for full-time roles but are sometimes used for student or internship positions as well. For instance, during [Shopify's Fall 2021 hiring cycle, I completed a take-home assessment](https://github.com/MathyouMB/paintstand).

In my experience with full-time positions, take-homes have ranged from creating a project that meets defined requirements to tasks like reviewing a provided pull request. In one case, I was asked to submit a code review, and the interview itself involved pair-programming to implement my suggested changes.

### System Design Whiteboard Questions

System design questions are not a common type of interview for students and early-career candidates but are occasionally included. These questions ask candidates to describe, at a high level, how they would hypothetically design a system to solve a given problem.

Examples of system design prompts include:

- How would you design a ride-sharing app like Uber?
- How would you architect a video streaming platform like YouTube?
- How would you design a search engine like Google?
- How would you design a file sharing platform like Google Drive?

These interviews focus on assessing a candidate's understanding of system components, their ability to identify key requirements and constraints, and their capacity to account for edge cases that could impact the system's design.

Although rare for students, I have definitely seen these questions once or twice. I was once asked to explain how I’d design an app for managing parking spaces as a 2nd year student and was caught off guard because I didn't know how to properly approach the question.

While these questions can be challenging, demonstrating a clear thought process and structured approach is often more important than arriving at a "perfect" solution.

---

## The Recent Impact of AI

A recent trend in hiring is that some companies are shifting away from straightforward algorithm-based questions because AI tools have made it way easier to cheat or easily solve these questions.

To counter this, companies are designing coding problems that are intentionally challenging for AI to tackle. For example, some use overly complex or “wordy” prompts to confuse AI, while others require strong visual problem-solving skills—an area where AI still falls short.

---

## What Else Should You Do to Prepare?

This topic could easily fill an entire article, but if I had to give you a quick rundown, here are a few key tips:

### Practice Other Problem Styles

Once you get into the rhythm of solving LeetCode problems, it’s easy to get too comfortable with that specific format. To challenge yourself and diversify your skills, try exploring other platforms.

I highly recommend tackling [Advent of Code](https://adventofcode.com/) problems. These often involve parsing longer and more complex prompts than what you’d typically encounter on LeetCode.

### Improve Technical Communication Skills

While only a fraction of jobs will require solving a LeetCode-style question, every single development interview will expect you to clearly articulate your technical knowledge.

Students often categorize interviews as either "behavioral" or "technical," but in reality, whenever you're speaking with someone in a technical role, it’s an opportunity to demonstrate the depth of your skills, knowledge, and ability to communicate effectively.

Questions like “tell me about something you built” or “tell me about this bullet on your resume” are questions that are asked to candidates of ALL job levels, and the way you answer these questions is how an engineering manager is going to peg what “level” they feel you’re at.

I’ve found videos [like the following](https://www.youtube.com/watch?v=hU6BVxtGd5g) with example interviews have been the most helpful for me personally in trying to improve the way I communicate my technical skills.

<iframe width="560" height="315" src="https://www.youtube.com/embed/hU6BVxtGd5g?si=xoPm_GHgP5Nnt96g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Build Actual Projects

While practicing coding problems is important, it’s not enough to develop the well-rounded skills you’ll need to thrive in a real-world tech environment.

Some day you are going to be asked: “Tell me about something you’ve built,” and if the best example you have is a school assignment, it isn’t going to leave a strong impression.

Building projects shouldn’t feel like a chore to you if you are trying to get hired as a software developer, if it does; that’s a red flag.

---

## My Experience Across 5000+ Job Applications

If you read my article [“4 Years of Work Experience Before Graduation: Working and Studying At The Same Time”](https://matthewmacraebovell.com/blog/working-and-studying-at-the-same-time/), you’ll know I’ve done quite a few internships, and in doing so have done exponentially more job applications and interviews.

As context, It’s important to understand that I’m Canadian, do not apply often to American companies, and have never worked in the United States. I also live in Ottawa, which is a less major city than Toronto, Vancouver, or Montreal. I don’t have numerical records of every interview I’ve done, but I just wanted to include these gut feelings so you have some basis of how I’d answer how much LeetCode feels relevant to me personally.

As a second year student applying to positions mainly in Ottawa, I’d say maybe 50% of hiring processes I experienced had some kind of LeetCode adjacent element. However, I can also tell you that I received multiple internship offers after just having 30 minute phone conversations with no LeetCode element being involved whatsoever.

In applying to more competitive and American internship positions, I definitely felt there was an uptick in the number of OAs that had LeetCode medium+ level questions. I would go as far as to say that at the time of being a third year student, it felt like 2 out of 3 hiring processes had LeetCode.

During my last job search, when I was applying primarily to junior and intermediate roles, I noticed there was a much lower number of traditional LeetCode-style questions. Instead, I encountered a much higher number of take-home assignments, and online assessments designed to actually face in a real-world job environment.

---

## In Defense of LeetCode

As I discussed in my previous article, [“Why Computer Science Students Are Struggling to Find Jobs”](https://matthewmacraebovell.com/blog/why-computer-science-students-are-struggling-to-find-jobs/), the unfortunate reality is that many students graduate without the skills needed to build software.

In a world where finding a student who can build actual things is rare, the next best option is identifying those who at least paid attention in class.

This is where LeetCode-style questions, despite their flaws, serve a purpose. If there's one group for whom these questions make the most sense, it’s students. Fresh out of courses on algorithms and data structures, they’re in the best position to tackle these types of problems, and doing so can demonstrate that they’ve at least paid attention throughout their degree.

Much of the backlash against LeetCode in the broader developer community is valid, especially for mid-level or senior positions, where real-world skills and experience should weigh far more heavily. However, there is some truth to using LeetCode style questions to evaluate students.

---

## Conclusion: "Yes, but not your sole focus."

LeetCode should be a part of your interview preparation, but it shouldn’t be your only focus.

You are going to see LeetCode style questions throughout your career, but excelling in technical interviews requires more than just memorizing solutions—it requires showcasing strong communication skills and practical experience.

In summary:

**Yes**, use LeetCode to prepare for the types of questions you’re likely to encounter.

**But**, don’t stop there. Balance your preparation by working on real projects, improving your communication, and familiarizing yourself with alternative interview formats.

Ultimately, a well-rounded approach will better prepare you and give you the confidence to succeed.

---

### Sources:

1. Ryan Loftus, [The Past, Present, and Future of the Technical Interview](https://www.hackerrank.com/blog/past-present-future-technical-interview/?utm_source=chatgpt.com), _HackerRank_.

2. Martha C. White, [No-Brainer: ‘Brainteaser’ Job Interview Questions Don’t Work](https://business.time.com/2012/10/23/no-brainer-brainteaser-job-interview-questions-dont-work/), _Time_.

3. bluehorizon2, [HackerNews Comment](https://www.google.com/url?q=https://news.ycombinator.com/item?id%3D37914154%23:~:text%3DThe%2520initial%2520reason%2520why%2520we,their%2520interviews%2520were%2520mostly%2520algorithmic.&sa=D&source=docs&ust=1735179416854869&usg=AOvVaw1nXUYPnD4qLnjtjEU1Dyus), _Hacker News_

<hr/>
<br/>

_Want advice or just interested in chatting? Feel free to book a chat with me [here](https://calendly.com/matthewmacraebovell/chats) to discuss career stuff, jobs searching, resumes, etc._
