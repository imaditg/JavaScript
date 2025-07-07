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
        if(!roadGraph[this.place].includes(destination)){
            console.log("Not Found");
            return this;//return whole parameter
        }
        else{
            console.log(destination);
        }
    }
}

let newPlace = new VillageState("Post Office",[{place : "Post Office", address : "Alice's House"}]);

console.log(newPlace.parcels[0].place)