const roads = ["Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Market Place-Farm", "Market Place-Post Office", "Market Place-Shop", "Market Place-Town Hall",
    "Shop-Town Hall"
];


//let obj1 = {"a":2};
//let obj2 = Object.create("a : 3");//error
//console.log(obj2);//error
//let obj3 = Object.create(obj1);
//console.log(obj3);
//console.log(typeof(obj3)===typeof(obj1));

function builtGraph(graph) {
    let graphRoot = Object.create(null);
    for (let [from, to] of graph.map(p => p.split("-"))) {
        builtRoot(graphRoot, from, to);
        builtRoot(graphRoot, to, from);
    }
    return graphRoot;
}

function builtRoot(root, from, to) {
    if (from in root) {
        root[from].push(to);
    }
    else {
        root[from] = [to];
    }
    return root;
}

graphRoot = builtGraph(roads);

// console.log(graphRoot);


class VillageState {
    #list = null;
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(list,destination) {
        if (!(list.place in graphRoot)) {
            console.log(`${list.place} is not in the Graphroot`);
        }
        else {
          let parcels =  list.parcels.map(p => {
                if (p.place != list.place) {
                    
                    return p;
                }
                else {
                    return {place : destination, address : p.address};
                }
            }).filter(p =>p.place != p.address);
            return new VillageState(destination,parcels);
        }
    }

    #randomPick(array) {
        let ads = Math.floor(Math.random() * (Object.keys(array).length));
        return Object.keys(array)[ads];
    }
    prepareRandomList(path = 0,start = "Post Office", parcelsCount = 5) {
        if (this.#list == null) {
            this.#list = [];
            for (let i = 0; i < parcelsCount; ++i) {
                let place, address
                place = this.#randomPick(path);
                do {
                    address = this.#randomPick(path);
                } while (place === address);
                this.#list[i] = { place: place, address: address };
            }
        }
        return {place : start , parcels: this.#list};
    }
    randomRobot(list){
        let direction,array = graphRoot[list.place];
        direction = array[Math.floor(((array.length) * Math.random()))];
        console.log(direction);
        return {direction: direction};
    }
    runRobot(listState,robot,robotClass,memory){
        if(listState == null){
            listState = this.prepareRandomList(graphRoot);
        }
        for(let turn = 0 ; ; ++turn){
            if(listState.parcels.length == 0){
                console.log(`Done in ${turn} turns`);
                break;
            }
            let action = robot(listState,memory);
            listState = robotClass.move(listState,action.direction);
            console.log(`Moved to ${action.direction}`);
        }
    }

}

let path = new VillageState();

 parcelLists = path.prepareRandomList(graphRoot);
path.runRobot(parcelLists,path.randomRobot,path);
