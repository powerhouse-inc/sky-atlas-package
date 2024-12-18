# Atlas Scope Document Models

This is a collection of document models for the Atlas Scope project.


## Setup

Use `bun` for faster install / load times. Alternatively, use `npm` or `pnpm`.   
Get `bun` from [bun.sh](https://bun.sh/)

To run connect with reactor follow below steps:

1. `bun install`
2. `bun generate` - this will generate the document models code from the schemas
3. `bun reactor` - this will start the reactor server
4. In connect `http://localhost:3000/` - On the left hand side menu, click  on the + sign of `Public Drives`and add the `http://localhost:4001/d/powerhouse` url drive. After adding the drive you now should see a `Powerhouse` drive in the list of public drives.
5. Back in your code editor/terminal run `bun scripts/atlas-scope/main.ts` - this will start the script that will populate the scope documents with the data.

Final output should be: 

```bash
bun scripts/atlas-scope/main.ts
Adding scope Atlas Preamble
Adding scope The Accessibility Scope
Adding scope The Protocol Scope
Adding scope The Stability Scope
Adding scope The Support Scope
Adding scope The Governance Scope
[1.77s] script
```

And the folder structure in connect should look like this:
```
Powerhouse/
└── Sky Atlas/
├── A.0 Atlas Preamble/
│ └── A.0 Atlas Preamble
├── A.1 The Governance Scope/
│ └── A.1 The Governance Scope
├── A.2 The Support Scope/
│ └── A.2 The Support Scope
├── A.3 The Stability Scope/
│ └── A.3 The Stability Scope
├── A.4 The Protocol Scope/
│ └── A.4 The Protocol Scope
└── A.5 The Accessibility Scope/
└── A.5 The Accessibility Scope
```