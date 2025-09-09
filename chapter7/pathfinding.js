// let a = ['a','b','c','d'];
// a = a.concat('vv','bb');
// console.log(...a);
// let j = 2,i;
// for( i = 0 ; i < 3; ++i){
//     if (i == j)
//     {        
//         break;
//     }
// }
// console.log("jer",i);
const roads = ["Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Market Place-Farm", "Market Place-Post Office", "Market Place-Shop", "Market Place-Town Hall",
    "Shop-Town Hall"
];

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

console.log(graphRoot);

function findRoute(graph,from,to){
    let work = [{at: from ,route : []}];
    for(let i = 0; i < work.length; i++){
        let {at,route} = work[i];
        for(let place of graph[at]){
            if(place == to) return route.concat(place);
            if(!work.some(w => w.at == place)){
                work.push({at: place , route: route.concat(place)});
            }
        }
    }
}

let returnRoute = findRoute(graphRoot,"Alice's House","Daria's House");

console.log(returnRoute);