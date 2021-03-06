"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const API_URL = "http://127.0.0.1:8081";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InN0b3JlMSIsImlhdCI6MTU4OTM4NzUwNH0.2R-BDPxyDIQkdy2mCkqKnx5naa98fcyMyZv8ckiKfqE";
const CLIENT_ID = "store1";
class CesConnector {
    Exchange(amount, base, target) {
        return axios_1.default.get(`${API_URL}/exchange`, {
            headers: { ClientId: CLIENT_ID, Authorization: ACCESS_TOKEN },
            params: {
                amount: amount,
                base: base,
                target: target
            }
        }).then(res => {
            return res.data;
        });
    }
    Configure(param, value) {
        const options = {
            headers: {
                "Content-Type": "application/json",
                ClientId: CLIENT_ID,
                Authorization: ACCESS_TOKEN
            }
        };
        return axios_1.default.put(`${API_URL}/config`, {
            param: param,
            value: value
        }, options).then(res => {
            return res.data;
        });
    }
    StartLoan(amount, base) {
        const options = {
            headers: {
                "Content-Type": "application/json",
                ClientId: CLIENT_ID,
                Authorization: ACCESS_TOKEN
            }
        };
        return axios_1.default.post(`${API_URL}/loan`, {
            amount: amount,
            base: base
        }, options).then(res => {
            return res.data;
        });
    }
    EndLoan(loanId, target) {
        const options = {
            headers: {
                "Content-Type": "application/json",
                ClientId: CLIENT_ID,
                Authorization: ACCESS_TOKEN
            }
        };
        return axios_1.default.post(`${API_URL}/endLoan`, {
            loanId: loanId,
            target: target
        }, options).then(res => {
            return res.data;
        });
    }
    RobCommand(operation) {
        const options = {
            headers: {
                "Content-Type": "text/plain",
                ClientId: CLIENT_ID,
                Authorization: ACCESS_TOKEN
            }
        };
        return axios_1.default.post(`${API_URL}/rob`, operation.toString(), options).then(res => {
            return res.data;
        });
    }
}
exports.CesConnector = CesConnector;
//# sourceMappingURL=ces-connector.js.map