# Financial Tracker — Short Report

This short report documents the Financial Tracker application: what it does, the component structure, how to run it locally, and how to produce a PDF report containing screenshots as proof of running.

---

## 1) System Description

Financial Tracker is a small single-page application built with Angular and Angular Material. It lets a user:
- View a list of financial transactions (date, description, amount in IDR, type)
- Add new transactions via a form (date, description, amount, type)
- Delete transactions

Data persistence is implemented using the browser `localStorage` (key: `ft_transactions_v1`) via a dedicated `TransactionService`.

The app uses standalone Angular components and Angular Material for UI.

---

## 2) Component Structure (high level)

- Components (Controllers / Views):
  - `TransactionList` (`src/app/transaction-list/transaction-list.ts`)
    - Template: `src/app/transaction-list/transaction-list.html`
  - `AddTransaction` (`src/app/add-transaction/add-transaction.ts`)
    - Template: `src/app/add-transaction/add-transaction.html`

- Models:
  - `Transaction` interface (`src/app/models/transaction.ts`)

- Services:
  - `TransactionService` (`src/app/services/transaction.service.ts`)

- Routing:
  - `src/app/app.routes.ts`
    - `/transactions` → `TransactionList`
    - `/add` → `AddTransaction`

- Storage:
  - Browser `localStorage` used by `TransactionService` with key `ft_transactions_v1`.

---

## 3) How to Run the Application (Windows / PowerShell)

1. Install dependencies (if not already):

```powershell
npm install
```

2. Start the development server:

```powershell
npm start
```

- By default Angular serves at `http://localhost:4200` (confirm the terminal output after `npm start`).

3. Manual checks to perform in the browser:
- Open `http://localhost:4200`
- Click **View Transactions** to see a table (should be empty on first run or show saved transactions)
- Click **Add Transaction**, fill the form and submit — you should be redirected to `/transactions` and see the new transaction
- Click the delete icon (trash) on any row to remove it

---

## 4) Proof of Running Results (Screenshots)

I cannot capture screenshots automatically from this environment. Please follow these steps to produce screenshots and generate a PDF report.

### Recommended screenshots

Create a folder `docs/screenshots/` in the repository and save these images:

- `01_home.png` — the app home (toolbar visible)
- `02_transactions_empty_or_list.png` — the transactions list view (shows table or empty message)
- `03_add_form.png` — the Add Transaction form filled in (before submit)
- `04_after_add.png` — the transactions list showing the newly added transaction
- `05_after_delete.png` — the transactions list after deleting the transaction (optional)

On Windows you can use the Snipping Tool or `PrtSc` and paste to Paint and save, or use PowerShell script (example below) to capture the window.

### Optional PowerShell screenshot (requires third-party tools)
PowerShell alone does not have a built-in cross-platform headless screenshot tool. Use the Snipping Tool or a utility like `nircmd` or `ImageMagick`/`magick` for automation.

Example using `magick` (ImageMagick) to capture the screen (requires installation):

```powershell
# capture the entire screen (requires ImageMagick installed and in PATH)
magick import -window root docs/screenshots/01_home.png
```

### Generate PDF report (from markdown) using Pandoc (recommended)
If you have `pandoc` and a LaTeX engine (e.g., TinyTeX or MiKTeX) installed, run the following from the repo root:

```powershell
# convert the report markdown + embedded images (if present) into PDF
pandoc docs/report.md -o docs/Financial_Tracker_Report.pdf --pdf-engine=xelatex
```

To include the screenshots in the PDF, edit `docs/report.md` to include image markdown where you want them displayed, e.g.:

```markdown
![Home view](./screenshots/01_home.png)
```

Alternatively, use VS Code's Markdown preview and export to PDF via extensions.

---

## 5) Example Report Content (copy/paste into `docs/report.md` or to embed images)

Below is a short template you can paste into `docs/report.md`. It assumes screenshots are placed under `docs/screenshots/`.

````markdown
# Financial Tracker — Run Report

## Overview
Application: Financial Tracker

## Environment
- OS: Windows
- Node: ... (run `node -v`)
- npm: ... (run `npm -v`)

## Run Steps Taken
1. npm install
2. npm start
3. Opened http://localhost:4200

## Screenshots

### Home / Toolbar
![Home view](./screenshots/01_home.png)

### Transactions List
![Transactions list](./screenshots/02_transactions_empty_or_list.png)

### Add Transaction (filled Form)
![Add form](./screenshots/03_add_form.png)

### After Add (list shows new transaction)
![After add](./screenshots/04_after_add.png)

### After Delete (optional)
![After delete](./screenshots/05_after_delete.png)
````

---

## 6) Want me to generate the PDF for you?
Yes — I can generate the PDF if you:

- Add the requested screenshots into `docs/screenshots/` and commit them, or
- Give me permission to run a headless browser in the environment (I cannot do that without your approval and the necessary tools), or
- Install `pandoc` and a TeX engine locally and allow me to run the conversion command.

If you prefer, I can create the final `docs/report.md` with the images embedded if you upload the screenshots here; then I'll convert to PDF and add `docs/Financial_Tracker_Report.pdf`.

---

## 7) Files added by me
- `docs/report.md` — this report (you can rename or move it)


