import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.94,
    AED: 3.67,
    PKR: 278
};
let userAns = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "AED", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "AED", "PKR"]
    },
    {
        name: "Amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount = userAns.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
