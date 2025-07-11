function entries(result) {
    if (result.toLowerCase() == "left") {
        return 'L';
    }
    if (result.toLowerCase() == "right") {
        return "R";
    }
    throw new Error("Invalid inputs");

}
function calling() {
    try {
        let ans = entries("naina");
        if (ans == 'L') {
            console.log("left");
        }
        else {
            console.log("right");
        }
    }
    catch (error) {
        console.log("Something went wrong" + error);
    }
}

calling();