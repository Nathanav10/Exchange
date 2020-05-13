"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InN0b3JlMSIsImlhdCI6MTU4OTM4NzUwNH0.2R-BDPxyDIQkdy2mCkqKnx5naa98fcyMyZv8ckiKfqE";
const CLIENT_ID = "store1";
class CesConnector {
    constructor() {
        // TODO: export to config file
        this.apiUrl = "http://127.0.0.1:8081";
    }
    // TODO: remove asyncs
    Exchange(amount, base, target) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${this.apiUrl}/exchange`, {
                headers: { ClientId: CLIENT_ID, Authorization: ACCESS_TOKEN },
                params: {
                    amount: amount,
                    base: base,
                    target: target
                }
            }).then(res => {
                return res.data;
            });
        });
    }
    Configure(param, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    ClientId: CLIENT_ID,
                    Authorization: ACCESS_TOKEN
                }
            };
            return axios_1.default.put(`${this.apiUrl}/config`, {
                param: param,
                value: value
            }, options).then(res => {
                return res.data;
            });
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
        return axios_1.default.post(`${this.apiUrl}/loan`, {
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
        return axios_1.default.post(`${this.apiUrl}/endLoan`, {
            loanId: loanId,
            target: target
        }, options).then(res => {
            return res.data;
        });
    }
}
exports.CesConnector = CesConnector;
//# sourceMappingURL=ces-connector.js.map