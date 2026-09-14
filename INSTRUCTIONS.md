# 🚀 GitHub Practice: Step-by-Step

Follow these steps in order. Don't skip ahead — each one builds on the last.

## 1. Read the repo

Look around first:

- Open `index.html`, `style.css`, and `script.js` and skim what they do.
- Open the `students/` folder — this is where your work will go.

## 2. Create your own branch

Never work directly on `main`. On the GitHub repo page:

- Click the branch dropdown (usually says `main`).
- Type a new branch name, e.g. `add-firstname-lastinitial`.
- Click **Create branch: `your-branch-name` from `main`**.
- _Example: `add-david-c`_

Make sure the branch dropdown now shows _your_ branch before continuing.

## 3. Open a Codespace on your branch

- With your branch selected, click the green **Code** button.
- Go to the **Codespaces** tab.
- Click **Create codespace on `your-branch-name`**.
- Wait for it to load — you'll get a full VS Code editor in your browser.

## 4. Create your folder and file

Inside the Codespace terminal, create a new folder for yourself inside `students/`, using your name in lowercase with dashes instead of spaces:

```bash
mkdir students/your-name
touch students/your-name/index.html
```

## 5. Edit your file

Open `students/your-name/index.html` and add a simple page about yourself.

Also add a link to your page in the root `index.html`, inside the `<ul id="student-list">`:

```html
<li><a href="students/your-name/index.html">Your Name</a></li>
```

## 6. Commit your work

In the Codespace terminal, stash and commit your work

## 7. Push your branch

The first time you push, GitHub may print a link to open a pull request directly — you can use that, or do step 8 manually.

## 8. Open a pull request

- Go back to the repo on GitHub.com.
- You should see a banner: **"your-branch-name had recent pushes"** with a **Compare & pull request** button. Click it.
- Add a short title and description of what you did.
- Click **Create pull request**.

## ✅ You're done!

---

### Quick reference

| Step            | Command / Action                                                  |
| --------------- | ----------------------------------------------------------------- |
| Create branch   | GitHub branch dropdown → type name → Create branch                |
| Open Codespace  | Code button → Codespaces tab → Create codespace                   |
| New folder/file | `mkdir students/your-name && touch students/your-name/index.html` |
| Stage changes   | `git add .`                                                       |
| Commit          | `git commit -m "your message"`                                    |
| Push            | `git push origin your-branch-name`                                |
| Open PR         | GitHub banner → Compare & pull request → Create pull request      |
