import axios from 'axios';

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InN0b3JlMSIsImlhdCI6MTU4OTM4NzUwNH0.2R-BDPxyDIQkdy2mCkqKnx5naa98fcyMyZv8ckiKfqE";
const CLIENT_ID = "store1";

export class CesConnector {
    // TODO: export to config file
    apiUrl = "http://127.0.0.1:8081";

    // TODO: remove asyncs
    async Exchange(amount: number, base: string, target: string): Promise<string> {
        return axios.get(`${this.apiUrl}/exchange`, {
            headers: {ClientId: CLIENT_ID, Authorization: ACCESS_TOKEN},
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
        const options = {
            headers: {
                "Content-Type": "application/json",
                ClientId: CLIENT_ID,
                Authorization: ACCESS_TOKEN
            }
        };
        return axios.put(`${this.apiUrl}/config`, {
            param: param,
            value: value
        }, options).then(res => {
            return res.data;
        });
    }

    StartLoan(amount: number, base: string): Promise<string> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                ClientId: CLIENT_ID,
                Authorization: ACCESS_TOKEN
            }
        };
        return axios.post(`${this.apiUrl}/loan`, {
            amount: amount,
            base: base
        }, options).then(res => {
            return res.data;
        });
    }

    EndLoan(loanId: string, target: string): Promise<string> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                ClientId: CLIENT_ID,
                Authorization: ACCESS_TOKEN
            }
        };
        return axios.post(`${this.apiUrl}/endLoan`, {
            loanId: loanId,
            target: target
        }, options).then(res => {
            return res.data;
        });
    }
}