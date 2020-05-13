import axios from 'axios';

export class CesConnector {
    // TODO: export to config file
    apiUrl = "http://127.0.0.1:8081";

    // TODO: remove asyncs
    async Exchange(amount: number, base: string, target: string): Promise<string> {
        return axios.get(`${this.apiUrl}/exchange`, {
            params: {
                amount: amount,
                base: base,
                target: target
            }
        }).then(res => {
            return res.data;
        });
    }

    async Configure(param: string, value: any): Promise<string> {
        const options = {headers: {"Content-Type": "application/json"}};
        return axios.put(`${this.apiUrl}/config`, {
            param: param,
            value: value
        }, options).then(res => {
            return res.data;
        });
    }

    StartLoan(amount: number, base: string): Promise<string> {
        const options = {headers: {"Content-Type": "application/json"}};
        return axios.post(`${this.apiUrl}/loan`, {
            amount: amount,
            base: base
        }, options).then(res => {
            return res.data;
        });
    }

    EndLoan(loanId: string, target: string): Promise<string> {
        const options = {headers: {"Content-Type": "application/json"}};
        return axios.post(`${this.apiUrl}/endLoan`,{
            loanId: loanId,
            target: target
        }, options).then(res => {
            return res.data;
        });
    }
}