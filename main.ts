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
// Testing ROB interface
else if (args._.includes('rob') && (args.cmd != undefined) && (args.sc != undefined) && args.amount) {
    let operation = new Uint8Array(8);
    operation[0] = args.cmd;
    operation[1] = args.sc;
    let buf = new Buffer(4);
    buf.writeUInt16LE(257, 0);
    operation[4] = buf[0];
    operation[5] = buf[1];
    operation[6] = buf[2];
    operation[7] = buf[3];
    cesConnector.RobCommand(operation).then(res => {
        console.log(res)
    }).catch(err => {
        console.log("Unable to execute command")
    })
}