const grid = document.getElementById("grid");
const aliveCells= [];

for(let i = 0; i < 600; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.style.width = '20px';
    cell.style.height = '20px';
    cell.style.backgroundColor = '#f9f9f9';
    cell.style.boxSizing = 'border-box';
    cell.style.cursor = 'pointer';

    grid.append(cell);
}

    // cell.addEventListener("click", () => {
    //     cell.classList.toggle("alive");
    //     if(cell.classList.contains("alive")){
    //         aliveCells.push(cell);
    //     }
    //     else{
    //         const index = aliveCells.indexOf(cell);
    //         if(index !== -1){
    //             aliveCells.splice(index, 1);}
    //     }
    //
    // })

    grid.addEventListener('click', ({target}) => {
        if (!target.classList.contains("cell")) return;
        target.classList.toggle("alive");
        if (target.classList.contains("alive")) {
            aliveCells.push(target);
            target.style.backgroundColor = "#4de6a9";
        } else {
            const index = aliveCells.indexOf(target);
            if (index !== -1) {
                aliveCells.splice(index, 1);
                target.style.backgroundColor = "#f9f9f9";

            }
        }



    });

grid.style.display = 'grid';
grid.style.gridTemplateColumns = 'repeat(30, 20px)';
grid.style.gridTemplateRows = 'repeat(20, 20px)';
grid.style.gap='1px';
grid.style.border = '1px solid #bbb';
grid.style.backgroundColor = '#ccc';
grid.style.width = 'fit-content'




