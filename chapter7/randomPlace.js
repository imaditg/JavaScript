const roads = ["Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall","Ernie's House-Grete's House","Grete's House-Farm",
    "Grete's House-Shop","Market Place-Farm","Market Place-Post Office","Market Place-Shop","Market Place-Town Hall",
    "Shop-Town Hall"
];

function builtGraph(graph){
    let road = Object.create(null);
    for(let [from,to] of graph.map(i => i.split('-'))){
        insertArray(from,to,road);
        insertArray(to,from,road);
    }
    return road;
}

function insertArray(from,to,road){
    if(from in road){
        road[from].push(to);
    }
    else{
        road[from] = [to];
    }
    return road;
}

let roadGraph = builtGraph(roads);

// console.log(roadGraph);

class VillageState {
    constructor(place,parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        // console.log(destination);
        if(!roadGraph[this.place].includes(destination)){
            console.log("Not Found");
            return this;
        }
        else{
            let parcels = this.parcels.map(p =>{
                if(p.place != this.place){
                    return p;
                }
                else{
                    return {place : destination, address : p.address };
                }
            }).filter(p => p.place != p.address);
            return new VillageState(destination,parcels);
        }
    }
}

function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {direction : randomPick(roadGraph[state.place])}
}

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for(let i = 0; i < parcelCount ; ++i){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do{
            place = randomPick(Object.keys(roadGraph));
        }while(place == address);
        parcels.push({place,address});
    }
    return new VillageState("Post Office",parcels);
}

let newPlaces = VillageState.random(); 
console.log(VillageState.random());