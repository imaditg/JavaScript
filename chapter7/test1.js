const roads = ["Alice's house-Bob's house"];
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
        // console.log(from,to);
    }
    return graph;
}

let r = buildGraph(roads);

console.log(r);

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    console.log(i, j);
    if (j === 1) {
      break innerLoop;  // ⬅ break the *outer* loop directly
    }
  }
}