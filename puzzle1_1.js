import fs from 'fs';

const input = fs.readFileSync('./inputs/puzzle1_a.txt', 'utf8').trim();

let finalTotal = 0;
const lines = input.split('\n');
lines.forEach((line, lineNumber) =>
{
    const digitLocations = [];
    for (let i = 0; i < line.length; i++)
    {
        if (/\d/.test(line[i]))
        {
            digitLocations.push(i);
        }
    }

    const firstDigit = line[digitLocations[0]];
    const lastDigit = line[digitLocations[digitLocations.length - 1]];
    const lineTotal = parseInt("" + firstDigit + lastDigit);

    finalTotal += lineTotal;
});
