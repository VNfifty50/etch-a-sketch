let container = document.querySelector(".container");

// create an element and append it to div
// create another element and append it to the element before



for (let i = 0; i < 6; i++) {
    let line = document.createElement("div");
    line.classList.add("lines");
    
    for (let j = 0 ; j < 6; j++) {
        let column = document.createElement("div");
        column.textContent = `${i}${j}`;
        column.classList.add("grid");
        line.appendChild(column);
    }

    container.appendChild(line);
}