import { buildGraph } from "./roadModule1.mjs";


const roads = ["Alice's house-Bob's house", "Alice's house-Cabin", "Alice's house-Post Office", "Bob's house-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall","Ernie's House-Grete's House","Grete's House-Farm",
    "Grete's House-Shop","Market Place-Farm","Market Place-Post Office","Market Place-Shop","Market Place-Town Hall",
    "Shop-Town Hall"
];

let graph = buildGraph(roads);

console.log(graph);
