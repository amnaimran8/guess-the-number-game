import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.underline.whiteBright("\t\t\t\t\tNUMBER GUESSING GAME"));
console.log(chalk.magenta("Rules:\n* The game will randomly generate a number between 1 and 100 and you have to guess that number,You have 5 trials\n\n\n"));
let r = Math.floor((Math.random() * 100) + 1);
export async function playGame() {
    let attempts = 0;
    while (true) {
        let a = await inquirer.prompt([
            {
                type: "number",
                name: "num1",
                message: chalk.blue("Guess a number between 1 and 100\n "),
                prefix: "."
            }
        ]);
        {
            if (a.num1 < 1 || a.num1 > 100) {
                console.log(chalk.red("\n\n* Number is out of range\n* Please try again between 1 and 100\n"));
            }
            else if (a.num1 == r) {
                console.log(chalk.magentaBright("\n\n* This is the right number\n* Congratulations, you've won!\n"));
                break;
            }
            else if (a.num1 < r) {
                console.log(chalk.yellow("\n\n* The number you choose is lower than the generated number\n* Please try choosing a higher number\n"));
            }
            else if (a.num1 > r) {
                console.log(chalk.green("\n\n* The number you choose is higher than the generated number\n* Please try chossing a lower number\n"));
            }
        }
        attempts++;
        console.log(chalk.redBright("* You've tried " + attempts + " times\n"));
        if (attempts === 5) {
            console.log(chalk.red("\n\n* You've lost the game. The correct number was " + r + "\n"));
            break;
        }
    }
    let b = await inquirer.prompt([
        {
            type: "list",
            name: "cho",
            message: chalk.blue("YOU WANT TO PLAY AGAIN ?"),
            choices: ["1. Yes", "2. No"],
            prefix: "*"
        }
    ]);
    console.log("\n");
    if (b.cho == "1. Yes") {
        playGame();
    }
    if (b.cho == "2. No") {
        console.log(chalk.blue("THANKS FOR YOUR TIME"));
    }
}
playGame();
