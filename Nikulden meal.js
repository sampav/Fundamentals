function solve(input){

    let guests = {};
    let unlikeCount = 0;

    let command = input.shift();

    while (command !== 'Stop'){

        let [action, guestName, meal] = command.split('-');
        
        if (action === 'Like'){

            if (!guests[guestName]){

                guests[guestName] = {
                    meal: [],
                }
                guests[guestName].meal.push(meal);
            } else if (!guests[guestName].meal.includes(meal)){
                guests[guestName].meal.push(meal);
            }
        }

        if (action === 'Unlike'){

            if (!guests[guestName]){

                console.log(`${guestName} is not at the party.`);
            } else if (guests[guestName].meal.includes(meal)){
                let index = guests[guestName].meal.indexOf(meal);
                guests[guestName].meal.splice(index,1);
                unlikeCount++;

                console.log(`${guestName} doesn't like the ${meal}.`);
            } else if (!guests[guestName].meal.includes(meal)){

                console.log(`${guestName} doesn't have the ${meal} in his/her collection.`);
            }
        }
         
        command = input.shift();
    }

    let sortedGuest = Object.entries(guests).sort((a,b) => b[1].meal.length - a[1].meal.length || a[0].localeCompare(b[0]));

    for (let kvp of sortedGuest){

        console.log(`${kvp[0]}: ${kvp[1].meal.join(', ')}`);
    }
    console.log(`Unliked meals: ${unlikeCount}`);

}
solve([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
  ]
  )