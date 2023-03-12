let inc = document.querySelector("#inc");
let res = document.querySelector("#res");
let dec = document.querySelector("#dec");

let count = 0;
let current = document.getElementById("counter");
let updateCount = () => {
    current.innerHTML = count;
};

inc.addEventListener("click", function(){
    count += 1;
    updateCount();
});

dec.addEventListener("click", function(){
    if (count > 0) {
        count -= 1;
        updateCount();
    }
});

res.addEventListener("click", function(){
    count = 0;
    updateCount();
});