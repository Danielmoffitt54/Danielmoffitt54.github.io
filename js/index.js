(function () {
    var currentSlide = 0;
    // ^ Current slide displayed

    var displayMain = document.getElementById("mainContent");
    // ^ Main Div
    
    var previous = document.getElementById("prevSlide");
    var next = document.getElementById("nextSlide");
    var displayHead = document.getElementById("displayHeader");
    // ^ Mobile Nav-bar variables

    var mySlides = [];

    var slide0 = {
        header: "About",
        p: {
            a: "This is my about.",
        },
    }
    
    var slide1 = {
        header: "Education",
        p: {
            a: "List education and give brief summary of each.",
        },
    }

    var slide2 = {
        header: "Skills",
        p: {
            a: "Go over the different languages I know and list the diffent skills acquired at BcSkills.",
        },
    }

    var slide3= {
        header: "Interest",
        p: {
            a: "List my the different passions I have and things that I find of interest.",
        }
    }

    var slide4 = {
        header: "Projects",
        p: {
            a: "List some projects I've finished and display a couple here.",
        },
    }

    var slide5 = {
        header: "Contact",
        p: {
            a: "Give my Email, GitHub, LinkedIn links.",
        }
    }

    mySlides.push(slide0, slide1, slide2, slide3, slide4, slide5);

    function createSlides() {


        var displaySlide = "";

        switch (currentSlide) {
            case 1:
                displaySlide = slide1;
                break;
            case 2:
                displaySlide = slide2;
                break;
            case 3:
                displaySlide = slide3;
                break;
            case 4:
                displaySlide = slide4;
                break;
            case 5:
                displaySlide = slide5;
                break;
            default:
                displaySlide = slide0;
        }

        displayHead.innerText = displaySlide.header;

        var div = document.createElement("div");
        var p = document.createElement("p");

        p.innerText = displaySlide.p.a;

        div.appendChild(p);

        displayMain.appendChild(div);
    }

    createSlides();

    function nextSlide() {
        if (currentSlide === 5) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        createSlides();
    }

    next.addEventListener("click", nextSlide);

    function previousSlide() {
        if (currentSlide === 0) {
            currentSlide = 5;
        } else {
            currentSlide--;
        }
        createSlides();
    }

    previous.addEventListener("click", previousSlide);

})();

