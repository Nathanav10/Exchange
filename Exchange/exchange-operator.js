"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coverter_factory_1 = require("../Conversion/coverter-factory");
class ExchangeOperator {
    constructor(args, conversionService) {
        this.converter = coverter_factory_1.ConverterFactory.getConverter(conversionService);
        this.args = args;
        // TODO: change commission
        this.commission = 5;
    }
    Exchange() {
        // TODO: catch
        return this.converter.convert(this.args.amount, this.args.base, this.args.target).then(convertedAmount => {
            return `From amount: ${this.args.amount}
From currency: ${this.args.base}
To currency: ${this.args.target}
Commission: ${this.commission}%
Amount before commission: ${convertedAmount}
Amount: ${convertedAmount / 100.0 * (100 - this.commission)}\n`;
        });
    }
    PrintReceipt() {
    }
}
exports.ExchangeOperator = ExchangeOperator;
//# sourceMappingURL=exchange-operator.js.map