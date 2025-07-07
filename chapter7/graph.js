const roads = ["Alice's house-Bob's house", "Alice's house-Cabin", "Alice's house-Post Office", "Bob's house-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall","Ernie's House-Grete's House","Grete's House-Farm",
    "Grete's House-Shop","Market Place-Farm","Market Place-Post Office","Market Place-Shop","Market Place-Town Hall",
    "Shop-Town Hall"
];

function buildGraph(path){
    let graph = Object.create(null);
    for(let [from,to] of path.map(i => i.split("-"))){
        insertArray(from,to,graph);
        insertArray(to,from,graph);
    }
    return graph;
}

function insertArray(from,to,graph){
    
    if(from in graph){
        graph[from].push(to);
    }
    else{
        graph[from] = [to];
    }
    return graph;
}

let graph = buildGraph(roads);

console.log(graph);