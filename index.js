var number = prompt("enter a number");

function sqaureRoot(number) {
  try {
    if (number < 0) {
      throw new Error("Square root of a negative number cannot exist.");
    } else number > 0;
    console.log("The square rootnis:", result);
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
}
