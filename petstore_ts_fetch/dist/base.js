"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * ExerciseDB Documentation
 * API documentation app for [ExerciseDB on RapidAPI](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
 *
 * The version of the OpenAPI document: 2.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = exports.BASE_PATH = void 0;
// Some imports not used depending on template conditions
// @ts-ignore
const axios_1 = __importDefault(require("axios"));
exports.BASE_PATH = "https://exercisedb.p.rapidapi.com".replace(/\/+$/, "");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = exports.BASE_PATH, axios = axios_1.default) {
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;