---
title: "How to Make Code Reviews Faster and Less Painful"
description: "Actual ways to make code reviews less frustrating, giving you more time to focus on the code itself"
date: 2025-07-02
image: "/images/articles/default.png"
draft: false
featured: false
---

![badger-developing](/images/articles/default.png)

After working with dozens of teams across various different organizations, one thing still surprises me: **just how inconsistent code review practices are.**

Some of the techniques I’ve picked up over the years seem so obvious and helpful that it’s baffling they aren’t standard everywhere. These aren’t abstract ideas or one-off edge cases — they’re simple, repeatable habits that make code reviews faster, more constructive, and way less frustrating.

Here are the code review practices I've found most effective in my experience, and that I wish every team would adopt:

---

## 1. Resolve Comments with Isolated Commits

When you update your code in response to feedback, put that fix in its own separate commit — ideally one per resolved comment or one per logical change.

Here is an example of how this might look in practice:


This commit acts like a receipt that you did actually address the feedback. It’s a clear, isolated change that shows you took the time to understand and implement the reviewer’s suggestions.

This makes life easier for the reviewer: instead of re-reading your entire diff, they can jump straight to the isolated commit and confirm the fix. It dramatically reduces cognitive load and makes re-reviews faster and more focused.

The only issue with this strategy is that if you have to rebase, the ids of all your commits will be changed. However, for simple grammar fixes, or if you don’t plan to rebase until just before you merge, this practice definitely holds true.

---

## 2. Designate Blocking vs. Non-Blocking Comments

Sometimes reviewers leave feedback that’s not clear on whether it **must** be addressed before merging. This causes churn, confusion, and delay.

That’s why I recommend using a system like [**Conventional Comments**](https://conventionalcomments.org/) — a standard for labeling review comments clearly.

For example:

```text
suggestion (non-blocking): Rename this variable to `userList` for clarity.

Not a big deal, but I think this reads more clearly.
```

Or:

```text
issue (blocking): This breaks on null input.

Can we add a check here to avoid the crash?
```

Labels like `issue`, `suggestion`, `question`, and `praise`, paired with decorations like `(blocking)` or `(non-blocking)`, make it crystal clear what kind of feedback you’re leaving — and what needs to be acted on.

It saves hours of back-and-forth and helps keep reviews focused and respectful.

---

## 3. Communicate What You Want From Your Review

Not every PR is meant to be merged. Sometimes you’re just looking for feedback on architecture, naming, or approach.

Make that explicit. 

In your PR description, clearly state what kind of feedback you’re looking for:

```text
This PR is still a work in progress, but I’d love your thoughts on the overall architecture and whether this abstraction makes sense before I build out the full implementation.
```

Don't get add your reviewer to the PR, @mention them, and guide them to the relevant parts of the code.

Example:

```text
Hey @janedoe — I’d love your thoughts on whether this abstraction makes sense before I build out the full implementation and write tests.
```

This helps reviewers give more relevant, high-signal feedback — and it prevents frustration on both sides.

Mark the PR as a **draft** if it’s still in progress.
---

## 3. Provide Clear Reproduction Steps

Never assume your reviewer has the full context or environment to run your changes smoothly.

- **Include exact, step-by-step instructions** for testing — think “Click here, go there, do this.”
- **Add screenshots or screen recordings** showing the feature in action.
- If your change is purely application-based (e.g., logic-only), include **copy-pastable console commands** with expected results.

Your job is to lower the activation energy for the reviewer to say “LGTM.” The easier you make it to test your code, the faster you’ll get a confident approval.

---

## 4. Preload Test Data for Reviewers

Some features rely on very specific data to be testable. Don’t assume the reviewer already has the right setup.

- Include scripts or commands to **seed test data** into their environment.
- Share mock files, payloads, or fixtures if applicable.
- Call out any test flags or feature toggles they need to enable.

This reduces frustration and helps the reviewer see the same behavior you’re seeing.

---

## 6. Comment on Your Own PR Before Anyone Else Does

One underrated technique: review your own code before anyone else does — and leave comments on it.

Use these comments to:

- Highlight complex or non-obvious decisions.
- Ask questions or surface doubts.
- Direct the reviewer’s attention to specific sections.

Example:

```text
thought: This helper feels a bit awkward, but I couldn’t think of a better place to put it. Open to suggestions.
```

It shows thoughtfulness, reduces miscommunication, and often invites more productive discussions.
