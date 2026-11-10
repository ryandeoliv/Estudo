const player = {
    nome: "Ryan",
    atk: 17,
    def: 8,
    vida: 100
}

for (const[key, value] of Object.entries(player)) {
    console.log(key, value);
}