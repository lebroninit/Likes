var likes = document.querySelector("#amount1")
function add1() {
    var temp = likes.innerText.substr(0, likes.innerText.length -8);
    var temp1 = parseInt(temp);
    temp1 += 1;
    likes.innerText = temp1 + " like(s)";
}

var likes1 = document.querySelector("#amount2")
function add2() {
    var temp = likes1.innerText.substr(0, likes1.innerText.length -8);
    var temp1 = parseInt(temp);
    temp1 += 1;
    likes1.innerText = temp1 + " like(s)";
}

var likes2 = document.querySelector("#amount3")
function add3() {
    var temp = likes2.innerText.substr(0, likes2.innerText.length -8);
    var temp1 = parseInt(temp);
    temp1 += 1;
    likes2.innerText = temp1 + " like(s)";
}