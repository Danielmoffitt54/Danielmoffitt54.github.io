(function () {
    var displayMain = document.getElementById("mainContent");
    // ^ Main Div
    
    var previous = document.getElementById("prevSlide");
    var next = document.getElementById("nextSlide");
    var displayHead = document.getElementById("displayHeader");
    var navBar = document.getElementById("dropUpMenu");
    var about = document.getElementById("aboutBtn");
    var education = document.getElementById("educationBtn");
    var skills = document.getElementById("skillsBtn");
    var interest = document.getElementById("interestBtn");
    var projects = document.getElementById("projectsBtn");
    var contact = document.getElementById("contactBtn");
    // ^ Navbar variables

    var mySlides = [];
    // ^ Creates Array to host the different slides

    var slide0 = {
        header: "About",
        p: {
            a: "bio...",
        },
    }
    // ^ About slide
    
    var slide1 = {
        title: "Education",
        p: {
            a: "List education and give brief summary of each.",
        },
    }
    // ^ Education slide

    var slide2 = {
        title: "Skills",
        p: {
            a: "Go over the different languages I know and list the diffent skills acquired at BcSkills.",
        },
    }
    // ^ Skills slide

    var slide3= {
        title: "Interest",
        p: {
            a: "List my the different passions I have and things that I find of interest.",
        }
    }
    // ^ Interest slide

    var slide4 = {
        title: "Projects",
        p: {
            a: "List some projects I've finished and display a couple here.",
        },
    }
    // ^ Projects slide

    var slide5 = {
        title: "Contact",
        p: {
            a: "Give my Email, GitHub, LinkedIn links.",
        }
    }
    // ^ Contact slide


    mySlides.push(slide0, slide1, slide2, slide3, slide4, slide5);
    // ^ Pushes all objects to be stored inside the array mySlides

    var currentSlide = 0;
    // ^ Current slide displayed

    function createSlide() {
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

        displayHead.innerText = displaySlide.title;
        // ^ Displays current slide to user

        var divSlide = document.createElement("div");
        divSlide.id = "slide";

        var div = document.createElement("div");
        var p = document.createElement("p");

        p.innerText = displaySlide.p.a;

        div.appendChild(p);

        divSlide.appendChild(div);

        displayMain.appendChild(divSlide);
    }

    createSlide();

    function deleteSlide() {
        document.getElementById("slide").remove();
    }

    function nextSlide() {
        deleteSlide();
        if (currentSlide === 5) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        createSlide();
    }

    next.addEventListener("click", nextSlide);

    function previousSlide() {
        deleteSlide();
        if (currentSlide === 0) {
            currentSlide = 5;
        } else {
            currentSlide--;
        }
        createSlide();
    }

    previous.addEventListener("click", previousSlide);

    function interactNav() {
        if (navBar.style.display === "none") {
            navBar.style.display = "flex";
        } else {
            navBar.style.display = "none";
        }
    }

    displayHead.addEventListener("click", interactNav);

    function quickNav(input) {
        deleteSlide();
        currentSlide = input;
        createSlide();
    }

    about.addEventListener("click", function(){ quickNav(0); });
    education.addEventListener("click", function(){ quickNav(1); });
    skills.addEventListener("click", function(){ quickNav(2); });
    interest.addEventListener("click", function(){ quickNav(3); });
    projects.addEventListener("click", function(){ quickNav(4); });
    contact.addEventListener("click", function(){ quickNav(5); });

})();