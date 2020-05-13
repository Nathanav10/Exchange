import * as yargs from "yargs"
import {CesConnector} from "./Connector/ces-connector";
import {getArgs} from "./yargs-data";

const args = getArgs();

let cesConnector = new CesConnector();

if (args._.includes('exchange') && args.amount && args.base) {
    if (!args.target) {
        args.t = args.target = "ILS";
    }
    cesConnector.Exchange(args.amount, args.base, args.target).then(receipt => {
        console.log(receipt)
    }).catch(err => {
        console.log(err.response && err.response.data || "Failed to exchange")
    })
}

else if (args._.includes('config') && args.param && args.value) {
    cesConnector.Configure(args.param, args.value).then(res => {
        console.log("Parameter successfully changed")
    }).catch(err => {
        console.log(err.response && err.response.data || "Failed to change parameter")
    })
}

else if (args._.includes('loan') && args.amount && args.base) {
    cesConnector.StartLoan(args.amount, args.base).then(receipt => {
        console.log(receipt)
    }).catch(err => {
        console.log(err.response && err.response.data || "Failed to start loan")
    })
}

else if (args._.includes('endLoan') && args.id && args.target) {
    cesConnector.EndLoan(args.id, args.target).then(receipt => {
        console.log(receipt)
    }).catch(err => {
        console.log(err.response && err.response.data || "Failed to end loan")
    })
}