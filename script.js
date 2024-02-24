let container = document.querySelector(".container");

// triggers prompt which returns grid size 

let btn = document.querySelector("#btn");
let size = "16";
let counter = 0;


btn.addEventListener("click", () => {
    size = prompt("The number of squares per side for the new grid?");

    if (counter == 0) {
        for (let i = 0; i < size; i++) {
            let line = document.createElement("div");
            line.classList.add("lines");
            
            for (let j = 0 ; j < size; j++) {
                let column = document.createElement("div");
                column.classList.add("grid");
                line.appendChild(column);
            }
        
            container.appendChild(line);
        }

    } else if (counter > 0) {          
        // remove the grid before
        for (let i = 0; i < size; i++) {
                let line = document.querySelector(".lines");
                container.removeChild(line);
            
            for (let j = 0 ; j < size; j++) {
                let column = document.querySelector(".grid");
                line.removeChild(column);
            }
        }
        // create the new grid
        for (let i = 0; i < size; i++) {
            let line = document.createElement("div");
            line.classList.add("lines");
            
            for (let j = 0 ; j < size; j++) {
                let column = document.createElement("div");
                column.classList.add("grid");
                line.appendChild(column);
                divs.push(column);
            }
        
            container.appendChild(line);
        }
    }
    counter++;
})

// Set up a hoover effect so the grid divs change color when mouse passes over them
let grid = document.querySelector(".grid");

container.addEventListener("mouseenter", (event) => {
    // highlight the mouse enter target
    event.target.style.backgroundColor = "";
    event.target.style.backgroundColor = "red";
})

container.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = "white";
})



