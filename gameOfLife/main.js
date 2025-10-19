const grid = document.getElementById("grid");
const aliveCells= [];

for(let i = 0; i < 600; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("click", () => {
        cell.classList.toggle("alive");
        if(cell.classList.contains("alive")){
            aliveCells.push(cell);
        }
        else{
            const index = aliveCells.indexOf(cell);
            if(index !== -1){
                aliveCells.splice(index, 1);}
        }

    })
    grid.append(cell);



}


