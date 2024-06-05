#! /usr/bin/env node

// Making a simple to-do list application.

import inquirer from "inquirer";
import chalk from "chalk";

// Making a variable for an empty array in which all the tasks given by user will be added.
let toDoList: string[] = [];
let conditions = true;

// Printing the title of Application.
console.log(
  chalk.green("======================================================")
);
console.log(chalk.bold.blue("\tWelcome to the To-do List Application"));
console.log(
  chalk.green("======================================================")
);

// Making a function to ask the user to enter the task using a while loop.
while (conditions) {
  let addTask = await inquirer.prompt([
    {
      type: "input",
      name: "task",
      message: chalk.yellow("\tEnter the task to be added to the list: "),
    },
  ]);

  // Adding the task to the array.
  toDoList.push(addTask.task);

  // Print the task added to the list successfully.
  console.log(
    chalk.blue("------------------------------------------------------")
  );
  console.log(
    chalk.green(`\t${addTask.task} Task added to the list successfully.`)
  );
  console.log(
    chalk.blue("------------------------------------------------------")
  );

  // Asking the user if he/she wants to add another task.
  let anotherTask = await inquirer.prompt([
    {
      type: "confirm",
      name: "anotherTask",
      message: chalk.yellow("\tDo you want to add another task?"),
    },
  ]);

  // If the user wants to add another task then the loop will continue.
  conditions = anotherTask.anotherTask;
}

// Print the final to-do list of user tasks.
console.log(
  chalk.green("======================================================")
);
console.log(chalk.bold.blue(`\tYour to-do list is:`));
console.log(
  chalk.green("======================================================")
);
console.log(chalk.magenta(toDoList.join("\n")));
console.log(
  chalk.green("======================================================")
);
