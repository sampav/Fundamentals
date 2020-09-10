function solve(input){

    let num = Number(input.shift());
    let pattern = /(U\$)(?<user>[A-Z][a-z]{2,})\1(P@\$)(?<pass>[A-z]{5,}[0-9]+)\3/g;
   
    let count = 0;

    for (let i = 0; i < num; i++){

    let match = pattern.exec(input[i]);

        if (match){
            console.log('Registration was successful');
            console.log(`Username: ${match.groups.user}, Password: ${match.groups.pass}`);
            count++;
        } else {
            console.log('Invalid username or password');
        }

    }

    console.log(`Successful registrations: ${count}`);
}
solve([
    '3',
    'U$myU$-->P@$asdqwe123P@$',
    'Sara 1232412',
    'U$NameU$P@$Pass234P@$'
  ]
)