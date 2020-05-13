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
class CesConnector {
    constructor() {
        // TODO: export to config file
        this.apiUrl = "http://127.0.0.1:8081";
    }
    // TODO: remove asyncs
    Exchange(amount, base, target) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${this.apiUrl}/exchange`, {
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
            const options = { headers: { "Content-Type": "application/json" } };
            return axios_1.default.put(`${this.apiUrl}/config`, {
                param: param,
                value: value
            }, options).then(res => {
                return res.data;
            });
        });
    }
    StartLoan(amount, base) {
        const options = { headers: { "Content-Type": "application/json" } };
        return axios_1.default.post(`${this.apiUrl}/loan`, {
            amount: amount,
            base: base
        }, options).then(res => {
            return res.data;
        });
    }
    EndLoan(loanId, target) {
        const options = { headers: { "Content-Type": "application/json" } };
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