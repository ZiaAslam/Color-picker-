var color  ;
var dot = document.getElementsByClassName("dot");

var button = document.getElementById("button");
var row = document.getElementById("non-active");
var result = document.getElementsByClassName("dotsm");
var colArr = [];
var count = [];
var pattern = [
    "rgb(128, 0, 128)",
    "rgb(255, 165, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 128, 0)",
];


function colArrFun() {
    for (let i = 0; i < dot.length; i++) {
        let col1 = dot[i].style.backgroundColor;
        colArr.push(col1);
    }
}

let arr = [];
$(document).ready(function () {
    $(".clrPick").click(function () {
        color = $(this).css("background-color");
        arr.push(color);
        console.log(arr);
    });
});

$(".dot").click(function () {
    $(this).css("background-color", color);
    count.push(true);
    if (count.length == dot.length) {
        button.disabled = false;
        console.log("disabled");
    }
});

$("#showHide").click(function () {
    $("p").toggle();
});


function check() {
    colArrFun();
    for (let i = 0; i < dot.length; i++) {
        var col = dot[i].style.backgroundColor;
        var pcol = pattern[i];
        if (col == pcol) {
            result[i].style.backgroundColor = "green";
        } else {
            for (let j = 0; j < pattern.length; j++) {
                if (colArr[i] == pattern[j]) {
                    result[i].style.backgroundColor = "black";
                    break;
                } else {
                    result[i].style.backgroundColor = "red";
                }
            }
        }
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].disabled = true;
        console.log("disabled dot");
    }
}

