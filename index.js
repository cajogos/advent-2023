import fs from 'fs';

const numberMappings = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
};
const findKeys = Object.keys(numberMappings);

let input = '';

input = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
eightwo
eight
2z
51
oneone
23four324
`.trim();

// input = `
// two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen
// `.trim();

input = fs.readFileSync('./inputs/puzzle1_a.txt', 'utf8').trim();

let finalTotal = 0;
input.split('\n').forEach((line) =>
{
    let lineNums = [];

    let cur = '';
    for (let l = 0; l < line.length; l++)
    {
        cur += line[l];

        // Found a number
        if (/\d/.test(line[l]))
        {
            console.log(`Found ${line[l]} at pos: ${l}`);
            lineNums.push({
                num: parseInt(line[l]),
                pos: l,
            });
            cur = '';
            continue;
        }

        // Found a word
        for (let i = 0; i < findKeys.length; i++)
        {
            if (cur.includes(findKeys[i]))
            {
                const keyFound = findKeys[i];
                const position = l - keyFound.length + 1;
                const number = numberMappings[keyFound];
                console.log(`Found ${number} (${keyFound}) at pos: ${position}`);
                lineNums.push({
                    num: number,
                    pos: position,
                });

                cur = '';
                break;
            }
        }
    }

    // Sort by position
    lineNums.sort((a, b) => a.pos - b.pos);

    const firstNumber = lineNums[0].num;
    const lastNumber = lineNums[lineNums.length - 1].num;

    const lineTotal = parseInt("" + firstNumber + lastNumber);
    finalTotal += lineTotal;

    console.log(firstNumber, lastNumber, lineTotal, finalTotal);
});

console.log(finalTotal);
