const fs = require("fs")

const data = fs.readFileSync('day-1-data.txt')
    .toString('utf-8')
    .split('\n')
    .map(Number)

const part1 = data
    .filter(n => data.indexOf(2020 - n) > -1)
    .reduce((acc, curr) => acc*curr)

console.log(part1)