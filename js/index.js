(function () {
    var previous = document.getElementById("prevSlide");
    var next = document.getElementById("nextSlide");
    var displayHead = document.getElementById("displayHeader");
    var navBar = document.getElementById("dropUpMenu");
    var about = document.getElementById("aboutBtn");
    var experience = document.getElementById("experienceBtn");
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
            a: "Driven by challenge, my ambition, and the unknown, I strive to become a creative developer that is adaptable, innovative, and relied on by others.  With history in team management and critical thinking under pressure, I pursue my new found passion as a software developer.",
            b: "Aspiring Junior Software Developer seeking opportunities to challenge myself and broaden my knowledge while providing quality teamwork and pursuing my passion.",
            c: "For the past 2 years I've been an assistant coach for South Warren High School and Vette City Lacrosse.  I was responsible for coaching the defense to the players as well as analyze strategies in films and games.  Last year we took the second year program of South Warren to state semi-finals and this summer Vette City won the title King of Queens in Cinncinati, Ohio.  Through it all, watching the players grow as a person and player over the past couple years has to be the most satisfying of all.",
            d: "I'm also a board game enthusiast.  Turn-based strategy along with deck builders have to be among my most favorite genres.  Whether its a strategy working people with or the competition against people, the strategies you use never work twice and sometimes you lose games but learning from it makes the experience all the more enjoyable.",
        },
    }
    // ^ slide0 end.
    
    var slide1 = {
        title: "Experience",
        intro: "Details on knowledge I have gained through my career.",
        subHeader: {
            a: "Barren County Skills",
        },
        attended: {
            a: "August 2019 - PRESENT",
        },
        location: {
            a: "Glasgow, KY",
        },
        description: {
            a: "BCskills' Cohort II main curricula is on web development, starting with learning how to use Git, organize your folders, and learning basic HTML and CSS with VsCode.  By the second month, the class completed multiple projects using JavaScript, JQuery, AJAX, and Bootstrap.  Followed by the start of group projects and diving into the MERN stack.",
        },
    }
    // ^ slide1 end.

    var slide2 = {
        title: "Skills",
        intro: "Lists current skills acquired.",
        subHeader: {
            a: "Front-end",
            b: "Back-end / Other",
        },
        frontEnd: {
            a: "HTML5",
            b: "CSS3",
            c: "JavaScript",
            d: "Bootstrap",
            e: "JQuery",
            f: "AJAX",
            g: "Sass",
            h: "React",
        },
        backEnd: {
            a: "MongoDB",
            b: "Express",
            c: "NodeJS",
            d: "Version Contol System (Git)",

        },
    }
    // ^ slide2 end.

    var slide3 = {
        title: "Projects",
        intro: "Provides a list of projects I have worked on and currently building.",
        subHeader: {
            a: "Weather Site",
            b: "Pokemon API Site",
            c: "JavaScript Clock",
            d: "Tip Calculator",
            e: "To-Do list",
        },
        href: {
            a: "https://github.com/Danielmoffitt54/Weather-Site",
            b: "https://github.com/Danielmoffitt54/Pokemon-API-Site",
            c: "https://github.com/Danielmoffitt54/JavaScript-Clock",
            d: "https://github.com/Danielmoffitt54/Tip-Calculator",
            e: "https://github.com/Danielmoffitt54/To-Do-List",
        },
        description: {
            a: "Search for a location by Address, City, or Zip code, and get information on the current weather and the forecast for the next five days.",
            b: "Online pokedex with an input linked to and API. The user can search for Pokemon by ID number or by name and then retrieve data from PokeAPI to be displayed below the header.",
            c: "Clock updating every second displaying the current day of the week, date, and local time.",
            d: "Enter your total bill amount, service cost, and number of people sharing the bill, to determine your tip and total cost for each person.",
            e: "Enter what you need to do inside the input box then manage your list by marking if completed or removing an item.",
        },
        info: {
            a: "Webpage (Current Project)",
            b: "Webpage",
            c: "Webpage",
            d: "Webpage",
            e: "Webpage",
        }
    }
    // ^ slide4 end.

    var slide4 = {
        title: "Contact",
        socialMedia: {
            text: "Follow my progress on ",
            account: {
                a: "LinkedIn",
                b: "GitHub",
                c: "Twitter",
            },
            url: {
                a: "https://www.linkedin.com/in/danielmoffitt54/",
                b: "https://github.com/Danielmoffitt54",
                c: "https://twitter.com/DMoffitt54",
            },
        },
        resume: {
            text: {
                a: "For my resume PDF ",
                b: "click here",
            },
            url: "https://docs.google.com/document/d/1GIsH3G1RY-KFwnLGp4JlK7_-H3qlQ2V7pk0P8FlS69k/edit?usp=sharing",
        },
        personal: {
            subHeader: {
                a: "Email",
                b: "Address",
            },
            text: {
                a: "Danielmoffitt54@Gmail.com",
                b: "Glasgow, KY",
            },
        },
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
                displayExperience();
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
            divSlide.classList.add("aboutSlide");
            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.

            var firstName = document.createElement("h1");
            firstName.classList.add("firstName");
            firstName.innerText = displaySlide.header.a;
            divSlide.appendChild(firstName);

            var lastName = document.createElement("h1");
            lastName.classList.add("lastName");
            lastName.innerText = displaySlide.header.b;
            divSlide.appendChild(lastName);

            var divider = document.createElement("hr");
            divider.classList.add("aboutDivider");
            divSlide.appendChild(divider);

            for (letter in displaySlide.subHeader) {
                var contentBlock = document.createElement("div");
                contentBlock.classList.add("contentBlock");
                divSlide.appendChild(contentBlock);

                var subHeader = document.createElement("h3");
                subHeader.innerText = displaySlide.subHeader[letter];
                contentBlock.appendChild(subHeader);

                var text = document.createElement("p");
                text.innerText = displaySlide.text[letter];
                contentBlock.appendChild(text);
            }
            // ^ For each letter inside the subHeader and text objects of slide0. Create a h3 and p element with their values.
        }
        // ^ displayAbout() end.

        function displayExperience() {
            experience.classList.add("activeSlide");
            // ^ Gives button on monitor view higlighted background.

            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            divSlide.classList.add("experienceSlide");
            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.

            var intro = document.createElement("h2");
            intro.innerText = displaySlide.intro;
            divSlide.appendChild(intro);
            // ^ Creates variable intro with value of object's intro and sends inside divSlide.

            for (letter in displaySlide.subHeader) {
                var contentBlock = document.createElement("div");
                contentBlock.classList.add("contentBlock");
                divSlide.appendChild(contentBlock);
                // ^ Send contentBlock inside divSlide.

                var h3 = document.createElement("h3");
                h3.innerText = displaySlide.subHeader[letter];
                contentBlock.appendChild(h3);

                var h4Str = displaySlide.attended[letter] + " | " + displaySlide.location[letter];
                // ^ Creates variable for h4Str and gives value of corresponding letter of attended and loction object.

                var h4 = document.createElement("h4");
                h4.innerText = h4Str;
                contentBlock.appendChild(h4);

                var p = document.createElement("p");
                p.innerText = displaySlide.description[letter];
                contentBlock.appendChild(p);
            }
        }
        // ^ displayExperience() end.

        function displaySkills() {
            skills.classList.add("activeSlide");
            // ^ Gives button on monitor view higlighted background.

            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            divSlide.classList.add("skillsSlide");
            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.

            var intro = document.createElement("h2");
            intro.innerText = displaySlide.intro;
            divSlide.appendChild(intro);
            // ^ Creates variable intro with value of object's intro and sends inside divSlide.

            for (letter in displaySlide.subHeader) {
                var h3 = document.createElement("h3");
                h3.innerText = displaySlide.subHeader[letter];
                divSlide.appendChild(h3);
                // ^ Send subHeader to divSlide.

                if (letter === "a") {
                    var contentBlock = document.createElement("ul");
                    contentBlock.classList.add("contentBlock");
                    divSlide.appendChild(contentBlock);
                    // ^ Send contentBlock inside divSlide.

                    for (letter in displaySlide.frontEnd) {
                        var li = document.createElement("li");
                        li.innerText = displaySlide.frontEnd[letter];
                        contentBlock.appendChild(li);
                        // ^ Send li inside contentBlock.
                    }
                    // ^ For each letter inside class objects of slide2, create a icon with class values fab and corresponding letter in class then send inside contentBlock.
                } else {
                    var contentBlock = document.createElement("ul");
                    contentBlock.classList.add("contentBlock");
                    divSlide.appendChild(contentBlock);
                    // ^ Send contentBlock inside divSlide.

                    for (letter in displaySlide.backEnd) {
                        var li = document.createElement("li");
                        li.innerText = displaySlide.backEnd[letter];
                        contentBlock.appendChild(li);
                        // ^ Send li inside contentBlock.
                    }
                    // ^ For each letter inside the backEnd object of slide2, create a li element with their corresponding values and send inside contentBlock.
                }
                // ^ If subHeader value is a run the first, else run the second.
            }
            // ^ For each letter inside subHeader object of slide2, create a h3 element with value of subHeader's corresponding letter.
        }
        // ^ displaySkills() end.

        function displayProjects() {
            projects.classList.add("activeSlide");
            // ^ Gives button on monitor view higlighted background.

            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            divSlide.classList.add("projectsSlide");
            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.

            var intro = document.createElement("h2");
            intro.innerText = displaySlide.intro;
            divSlide.appendChild(intro);
            // ^ Creates variable intro with value of object's intro and sends inside divSlide.

            for (letter in displaySlide.subHeader) {
                var projectBlock = document.createElement("div");
                projectBlock.classList.add("projectBlock");
                divSlide.appendChild(projectBlock);
                // ^ Sends projectBlock inside divSlide.

                var h3Str = document.createElement("h3");
                projectBlock.appendChild(h3Str);
                // ^ Sends h3Str inside projectBlock.

                var a = document.createElement("a");
                a.href = displaySlide.href[letter];
                a.target = "_blank";
                a.innerText = displaySlide.subHeader[letter];
                h3Str.appendChild(a);
                // Sends a inside h3Str.

                var p = document.createElement("p");
                p.innerText = displaySlide.description[letter];
                projectBlock.appendChild(p);
                // ^ Sends p inside projectBlock.

                var p = document.createElement("p");
                p.innerText = displaySlide.info[letter];
                projectBlock.appendChild(p);
                // ^ Sends p inside projectBlock.
            }
            // ^ For each letter inside finished subHeader object of slide3, create a h3, anchor, and p elements with the letter value of slide3's finished objects.
        }
        // ^ displayProjects() end.

        function displayContact() {
            contact.classList.add("activeSlide");
            // ^ Gives button on monitor view higlighted background.

            var displayMain = document.getElementById("mainContent");
            // ^ Create variable displayMain linked to main element on index.html.

            var divSlide = document.createElement("div");
            divSlide.id = "slide";
            divSlide.classList.add("contactSlide");
            displayMain.appendChild(divSlide);
            // ^ Send divSlide inside displayMain to be displayed on index.html.
            
            var socialMediaStr = document.createElement("h2");
            socialMediaStr.innerText = displaySlide.socialMedia.text;
            divSlide.appendChild(socialMediaStr);
            // ^ Send socialMediaStr inside divSlide.

            for (letter in displaySlide.socialMedia.account) {
                var anchor = document.createElement("a");
                anchor.href = displaySlide.socialMedia.url[letter];
                anchor.target = "_blank"
                anchor.innerText = displaySlide.socialMedia.account[letter];
                socialMediaStr.appendChild(anchor);
                // ^ Send anchor inside socialMediaStr.
            }
            // For each social media url make an anchor for it.

            var resumeStr = document.createElement("h2");
            resumeStr.innerText = displaySlide.resume.text.a;
            divSlide.appendChild(resumeStr);

            var anchor = document.createElement("a");
            anchor.href = displaySlide.resume.url;
            anchor.target = "_target";
            anchor.innerText = displaySlide.resume.text.b;
            resumeStr.appendChild(anchor);

            for (letter in displaySlide.personal.subHeader) {
                var contentBlock = document.createElement("div");
                contentBlock.classList.add("contentBlock");
                divSlide.appendChild(contentBlock);
                // ^ Send contentBlock inside divSlide.

                var subHeader = document.createElement("h3");
                subHeader.innerText = displaySlide.personal.subHeader[letter];
                contentBlock.appendChild(subHeader);
                // ^ Send subHeader inside contentBlock.

                var text = document.createElement("p");
                text.innerText = displaySlide.personal.text[letter];
                contentBlock.appendChild(text);
                // ^ Send text inside contentBlock.
            }
            // ^ For each letter inside personal subHeader object of slide4, create a div, h3, and p elements, with the letter value of slide4's personal objects.
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
            experience.classList.remove("activeSlide");
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
        var screenHeight = $(window).height();
        var mobileNavBar = 60;
        var tabletNavBar = 100;
        // ^ Create variables screenHeight, mobileNavBar, and tabletNavBar.
        

        if (navBar.style.display === "none") {
            navBar.style.display = "flex";
            if (screenHeight >= 900 && screenHeight < 1000) {
                navBar.style.height = screenHeight - tabletNavBar + "px";
            } else {
                navBar.style.height = screenHeight - mobileNavBar + "px";
            }
            // ^ If screenHeight is between 900 - 999, make the dropUpMenu height equal to screenHeight - tabletNavBar in pixels else screenHeight - mobileNavBar in pixels.
        } else {
            navBar.style.display = "none";
        }
        // ^ If Navbar is not displayed, give display of flex. If display is shown, give display of none.
    }
    // ^ Shows and hides dropUpMenu on click and sets the hieght of it to height minus navBar's height

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
    experience.addEventListener("click", function(){ selectNav(1); });
    skills.addEventListener("click", function(){ selectNav(2); });
    projects.addEventListener("click", function(){ selectNav(3); });
    contact.addEventListener("click", function(){ selectNav(4); });
    // ^ Listeners of function selectNav with values of the corresponding slides. 
})();