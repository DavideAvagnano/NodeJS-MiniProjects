import { parse } from "csv-parse";
import fs from "fs";

// Array to store the habitable planets found
const habitablePlanet: Record<string, any>[] = [];

// Function to check if a planet is habitable based on certain criteria
const isHabitablePlanet = (planet: Record<string, any>): boolean => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

// Reading and parsing the CSV file
fs.createReadStream("kepler_data.csv")
  // Create a readable stream for the CSV file
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data: Record<string, any>) => {
    if (isHabitablePlanet(data)) {
      habitablePlanet.push(data);
    }
  })
  .on("error", (err: Error) => {
    console.error(err);
  })
  .on("end", () => {
    const habitablePlanetsNames = habitablePlanet.map(
      (planet) => planet["kepler_name"]
    );
    console.log("Habitable Planets:\n");
    console.log(habitablePlanetsNames.join("\n"));
    console.log(`\nTotal: ${habitablePlanet.length} habitable planets found`);
  });
