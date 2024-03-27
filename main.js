import inquirer from "inquirer";
let myBalance = 10000;
let pinCode = 1234;
let pinAnswer = await inquirer.prompt([
    { name: `pin`,
        message: `Enter your pin`,
        type: `number`
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log(`correct pin code`);
    let operationAns = await inquirer.prompt([
        {
            name: `operation`,
            message: `select the operation you want to perform`,
            type: `list`,
            choices: [`withdraw`, `check balance`, `Fast cash`]
        }
    ]);
    if (operationAns.operation === `withdraw`) {
        let amountAns = await inquirer.prompt([
            {
                name: `amount`,
                message: `enter your amount`,
                type: `number`
            }
        ]);
        let amount = amountAns.amount;
        if (amount <= myBalance) {
            myBalance -= amount;
            console.log(`Withdrawal successful. Your remaining balance is:${myBalance}`);
        }
        else {
            console.log(`Insufficient funds. Please enter a smaller amount.`);
        }
    }
    else if (operationAns.operation === `Fast cash`) {
        let amountans = await inquirer.prompt([
            {
                name: `fastcash`,
                message: `select the amount you want to cashout`,
                type: `list`,
                choices: [2000, 4000, 6000, 8000, 10000]
            }
        ]);
        myBalance -= amountans.fastcash;
        console.log(`your remaining balance is:${myBalance}`);
    }
    else if (operationAns.operation === `check balance`) {
        console.log(`your balance is:${myBalance}`);
    }
}
else {
    console.log(`Incorrect pin`);
}
