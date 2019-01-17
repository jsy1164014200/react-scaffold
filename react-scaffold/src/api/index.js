import ajax from "./ajax.js"

export const test = (testData) => ajax('/register',testData,'POST')
