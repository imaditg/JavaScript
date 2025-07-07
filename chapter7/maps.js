let array = [1,2,"rrr",4,"555"];

array.map(r => console.log(r));

let array2 = ["Alice's House-Bob's House","Alice's House-Cabin"];

// let array3 = array2.split("-");

function buildGraph(edges){
let graph = Object.create(null);

for(let [from,to] of edges.map(r => r.split("-"))){
    if(from in graph){
        graph[from].push(to);
    }
    else{
        graph[from] = [to];
    }
}
return graph;
}

const road = buildGraph(array2);

console.log(road)