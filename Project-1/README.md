# Habitable Planets Finder

This project processes NASA's Kepler dataset to identify potentially habitable exoplanets based on specific criteria such as planet size and distance from its star. The dataset is parsed from a CSV file, and the script filters planets to output a list of candidates.

## Setup

To set up the project, follow these steps:

```bash
# Step 1: Initialize the project with a package.json
npm init -y

# Step 2: Install TypeScript and related development dependencies
npm i -D typescript @types/node ts-node

# Step 3: Initialize a TypeScript configuration file
npx tsc --init

# Step 4: Install the csv-parse library for parsing CSV files
npm i csv-parse
```

## Usage

1. Place your Kepler dataset file (`kepler_data.csv`) in the root directory of the project.

2. Write your script in TypeScript (`index.ts`). This script reads the CSV file, processes the data, and logs the results.

3. Run the script using the following command:

   ```bash
   npm start
   ```

   This will execute the script defined in the `start` script of your `package.json` file:

   ```json
   "scripts": {
     "start": "ts-node index.ts"
   }
   ```

## Project Purpose

The goal of this project is to:

- Parse a CSV dataset containing information about Kepler exoplanets.
- Apply filtering criteria to identify potentially habitable planets.
- Output the names of habitable planets and the total count.

This project demonstrates the use of TypeScript, `csv-parse`, and Node.js to process scientific data effectively.

## Files in the Project

- **`index.ts`**: The main script that reads and processes the CSV file.
- **`kepler_data.csv`**: The dataset file containing information about Kepler planets.
- **`package.json`**: Project metadata and dependencies.
- **`tsconfig.json`**: TypeScript configuration file.
