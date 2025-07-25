---
title: "How to Make Code Reviews Faster and Less Painful"
description: "Actual ways to make code reviews less frustrating, giving you more time to focus on the code itself"
date: 2025-07-02
image: "/images/articles/2025/how-to-make-code-reviews-less-painful/cover.png"
draft: false
featured: true
---

![Code Review](/images/articles/2025/how-to-make-code-reviews-less-painful/cover.png)

After working with dozens of teams across all kinds of organizations, I’m still surprised by how wildly **inconsistent** code review practices can be.

Over the years, I’ve picked up a handful of techniques that make reviews faster, clearer, and far less painful and honestly, some of them feel so obvious that I’m baffled they’re not standard everywhere.

I’m not talking about the usual tips you see in every article like:

- Keep PRs small and focused
- Add context in the PR description
- Use automated checks to catch low-hanging issues
- Do a self-review before assigning someone else

Those are all important, but I want to go deeper. Here are my tips in no particular order:

<br/>

## 1. Resolve Comments with Isolated Commits

When you update your code in response to feedback, put that fix in its own separate commit — ideally one per resolved comment or one per logical change.

Here is an example of how this might look in practice:

![badger-developing](/images/articles/2025/how-to-make-code-reviews-less-painful/resolve-comments-with-isolated-commits.png)

This makes life easier for the reviewer: instead of **re-reading your entire diff**, they can jump straight to the isolated commit and confirm the fix, dramatically reducing the cognitive load needed to re-review the code.

This commit acts like a receipt that you did actually address the feedback. It’s clear and shows you actually implemented the reviewer’s suggestions.

A very common scenario is the PR author resolving a comment without actually making the change the reviewer requested. This practice helps prevent that, as the reviewer can easily see what was changed in response to their feedback.

The only issue with this strategy is that if you have to rebase, the ids of all your commits will be changed. However, if you feel you'll need to rebase, do it before you start resolving comments. This way, the commit ids will remain stable, and the reviewer can easily track which comments were addressed in which commits.

<br/>

## 2. Mark Blocking vs. Non-Blocking Comments

Sometimes it's not clear whether a comment **must** be addressed before merging. This causes churn, confusion, and delay.

That’s why I recommend using a system like [Conventional Comments](https://conventionalcomments.org/) — a standard for labeling review comments clearly.

For example:

```text
suggestion (non-blocking): Update name for clarity

Not a big deal, but I think another name like `userList` could improve clarity here.
```

Or:

```text
issue (blocking): This breaks on null input.

Can we add a check here to avoid the crash?
```

Labels like `issue`, `suggestion`, `question`, and `praise`, paired with decorations like `(blocking)` or `(non-blocking)`, make it crystal clear what kind of feedback you’re leaving — and what needs to be acted on.

It saves hours of back-and-forth and helps keep reviews focused and respectful.

<br/>

## 3. Communicate Where You Want Feedback

When you submit a PR, be proactive about guiding your reviewers to the parts of the code that need their attention.

Use comments to:

- Highlight complex or non-obvious decisions.
- Ask questions or surface doubts.
- Direct the reviewer’s attention to specific sections.

Example:

```text
thought: This helper feels a bit awkward, but I couldn’t think of a better place to put it. Open to suggestions.
```

<br/>

Especially on drafts where you're looking for feedback on structure, design, or approach rather than specific implementation details, explicitly say what kind of feedback you’re looking for.

In your PR description, clearly state what kind of feedback you’re looking for:

```text
This PR is still a work in progress, but I’d love your thoughts on the structure I've chosen and whether the abstractions make sense. I’ll add tests once we agree on the approach.
```

Additionally, don't just add your reviewer to the PR, **use @mentions to guide reviewers** to the relevant parts of the code.

Example:

```text
Hey @janedoe — I’d love your thoughts on whether this abstraction makes sense before I build out the full implementation and write tests.
```

This helps reviewers give more relevant, high-signal feedback — and it prevents frustration on both sides.

Always mark your PRs as **drafts** if they are still in progress.

<br/>

## 4. Use a Git Patch for Complex Suggestions

If you as the reviewer have a strong opinion about how a piece of code should be written, **don’t** just leave a comment...

Suggest the change directly using a **Git patch**.

Everyone **hates** comments where a reviewer borderline asks them to rewrite the entire PR.

While it is the author's responsibility to avoid getting to that kind of situation through early communication and drafts, it brings code reviews to a grinding halt when a reviewer suggests a change that is not only complex but also requires a lot of back-and-forth discussion.

Instead of back and forth comments, create a Git patch that implements your suggestion directly.

Creating a Git patch is also a great **sanity check** — it forces you to think through whether your suggestion is practical or whether it would require the author to rewrite half the codebase.

Suggesting in-line with _```suggestion_ comments are great, but they don't work for situations where the change is more complex or requires multiple files to be updated. A Git patch on the other hand, is a complete, self-contained change that the author can apply directly to their branch.

Is it **too much effort** to create a Git patch? Then maybe your suggestion isn't as important as you think it is. Or maybe you should just pair program with the author to implement the change together.

<br/>

## 5. Include Real Testing Instructions

When you submit a PR, **don’t assume** the reviewer knows how to test your changes. Unclear or missing testing instructions are only going to make your reviewers job more frustrating and slow down the time it takes to get your PR approved.

It would be great if text-based step-by-step instructions was enough, but in more complicated apps, your text instructions won't show "where to click" or "what to look for" in the UI.

Screenshots, videos, or most ideally a step-by-step guide created using a **FREE** chrome extension like [Scribe](https://scribehow.com/) or [Loom](https://www.loom.com/).

Seriously, using a tool like Scribe only takes seconds to create a complete visual guide showing your reviewer where to click.

I can't claim that these are the best two options, but they are the ones I've used and they've worked for me.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9f2EkvJ_p8Y?si=mq_RlgaGvq6tN4u7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

## 6. Include Setup Scripts and Test Data

Some features rely on very specific data to be testable. Don’t assume the reviewer already has the right setup.

Make it easy for them by:

- Including scripts or commands to **seed test data** into their environment.
- Sharing **mock files**, **request bodies**, or **fixtures** for API endpoints.
- Calling out any **feature flags** or **env variables** that need to be toggled.

This reduces frustration and helps the reviewer see the same behavior you’re seeing.

### Example: Seeding Local Test Data

If your feature requires specific data to be present, provide a script that sets it up. For example, if you’re working with a Pythin app, you might include script like this in your PR:

```python
from myapp.models import User, Project, Task

user, created = User.objects.get_or_create(
    email="reviewer@example.com",
    defaults={
        "name": "Code Reviewer",
        "password": "securepassword",
    }
)

project = Project.objects.create(
    name="Test Project for Review",
    owner=user
)

for i in range(3):
    Task.objects.create(
        title=f"Sample Task #{i + 1}",
        project=project,
        completed=False
    )

print(f"✅ Created test project and tasks for {user.email}")

```

This gives your reviewer an environment that mirrors yours, without needing to guess what to create or click.

### Example: Sample API Request Body

If you’re building or modifying an endpoint, include a sample payload the reviewer can send via Postman, `curl`, or whatever tool they prefer:

```json
POST /api/v1/invite
Content-Type: application/json

{
  "emails": ["alice@example.com", "bob@example.com"],
  "role": "editor",
  "project_id": "proj_1234"
}
```

You can even go a step further and include a ready-to-use curl command:

```bash
curl -X POST http://localhost:3000/api/v1/invite \
  -H "Content-Type: application/json" \
  -d '{
    "emails": ["alice@example.com", "bob@example.com"],
    "role": "editor",
    "project_id": "proj_1234"
  }'
```

<br/>

## Conclusion

By adopting these practices, you can make code reviews faster, more constructive, and less frustrating for everyone involved. They help ensure that feedback is actionable, clear, and focused on improving the code rather than just nitpicking.

These techniques have worked well for me and the teams I’ve worked with, and I hope they help you too. If you have any other tips or practices that have worked for you, I’d love to hear them!

<hr/>
<br/>

_Want advice or just interested in chatting? Feel free to book a chat with me [here](https://calendly.com/matthewmacraebovell/chats) to discuss career stuff, jobs searching, resumes, etc._
