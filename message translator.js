function solve(input){


let pattern = /([!])(?<command>[A-Z][a-z]{2,})\1[:][\[](?<message>[A-z]{8,})[\]]/g;

let num = Number(input.shift());

for (let i=0; i < num; i++){

    let current = input.shift();

    let match = pattern.exec(current);

    if (match){
        console.log(`${match.groups.command}: ${toAscii(match.groups.message)}`);
    } else {
        console.log('The message is invalid');
    }

}
function toAscii(string){

    let result = '';
    for (let char of string){
        result += char.charCodeAt(0) + ' ';
    }

    return result;
}

}
solve([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
  ])