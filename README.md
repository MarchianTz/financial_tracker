# Financial Tracker

A comprehensive Angular application for managing personal financial transactions with persistent storage and Indonesian Rupiah (IDR) currency support.

## Quick Start

### Prerequisites
- Node.js 18+
- Angular CLI 20.3.8+

### Installation & Running

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/` in your browser.

## Features

- **Add Transactions**: Create income or expense records with dates and amounts
- **View Transactions**: List all transactions in a Material Design table
- **Delete Transactions**: Remove unwanted transaction records
- **Persistent Storage**: All transactions auto-save to browser localStorage
- **Indonesian Locale**: Currency formatted in Indonesian Rupiah (IDR)
- **Responsive UI**: Material Design components for desktop and mobile

## Project Structure

### Components
- **TransactionList** (`src/app/transaction-list/`): Displays all transactions in a table with delete functionality
- **AddTransaction** (`src/app/add-transaction/`): Form component for creating new transactions with validation

### Services
- **TransactionService** (`src/app/services/transaction.service.ts`): Handles CRUD operations and localStorage persistence

### Key Files
- `src/app/app.ts`: Main app component with toolbar and routing
- `src/app/app.routes.ts`: Route configuration for `/transactions` and `/add`
- `src/app/models/transaction.ts`: Transaction data model interface

## Documentation & Diagrams

Complete documentation is available in the `docs/` directory:

- **[Financial Tracker Report (PDF)](docs/Financial_Tracker_Report.pdf)** — Full report with system description, component architecture, use-case diagrams, sequence flows, and screenshots
- `docs/use-case-descriptions.md` — Detailed use-case specifications (goals, actors, flows, postconditions)
- `docs/sequence-to-angular-mapping.md` — Mapping between sequence diagram flows and Angular implementation
- `docs/*.puml` — PlantUML source files for UML diagrams

### View Diagrams

PlantUML files can be viewed/edited in:
- [PlantUML Online Editor](http://www.plantuml.com/plantuml/uml/)
- VS Code with PlantUML extension (`jebbs.plantuml`)

## Development server

To start a local development server with hot reload, run:

```bash
ng serve
```

or

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

###### This project was made to fulfill a college subject requirements. [FRAMEWORK BASED PROGRAMMING]
