let text = document.querySelector(".text");
let letters = 15;
let letter_width = 3;
let letter_height = 5;

function createGrid(){
    for(var y = 0; y < letter_height; y++){

        var line = document.createElement("div");
        line.classList.add("line");

        var spaces = letters - 1

        for(var x = 0; x < letter_width * letters + spaces; x++){
            var block = document.createElement("div");
            block.classList.add("block");
            block.classList.add(`block-${x}-${y}`);

            line.appendChild(block);
        }

        text.appendChild(line);
    }
}

createGrid();


colors = [
    "black",
    "white"
]


function clearText(){
    var spaces = letters - 1

    for(var y = 0; y < letter_height; y++){
        for(var x = 0; x < letter_width * letters + spaces; x++){
            var block = document.querySelector(`.block-${x}-${y}`);
            block.style.background = "black";
        }
    }
}


function drawText(text){
    var letters = text.split("");
    console.log(letters);

    var space_letter_before = 4;

    for(var i = 0; i < letters.length; i++){
        lower_letter = letters[i].toLowerCase();

        for(var y = 0; y < letter_height; y++){
            for(var x = 0; x < letter_width; x++){
                var block = document.querySelector(`.block-${x + (space_letter_before * i)}-${y}`);
                block.style.background = colors[large_letters[lower_letter][y][x]];
            }
        }
    }
}


let input_text = document.querySelector(".input-text");

input_text.addEventListener("input", () => {
    clearText();
    drawText(input_text.value);
})