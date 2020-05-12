"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const converter_enum_1 = require("./Conversion/converter-enum");
const exchange_operator_1 = require("./Exchange/exchange-operator");
// const args = yargs
//     .usage('Usage: $0 <command> [options]')
//     .command('exchange', 'Exchanges desired amount')
//     .example('$0 exchange -a 1000.00 USD', 'exchange and print receipt')
//     .alias('a', 'amount')
//     .alias('c', 'currency')
//     .nargs('a', 1)
//     .nargs('c', 1)
//     .describe('a', 'Amount to exchange')
//     .describe('c', 'Currency to exchange')
//     .demandOption(['a','c'])
//     .help('h')
//     .alias('h', 'help').argv;
// TODO: extract to own file
const args = yargs
    .usage('Usage: $0 <command> [options]')
    .example('$0 exchange -a 1000.00 -b USD -t ILS', 'exchange and print receipt')
    .command('exchange', 'Exchanges desired amount', {
    amount: {
        description: 'Desired amount to exchange',
        alias: 'a',
        type: 'number',
    }
})
    .option('base', {
    alias: 'b',
    description: 'Currency to exchange from',
    type: 'string',
})
    .option('target', {
    alias: 't',
    description: 'Currency to exchange to',
    type: 'string',
})
    .demandOption(['a', 'b'])
    .command('loan', 'Loan and exchanges desired amount', {
    amount: {
        description: 'Desired amount to loan',
        alias: 'l',
        type: 'number',
    }
})
    .demandOption(['l'])
    .help()
    .alias('help', 'h')
    .argv;
// TODO: create factory/strategy to deal with different types of commands
// TODO: command parser - func to return enum of command by input args
// TODO: create factory to retrieve api data by multiple sources
if (!args.t) {
    // TODO: decide id ILS TO ILS is acceptable
    args.t = args.target = "ILS";
}
if (args.a && args.b) {
    // TODO: change amount division
    let exchangeOperator = new exchange_operator_1.ExchangeOperator(args, converter_enum_1.Converter.ExchangeRates);
    exchangeOperator.Exchange().then(receipt => {
        console.log(receipt);
    });
}
//# sourceMappingURL=main.js.map