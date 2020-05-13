import axios from 'axios';

const API_URL =  "http://127.0.0.1:8081";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InN0b3JlMSIsImlhdCI6MTU4OTM4NzUwNH0.2R-BDPxyDIQkdy2mCkqKnx5naa98fcyMyZv8ckiKfqE";
const CLIENT_ID = "store1";

export class CesConnector {
    Exchange(amount: number, base: string, target: string): Promise<string> {
        return axios.get(`${API_URL}/exchange`, {
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

    Configure(param: string, value: any): Promise<string> {
        const options = {
            headers: {
                "Content-Type": "application/json",
                ClientId: CLIENT_ID,
                Authorization: ACCESS_TOKEN
            }
        };
        return axios.put(`${API_URL}/config`, {
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
        return axios.post(`${API_URL}/loan`, {
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
        return axios.post(`${API_URL}/endLoan`, {
            loanId: loanId,
            target: target
        }, options).then(res => {
            return res.data;
        });
    }
}