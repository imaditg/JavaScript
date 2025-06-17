function countBy(items,groupName){
    let counts = [];
    for(let item of items){
        let name = groupName(item);
        let know = counts.find((c) =>{ 
            return (c.name == name)})
        if(!know){
            counts.push({name, count : 1});

        }
        else{
            know.count++;
        }
    }
    return counts;
}

console.log(countBy([1,2,3,4,5], n => n > 2));