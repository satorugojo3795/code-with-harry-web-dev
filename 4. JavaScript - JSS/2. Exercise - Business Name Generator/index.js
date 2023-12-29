let businessNameGenerator = function(adj,shopName){
    let index_1 = Math.floor(Math.random()*3);
    let index_2 = Math.floor(Math.random()*3);
    console.log(adj[index_1]+shopName[index_2]);
}

let adj = ["crazy","amazing","fire"];
let shopName = ["engine","food","garments"];
businessNameGenerator(adj,shopName);
