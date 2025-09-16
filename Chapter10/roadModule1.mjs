
export function buildGraph(path){
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