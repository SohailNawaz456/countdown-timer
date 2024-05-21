#! /usr/bin/env node

import inquirer from "inquirer"; // Importing inquirer for user prompts
import chalk from "chalk"; // Importing chalk for colorful console output
 
console.log(chalk.yellowBright.bold.italic("    Wellcome To 'Sohailnawaz with-Code 🚦🚦🚦'"));

// Main function to run the countdown timer
async function main() {
  // Prompt the user to enter the number of seconds
  const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: chalk.greenBright("Enter amount of seconds:"),
    validate: (input) => {
      // Validation to ensure the input is a number and not greater than 60
      if (isNaN(input)) {
        return "Please enter a valid number";
      } else if (input > 60) {
        return "Seconds must be 60 or less";
      } else {
        return true;
      }
    },
  });

  // Store the user's input
  let input = res.userInput;

  // Function to start the timer with the given number of seconds
  function startTime(val: number) {
    let remainingTime = val; // Initialize remaining time with the input value

    // Set an interval to update the countdown every second
    const intervalId = setInterval(() => {
      // Check if the remaining time is zero or less
      if (remainingTime <= 0) {
        console.log(chalk.red("Timer has expired")); // Print expiration message in red
        clearInterval(intervalId); // Clear the interval to stop the countdown
        process.exit(); // Exit the process
      }

      // Calculate minutes and seconds from the remaining time
      const min = Math.floor((remainingTime % (3600 * 24)) / 3600);
      const sec = Math.floor(remainingTime % 60);

      // Print the remaining time in blue
      console.log(
        chalk.cyanBright(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`)
      );

      remainingTime--; // Decrement the remaining time by one second
    }, 1000); // Interval set to 1000 milliseconds (1 second)
  }

  startTime(input); // Start the timer with the user input
}

main(); // Call the main function to start the process
