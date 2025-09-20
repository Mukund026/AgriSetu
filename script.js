const nums = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");
let currinput = "";
nums.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if(value === "=") {
            try {
                currinput = eval(currinput).toString();
            }
            catch {
                currinput = "Error";
            }
        }else if(value == "AC") {
            currinput = "";
        }else if(value == "DE") {
            currinput = currinput.slice(0, -1);
        }
        else {
            currinput += value;
        }
        display.textContent = currinput;
    });
});