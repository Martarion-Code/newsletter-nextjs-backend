"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    console.log('haha');
    // console.log(JSON.stringify(req))
});
app.listen(port, () => {
    console.log('halooooo', port);
});
