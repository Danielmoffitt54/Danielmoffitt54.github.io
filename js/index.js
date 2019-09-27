(function () {
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
    // ^ Create variables linked to divs indside index.html.

    var mySlides = [];
    // ^ Create array variable mySlides to store the different slides.

    var slide0 = {
        title: "About",
        header: {
            a: "Daniel",
            b: "Moffitt",
        },
        p: {
            a: "bio...",
        },
    }
    // ^ slide0 end.
    
    var slide1 = {
        title: "Education",
        p: {
            a: "List education and give brief summary of each.",
        },
    }
    // ^ slide1 end.

    var slide2 = {
        title: "Skills",
        header: {
            a: "Programing Languages & Tools",
            b:""
        },
        icons: {
            src: {
                a: "img/html5-brands.svg",
                b: "img/css3-alt-brands.svg",
                c: "img/js-square-brands.svg",
                d: "img/mongo-db.jpg",
                e: "img/express.jpg",
                f: "img/react-brands.svg",
                g: "img/node-js-brands.svg",
                h: "img/bootstrap-brands.svg",
            },
            alt: {
                a: "Html5",
                b: "Css3",
                c: "JavaScript",
                d: "MongoDB",
                e: "Express",
                f: "React",
                g: "NodeJS",
                h: "Bootstrap",
            }
        },
    }
    // ^ slide2 end.

    var slide3= {
        title: "Interest",
        p: {
            a: "List my the different passions I have and things that I find of interest.",
        }
    }
    // ^ slide3 end.

    var slide4 = {
        title: "Projects",
        p: {
            a: "List some projects I've finished and display a couple here.",
        },
    }
    // ^ slide4 end.

    var slide5 = {
        title: "Contact",
        p: {
            a: "",
        }
    }
    // ^ slide5 end.


    mySlides.push(slide0, slide1, slide2, slide3, slide4, slide5);
    // ^ Pushes all objects to be stored inside the array mySlides

    var currentSlide = 0;
    // ^ Create value currentSlide with value of 0.

    function createSlide() {
        var displaySlide = "";
        // ^ Create variable displaySlide with value of "".

        switch (currentSlide) {
            case 1:
                displaySlide = slide1;
                displayEducation();
                break;
            case 2:
                displaySlide = slide2;
                displaySkills();
                break;
            case 3:
                displaySlide = slide3;
                displayInterest();
                break;
            case 4:
                displaySlide = slide4;
                displayProjects();
                break;
            case 5:
                displaySlide = slide5;
                displayContact();
                break;
            default:
                displaySlide = slide0;
                displayAbout();
        }
        // ^ Depending on the value of currentSlide, set a value for displaySlide and call the corresponding function.

        displayHead.innerText = displaySlide.title;
        // ^ Displays current slide to user

        function displayAbout() {
            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".



            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displayAbout() end.

        function displayEducation() {
            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".

            

            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displayEducation() end.

        function displaySkills() {
            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".

            var imgDiv= document.createElement("div");
            // ^ Create variable imgDiv to store all img elements.

            for (letter in displaySlide.icons.src) {
                var img = document.createElement("img");
                img.classList.add("skillsIcon");
                // ^ Create variable img element with class skillsIcon.

                img.src = displaySlide.icons.src[letter];
                img.alt = displaySlide.icons.alt[letter];
                // ^ Give img elements src and alt attributes.

                imgDiv.appendChild(img);
                // ^ Send img inside imgDiv.
            }
            // ^ For each letter inside the src and alt objects of slide2, create a img element with thier attribute values.

            divSlide.appendChild(imgDiv);
            // ^ Send imgDiv inside divSlide.
            
            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displaySkills() end.

        function displayInterest() {
            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".

            

            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displayInterest() end.

        function displayProjects() {
            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".

            

            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displayProjects() end.

        function displayContact() {
            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".

            

            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displayContact() end.
    }
    // ^ createSlide(); end.

    createSlide();
    // ^ Initial call to function createSlide.

    function deleteSlide() {
        if (document.getElementById("slide")) {
            document.getElementById("slide").remove();
        }
        // ^ If the div with an id of "slide," is reachable delete div.
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
    // ^ Call funciton deleteSlide. Then increment currentSlide unless it's on the last slide then return to the first slide instead. Call function createSlide.

    next.addEventListener("click", nextSlide);
    // ^ Listener for funciton nextSlide.

    function previousSlide() {
        deleteSlide();
        if (currentSlide === 0) {
            currentSlide = 5;
        } else {
            currentSlide--;
        }
        createSlide();
    }
    // ^ Call funciton deleteSlide. Then decrement currentSlide unless it's on the first slide then return to the last slide instead. Call function createSlide.

    previous.addEventListener("click", previousSlide);
    // ^ Listener for function previousSlide.

    function interactNav() {
        if (navBar.style.display === "none") {
            navBar.style.display = "flex";
        } else {
            navBar.style.display = "none";
        }
    }
    // ^ If Navbar is not displayed, give display of flex. If display is shown, give display of none.

    displayHead.addEventListener("click", interactNav);
    // ^ Listener of function interactNav.

    function selectNav(input) {
        deleteSlide();
        currentSlide = input;
        createSlide();
        navBar.style.display = "none";
    }
    // ^ If Link in Nav bar is selected, Call function deleteSlide. Current slide then becomes equal to corresponding value of the selected. Call function createSlide. Navbar's display is then set to none.

    about.addEventListener("click", function(){ selectNav(0); });
    education.addEventListener("click", function(){ selectNav(1); });
    skills.addEventListener("click", function(){ selectNav(2); });
    interest.addEventListener("click", function(){ selectNav(3); });
    projects.addEventListener("click", function(){ selectNav(4); });
    contact.addEventListener("click", function(){ selectNav(5); });
    // ^ Listeners of function selectNav with values of the corresponding slides. 
})();