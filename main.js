"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const ces_connector_1 = require("./Connector/ces-connector");
// TODO: extract to own file
const args = yargs
    .usage('Usage: $0 <command> [options]')
    .example('$0 exchange -a 1000 -b USD -t ILS', 'exchange and print receipt')
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
    .nargs(['a', 'b'], 1)
    .command('config', 'Configure exchange details', {
    param: {
        description: 'Parameter to change ',
        alias: 'p',
        type: 'string',
    },
    value: {
        description: 'Value',
        alias: 'v',
        type: 'any',
    },
})
    .nargs('bc', 1)
    .command('loan', 'Start loan', {
    amount: {
        description: 'Desired amount',
        alias: 'a',
        type: 'number',
    },
    base: {
        description: 'Base currency',
        alias: 'b',
        type: 'string',
    }
})
    .command('endLoan', 'End loan', {
    id: {
        description: 'Loan id',
        type: 'string'
    },
    target: {
        description: 'Target currency',
        alias: 't',
        type: 'string',
    }
})
    .help()
    .alias('help', 'h')
    .argv;
let cesConnector = new ces_connector_1.CesConnector();
if (args._.includes('exchange') && args.amount && args.base) {
    if (!args.target) {
        // TODO: decide id ILS TO ILS is acceptable
        args.t = args.target = "ILS";
    }
    cesConnector.Exchange(args.amount, args.base, args.target).then(receipt => {
        console.log(receipt);
    }).catch(err => {
        console.log(err.response && err.response.data || "Failed to exchange");
    });
}
else if (args._.includes('config') && args.param && args.value) {
    cesConnector.Configure(args.param, args.value).then(res => {
        console.log("Parameter successfully changed");
    }).catch(err => {
        console.log(err.response && err.response.data || "Failed to change parameter");
    });
}
else if (args._.includes('loan') && args.amount && args.base) {
    cesConnector.StartLoan(args.amount, args.base).then(receipt => {
        console.log(receipt);
    }).catch(err => {
        console.log(err.response && err.response.data || "Failed to start loan");
    });
}
else if (args._.includes('endLoan') && args.id && args.target) {
    cesConnector.EndLoan(args.id, args.target).then(receipt => {
        console.log(receipt);
    }).catch(err => {
        console.log(err.response && err.response.data || "Failed to end loan");
    });
}
//# sourceMappingURL=main.js.map