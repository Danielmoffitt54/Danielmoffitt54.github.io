(function () {
    var previous = document.getElementById("prevSlide");
    var next = document.getElementById("nextSlide");
    var displayHead = document.getElementById("displayHeader");
    var navBar = document.getElementById("dropUpMenu");
    var about = document.getElementById("aboutBtn");
    var education = document.getElementById("educationBtn");
    var skills = document.getElementById("skillsBtn");
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
        subHeader: {
            a: "Summary",
            b: "Goals",
            c: "Work Experience",
            d: "Interest"
        },
        text: {
            a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, cupiditate blanditiis? Illo minima saepe quod, adipisci velit iusto aut quam est inventore necessitatibus sit temporibus deleniti atque iure ducimus libero cumque ex ut veritatis pariatur quidem! Nisi repellendus alias sit hic explicabo dolores voluptate recusandae nulla. Sapiente, ipsa accusantium culpa dicta mollitia maiores pariatur fugiat iste consequatur aliquam assumenda odit voluptatem, doloremque facere nam aliquid, autem error nobis harum! Deleniti quasi sunt temporibus consectetur quaerat!",
            b: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque porro quisquam. Nam, aperiam? Distinctio incidunt magnam molestias aperiam neque non voluptate sit eligendi voluptatibus quidem, architecto, tempore officiis corrupti nulla reiciendis dolorem perspiciatis consequatur earum nobis? Dignissimos quaerat ipsam, porro tenetur sint nostrum illum atque doloribus eos labore eveniet!",
            c: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti saepe recusandae harum! Dolore eos recusandae expedita id, nihil quaerat! Reprehenderit alias nisi incidunt animi, nesciunt beatae illo qui? Dolore fugiat voluptatem quos natus distinctio ipsum molestias. Nesciunt eos, architecto id iste omnis dolores iusto qui ipsa exercitationem et at eligendi.",
            d: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti saepe recusandae harum! Dolore eos recusandae expedita id, nihil quaerat! Reprehenderit alias nisi incidunt animi, nesciunt beatae illo qui? Dolore fugiat voluptatem quos natus distinctio ipsum molestias. Nesciunt eos, architecto id iste omnis dolores iusto qui ipsa exercitationem et at eligendi."
        },
    }
    // ^ slide0 end.
    
    var slide1 = {
        title: "Education",
        intro: "List education and give brief summary of each.",
        subHeader: {
            a: "Mount Juliet High School",
            b: "BCskills",
        },
        attended: {
            a: "2009 - 2013",
            b: "August 2019 - PRESENT",
        },
        location: {
            a: "Mount Juliet, TN",
            b: "Glasgow, KY",
        },
        description: {
            a: "GPA - ",
            b: "",
        },
    }
    // ^ slide1 end.

    var slide2 = {
        title: "Skills",
        subHeader: {
            a: "Programing Languages & Tools",
            b: "Additional",
        },
        icons: {
            src: {
                a: "img/html5-brands.svg",
                b: "img/css3-alt-brands.svg",
                c: "img/js-square-brands.svg",
                d: "img/react-brands.svg",
                e: "img/node-js-brands.svg",
                f: "img/bootstrap-brands.svg",
            },
            alt: {
                a: "Html5",
                b: "Css3",
                c: "JavaScript",
                d: "React",
                e: "NodeJS",
                f: "Bootstrap",
            }
        },
        ul: {
            a: "MongoDB",
            b: "Express",
        },
    }
    // ^ slide2 end.

    var slide3 = {
        title: "Projects",
        intro: "List below provides ",
        finished: {
            subHeader: {
                a: "lorem",
            },
            description: {
                a: "lorem",
            },
            type: {
                a: "lorem",
            }
        },
        inProgress: {
            subHeader: {
                a: "",
            },
            description: {
                a: "",
            },
            type: {
                a: "",
            }
        }
    }
    // ^ slide4 end.

    var slide4 = {
        title: "Contact",
        p: {
            a: "",
        }
    }
    // ^ slide5 end.


    mySlides.push(slide0, slide1, slide2, slide3, slide4);
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
                displayProjects();
                break;
            case 4:
                displaySlide = slide4;
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
            about.classList.add("activeSlide");
            // ^ Gives button on monitor view higlighted background.

            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".

            var firstName = document.createElement("h1");
            firstName.classList.add("aboutName");
            var lastName = document.createElement("h1");
            lastName.classList.add("aboutName");
            // ^ Create variable firstName and lastName with class aboutName.

            firstName.innerText = displaySlide.header.a;
            lastName.innerText = displaySlide.header.b;
            // ^ Give firstName and lastName values of header a and b.

            divSlide.appendChild(firstName);
            divSlide.appendChild(lastName);
            // ^ Send firstName and lastName to divSlide.

            for (letter in displaySlide.subHeader) {
                var contentBlock = document.createElement("div");
                contentBlock.classList.add("contentBlock");
                // ^ Create variable contentBlock with class contentBlock.

                var subHeader = document.createElement("h3");
                var text = document.createElement("p");
                // ^ Create variables subHeader and text.
    
                subHeader.innerText = displaySlide.subHeader[letter];
                text.innerText = displaySlide.text[letter];
                // ^ Give subHeader and text values for the corresponding letter in object.

                contentBlock.appendChild(subHeader);
                contentBlock.appendChild(text);
                // ^ Send subHeader and text inside aboutCo

                divSlide.appendChild(contentBlock);
                // ^ Send aboutBlock inside divSlide.
            }
            // ^ For each letter inside the subHeader and text objects of slide0. Create a h3 and p element with their values.

            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displayAbout() end.

        function displayEducation() {
            education.classList.add("activeSlide");
            // ^ Gives button on monitor view higlighted background.

            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".

            for (letter in displaySlide.subHeader) {
                var contentBlock = document.createElement("div");
                contentBlock.classList.add("contentBlock");
                // ^ Create variable contentBlock with class contentBlock.

                var sub = document.createElement("h3");
                var subInfo = document.createElement("h4");
                var des = document.createElement("p");
                // ^ Create variables sub, att, loc, and des.

                var subInfoStr = displaySlide.attended[letter] + " | " + displaySlide.location[letter];
                // ^ Creates variable for subInfoStr and gives value of corresponding letter of attended and loction object.

                sub.innerText = displaySlide.subHeader[letter];
                subInfo.innerText = subInfoStr;
                des.innerText = displaySlide.description[letter];
                // ^ Give value to variables sub, subInfo, and des, for their corresponding letter in objects.

                contentBlock.appendChild(sub);
                contentBlock.appendChild(subInfo);
                contentBlock.appendChild(des);
                // ^ Send sub, att, loc, and des, inside contentBlock.

                divSlide.appendChild(contentBlock);
                // ^ Send contentBlock inside divSlide.
            }

            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displayEducation() end.

        function displaySkills() {
            skills.classList.add("activeSlide");
            // ^ Gives button on monitor view higlighted background.

            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".

            for (letter in displaySlide.subHeader) {
                var subHeader = document.createElement("h3");
                // ^ Create variable subHeader.

                subHeader.innerText = displaySlide.subHeader[letter];
                // ^ Give subHeader value of displaySlide's subHeader value a.

                divSlide.appendChild(subHeader);
                // ^ Send subHeader to divSlide.

                if (letter === "a") {
                    var contentBlock = document.createElement("div");
                    contentBlock.classList.add("contentBlock")
                    // ^ Create variable contentBlock with class contentBlock.

                    for (letter in displaySlide.icons.src) {
                        var img = document.createElement("img");
                        img.classList.add("skillsIcon");
                        // ^ Create variable img element with class skillsIcon.

                        img.src = displaySlide.icons.src[letter];
                        img.alt = displaySlide.icons.alt[letter];
                        // ^ Give img elements src and alt attributes for the corresponding letter in object.

                        contentBlock.appendChild(img);
                        // ^ Send img inside contentBlock.
                    }
                    // ^ For each letter inside the src and alt objects of slide2, create a img element with their attribute values and send inside contentBlock.
                } else {
                    var contentBlock = document.createElement("ul");
                    contentBlock.classList.add("contentBlock");
                    // ^ Create variable contentBlock with class contentBlock.

                    for (letter in displaySlide.ul) {
                        var listedItem = document.createElement("li");
                        // ^ Create variable listedItem.

                        listedItem.innerText = displaySlide.ul[letter];
                        // ^ Give li elements the value for the corresponding letter in ul object.

                        contentBlock.appendChild(listedItem);
                        // ^ Send listedItem inside contentBlock.
                    }
                    // ^ For each letter inside the ul object of slide2, create a li element with their corresponding values and send inside contentBlock.
                }
                // ^ If subHeader value is a run the first, else run the second.

                divSlide.appendChild(contentBlock);
                // ^ Send contentBlock inside divSlide.
            }
            // ^ For each letter inside subHeader object of slide2, create a h3 element with value of subHeader's corresponding letter.
            
            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displaySkills() end.

        function displayProjects() {
            projects.classList.add("activeSlide");
            // ^ Gives button on monitor view higlighted background.

            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            // ^ Create variable divSlide with id as "slide".

            for (letter in displaySlide.finished.subHeader) {
                var projectBlock = document.createElement("div");
                projectBlock.classList.add("projectBlock");
                // ^ Create variable projectBlock with class projectBlock

                var subHeader = document.createElement("h3");
                var description = document.createElement("p");
                var type = document.createElement("p");

                subHeader.innerText = displaySlide.finished.subHeader[letter];
                description.innerText = displaySlide.finished.description[letter];
                type.innerText = displaySlide.finished.type[letter];

                projectBlock.appendChild(subHeader);
                projectBlock.appendChild(description);
                projectBlock.appendChild(type);

                divSlide.appendChild(projectBlock);
            }

            for (letter in displaySlide.inProgress.subHeader) {
                var projectBlock = document.createElement("div");
                projectBlock.classList.add("projectBlock");
                // ^ Create variable projectBlock with class projectBlock

                var subHeader = document.createElement("h3");
                var description = document.createElement("p");
                var type = document.createElement("p");

                subHeader.innerText = displaySlide.inProgress.subHeader[letter];
                description.innerText = displaySlide.inProgress.description[letter];
                type.innerText = displaySlide.inProgress.type[letter];

                projectBlock.appendChild(subHeader);
                projectBlock.appendChild(description);
                projectBlock.appendChild(type);

                divSlide.appendChild(projectBlock);
            } 

            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
        }
        // ^ displayProjects() end.

        function displayContact() {
            contact.classList.add("activeSlide");
            // ^ Gives button on monitor view higlighted background.

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
            about.classList.remove("activeSlide");
            education.classList.remove("activeSlide");
            skills.classList.remove("activeSlide");
            projects.classList.remove("activeSlide");
            contact.classList.remove("activeSlide");
        }
        // ^ If the div with an id of "slide," is reachable delete div and remove class activeSlide from button.
    }

    function nextSlide() {
        deleteSlide();
        if (currentSlide === 4) {
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
            currentSlide = 4;
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
    projects.addEventListener("click", function(){ selectNav(3); });
    contact.addEventListener("click", function(){ selectNav(4); });
    // ^ Listeners of function selectNav with values of the corresponding slides. 
})();