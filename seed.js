const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/books");

async function seed() {
  const myBook = new Book({
    title: "Firm Commitments",
    description:
      "When the company she works for is sold unexpectedly, successful executive Cydney Kelly is assigned to work with her new bossDaryl Burke-Carter and as the promise of love blossoms, rumors and lies permeate the office threatening to tear them apart.",
    status: "Available, 1998, Finished",
  });
  myBook.save(function (error) {
    if (error) console.error(err);
    else console.log(" saved Firm Commitments");
  });

  await Book.create({
    title: "Fear and Loathing in Las Vegas",
    description:
      "The story follows its protagonist, Raoul Duke, and his attorney, Doctor Gonzo, as they descend on Las Vegas to chase the American Dream through a drug-induced haze, all the while ruminating on the failure of the 1960s countercultural movement.",
    status: "Available, 1972, Finished",
  });
  console.log("saved Fear and Loathing in Las Vegas");

  await Book.create({
    title: "A Taste of Power",
    description:
      "A memoir written by Elaine Brown. The book follows her life from childhood up through her activism with the Black Panther Party. In the early chapters of the book, Brown recalls growing up on York Street in a rough neighborhood of North Philadelphia.",
    status: "Available, 1992, Finished",
  });
  console.log("saved A Taste of Power");
}

seed();
