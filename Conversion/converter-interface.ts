interface IConverter {
    convert(amount: number, baseCurrency: string, targetCurrency: string): Promise<number>
}