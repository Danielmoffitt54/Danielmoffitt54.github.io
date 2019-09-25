(function () {
    var main = document.getElementById("mainContent");
    // ^ Main Div
    
    var previous = document.getElementById("prevSlide");
    var next = document.getElementById("nextSlide");
    var display = document.getElementById("displayNav");
    // ^ Mobile Nav-bar variables

    var div = document.createElement("div");
    var p = document.createElement("p");
    // ^ Create elements

    var mySlides = [];

    var slide0 = {
        header: "About",
    }
    
    var slide1 = {
        header: "Education",
    }

    var slide2 = {
        header: "Skills",
    }

    var slide3= {
        header: "Interest",
    }

    var slide4 = {
        header: "Projects",
    }

    var slide5 = {
        header: "Contact",
    }

    mySlides.push(slide0, slide1, slide2, slide3, slide4, slide5);

    console.log(mySlides);



})();

function createSlides() {
    console
}

console.log(mySlides)
