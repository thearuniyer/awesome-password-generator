
import { A, N } from "categorized-words";

export const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];


export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export function leetify(str) {
    const leetChars = {
        a: '4',
        e: '3',
        g: '6',
        i: '1',
        o: '0',
        s: '5',
        t: '7',
    };

    const originalChars = str.split('');

    let modified = false;

    const leetifiedChars = originalChars.map((char) => {
        if (!modified && leetChars[char.toLowerCase()]) {
            modified = true;
            return leetChars[char.toLowerCase()];
        }
        return char;
    });

    return leetifiedChars.join('');
}


export function awesomePassword(strength) {
    let passwordLength = strength - 1;
    const filteredNouns = N.filter(
        (word) => word.length <= Math.floor(passwordLength / 2)
    );
    const randomNoun =
        filteredNouns[Math.floor(Math.random() * filteredNouns.length)];
    const filteredAdjectives = A.filter(
        (word) => word.length === passwordLength - randomNoun.length
    );
    const randomAdjective =
        filteredAdjectives[Math.floor(Math.random() * filteredAdjectives.length)];
    return (
        leetify(capitalizeFirstLetter(randomAdjective)) +
        "_" +
        leetify(capitalizeFirstLetter(randomNoun))
    );
}


export function genericPassword(strength) {
    let password = "";
    for (let i = 0; i < strength; i++) {
        let index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
}



