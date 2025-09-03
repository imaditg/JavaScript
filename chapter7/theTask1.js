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
        // console.log(this.place);
        if(!roadGraph[this.place].includes(destination)){
            console.log("Robbot not found");
            return this;
        }
        else{
            let parcels = this.parcels.map(p =>{
                if(p.place != this.place){//if parcel is not at current place
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

let first = new VillageState("Post Office",[{place : "Post Office", address : "Alice's House"}]);


let next = first.move("Alice's House");

// console.log(next.place);

// console.log(first.place);

// console.log(next.destination);

// console.log(next.parcels);

// console.log(next.parcels.address);
