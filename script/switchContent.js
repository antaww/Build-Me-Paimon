function switchInContent() {
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    let b4 = document.getElementById("b4");
    let b5 = document.getElementById("b5");
    let b6 = document.getElementById("b6");
    let b7 = document.getElementById("b7");
    let b8 = document.getElementById("b8");

    b1.onclick = function () {
        changeArtButtons()
        b1.src = "../images/icons/page_checked.png";
    }
    b2.onclick = function () {
        changeArtButtons()
        b2.src = "../images/icons/page_checked.png";
    }
    b3.onclick = function () {
        changeMatButtons()
        b3.src = "../images/icons/page_checked.png";
    }
    b4.onclick = function () {
        changeMatButtons()
        b4.src = "../images/icons/page_checked.png";
    }
    b5.onclick = function () {
        changeTalButtons()
        b5.src = "../images/icons/page_checked.png";
    }
    b6.onclick = function () {
        changeTalButtons()
        b6.src = "../images/icons/page_checked.png";
    }
    b7.onclick = function () {
        changeTalButtons()
        b7.src = "../images/icons/page_checked.png";
    }
    b8.onclick = function () {
        changeTalButtons()
        b8.src = "../images/icons/page_checked.png";
    }
}

function changeArtButtons() {
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");

    b1.src = "../images/icons/page.png";
    b2.src = "../images/icons/page.png";
}

function changeMatButtons() {
    let b3 = document.getElementById("b3");
    let b4 = document.getElementById("b4");

    b3.src = "../images/icons/page.png";
    b4.src = "../images/icons/page.png";
}

function changeTalButtons() {
    let b5 = document.getElementById("b5");
    let b6 = document.getElementById("b6");
    let b7 = document.getElementById("b7");
    let b8 = document.getElementById("b8");

    b5.src = "../images/icons/page.png";
    b6.src = "../images/icons/page.png";
    b7.src = "../images/icons/page.png";
    b8.src = "../images/icons/page.png";
}