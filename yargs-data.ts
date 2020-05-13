import * as yargs from "yargs"

export function getArgs() {
    return yargs
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
}