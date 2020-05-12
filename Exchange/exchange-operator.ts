import {Converter} from "../Conversion/converter-enum";
import {ConverterFactory} from "../Conversion/coverter-factory";

export class ExchangeOperator {
    args;
    converter: IConverter;
    commission: number;

    constructor(args, conversionService: Converter) {
        this.converter = ConverterFactory.getConverter(conversionService);
        this.args = args;
        // TODO: change commission
        this.commission = 5;
    }

    Exchange(): Promise<string> {
        // TODO: catch
        return this.converter.convert(this.args.amount, this.args.base, this.args.target).then(convertedAmount => {
            return `From amount: ${this.args.amount}
From currency: ${this.args.base}
To currency: ${this.args.target}
Commission: ${this.commission}%
Amount before commission: ${convertedAmount}
Amount: ${convertedAmount / 100.0 * (100 - this.commission)}\n`
        });
    }

    PrintReceipt() {

    }
}