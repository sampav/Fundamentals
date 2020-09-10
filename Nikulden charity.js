function solve(input){

    let string = input.shift();

    let command = input.shift();
    while(command !== 'Finish'){

        let [action, firstArgument,secondArgument] = command.split(' ');

        if (action === 'Replace'){

            while (string.includes(firstArgument)){

                string = string.replace(firstArgument,secondArgument);
            }
            console.log(string);
        }
        if (action === 'Make'){

            if (firstArgument === 'Upper'){
                string = string.toUpperCase();
            } else if (firstArgument === 'Lower'){
                string = string.toLowerCase();
            }
            console.log(string);
        }
        if (action === 'Check'){

            if (string.includes(firstArgument)){
                console.log(`Message contains ${firstArgument}`);
            } else {
                console.log(`Message doesn't contain ${firstArgument}`);
            }
        }
        if (action === 'Sum'){
            let start = Number(firstArgument);
            let end = Number(secondArgument);

            if ((start >= 0 && start < string.length) && (end >= 0 && end < string.length)){
                let sub = string.substring(start,end+1);
                console.log(`${sumAscii(sub)}`);

            } else {
                console.log('Invalid indexes!');
            }  

        }
        if (action === 'Cut'){
            let start = Number(firstArgument);
            let end = Number(secondArgument);

            if ((start >= 0 && start < string.length) && (end >= 0 && end < string.length)){
                let sub = string.substring(start,end+1);
                string = string.replace(sub,'');
                console.log(string);

            } else {
                console.log('Invalid indexes!');
            }  
        }

        command = input.shift();
    }
    function sumAscii(string){

        let result = 0;
        for (let char of string){            
            result += char.charCodeAt(0);
        }    
        return result;
    }

}

solve([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
  ]
  
)