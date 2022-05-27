function inventory(input) {
    let index = 0;
    let items = [input[index]];
    let listOfItems = items[index++].split(`, `);
    while (input[index] !== `Craft!`) {
        let commands = input[index++].split(` - `);
        let command = commands[0];
        let item = commands[1];
        switch (command) { 
            case `Collect` : 
            if (listOfItems.includes(item) === false) {
                listOfItems.push(item);
            } 
            break;
            case `Drop` : 
            if (listOfItems.includes(item) === true) { 
               let remove = listOfItems.indexOf(item);
                listOfItems.splice(remove,1);
            }
            break;
            case `Combine Items` : 
            let newitems= item.split(`:`);
            let olditem = newitems[0];
            let newitem = newitems[1];
            let olditemindex=listOfItems.indexOf(olditem);
            if (listOfItems.includes(olditem) === true) {
                listOfItems.splice(olditemindex+1,0,newitem);
            }
            break;
            case `Renew` : 
            if (listOfItems.includes(item) === true) {
                let old = listOfItems.indexOf(item);
                listOfItems.splice(old,1);
                listOfItems.push(item);
            }
            break;
        }
    }
    console.log (listOfItems.join(`, `));
}
inventory (['Sword, Iron, Gold','Drop - Bronze','Combine Items - Sword:Bow', 'Renew - Iron','Craft!' ])