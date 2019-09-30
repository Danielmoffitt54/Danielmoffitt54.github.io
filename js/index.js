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
            b: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat ex harum beatae, cum neque quia similique quidem esse et recusandae omnis ut quasi illo sapiente sed, illum facere quos! Laboriosam cum aperiam consequuntur rerum ea eligendi, cupiditate perspiciatis quidem facere, harum quasi quod! A mollitia perferendis iusto veritatis doloribus.",
        },
    }
    // ^ slide1 end.

    var slide2 = {
        title: "Skills",
        intro: "",
        subHeader: {
            a: "Programing Languages & Tools",
            b: "Additional",
        },
        class: {
            a: "fa-html5",
            b: "fa-css3-alt",
            c: "fa-js-square",
            d: "fa-react",
            e: "fa-node-js",
            f: "fa-bootstrap",
        },
        ul: {
            a: "MongoDB",
            b: "Express",
            c: "IOs Operating System",
        },
    }
    // ^ slide2 end.

    var slide3 = {
        title: "Projects",
        intro: "List below provides projects I have worked on and currently building.",
        finished: {
            subHeader: {
                a: "To-Do list",
                b: "Tip Calculator",
                c: "JavaScript Clock",
            },
            href: {
                a: "https://github.com/Danielmoffitt54/To-Do-List",
                b: "https://github.com/Danielmoffitt54/Tip-Calculator",
                c: "https://github.com/Danielmoffitt54/JavaScript-Clock",
            },
            description: {
                a: "Enter what you need to do inside the input box then manage your list by marking if completed or removing an item.",
                b: "Enter your total bill amount, service cost, and number of people sharing the bill, to determine your tip and total cost for each person.",
                c: "Clock updating every second displaying the current day of the week, date, and local time."
            },
            type: {
                a: "Website",
                b: "Website",
                c: "Website"
            }
        },
        inProgress: {
            state: "(In Construction)",
            subHeader: {
                a: "Vette City Lacrosse",
            },
            href: {
                a: "https://github.com/Danielmoffitt54/Vandals-Website",
            },
            description: {
                a: "Create an account to sign up or browse over a variety of offered packages or to shop online for team merchandise.",
            },
            type: {
                a: "Website",
            }
        }
    }
    // ^ slide4 end.

    var slide4 = {
        title: "Contact",
        socialMedia: {
            subHeader: {
                a: "LinkedIn",
                b: "GitHub",
            },
            url: {
                a: "https://www.linkedin.com/in/danielmoffitt54/",
                b: "https://github.com/Danielmoffitt54",
            },
        },
        personal: {
            subHeader: {
                a: "Email",
                b: "Address",
            },
            text: {
                a: "DanielMoffitt54@Gmail.com",
                b: "Glasgow, KY",
            },
        },
        resume: {
            subHeader: "Resume",
            link: "Google Docs",
            url: "",
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
            firstName.classList.add("firstName");
            var lastName = document.createElement("h1");
            lastName.classList.add("lastName");
            // ^ Create variable firstName and lastName with class aboutName.

            firstName.innerText = displaySlide.header.a;
            lastName.innerText = displaySlide.header.b;
            // ^ Give firstName and lastName values of header a and b.

            divSlide.appendChild(firstName);
            divSlide.appendChild(lastName);
            // ^ Send firstName and lastName to divSlide.

            var divider = document.createElement("hr");
            divider.classList.add("aboutDivider");
            // ^ Create variable divider with class aboutDivider.

            divSlide.appendChild(divider);
            // ^ Send divider inside divSlide.

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

                    for (letter in displaySlide.class) {
                        var img = displaySlide.class[letter];
                        // ^ Create variable img.

                        var icon = document.createElement("i");
                        icon.classList.add("skillsIcon", "fab", img, "fa-5x");
                        // ^ Create variable icon with class fab and corresponding letter in class.

                        contentBlock.appendChild(icon);
                        // ^ Send icon inside contentBlock.
                    }
                    // ^ For each letter inside class objects of slide2, create a icon with class values fab and corresponding letter in class then send inside contentBlock.
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

            var intro = document.createElement("h2");
            intro.innerText = displaySlide.intro;
            divSlide.appendChild(intro);
            // ^ Creates variable intro with value of object's intro and sends inside divSlide.

            for (letter in displaySlide.finished.subHeader) {
                var projectBlock = document.createElement("div");
                projectBlock.classList.add("projectBlock");
                // ^ Create variable projectBlock with class projectBlock

                var subHeaderStr = document.createElement("h3");
                // ^ Create variable subHeaderStr.

                var anchor = document.createElement("a");
                anchor.href = displaySlide.finished.href[letter];
                anchor.target = "_blank";
                // ^ Create variable anchor with href and target attributes of the corresponding letter in href object and _target.

                var description = document.createElement("p");
                var type = document.createElement("p");
                // ^ Creates variables description and type.

                anchor.innerText = displaySlide.finished.subHeader[letter];
                description.innerText = displaySlide.finished.description[letter];
                type.innerText = displaySlide.finished.type[letter];
                // ^ Gives anchor, description, and type values of corresponding letter in their objects.

                subHeaderStr.appendChild(anchor);
                // Sends anchor inside subHeaderStr.

                projectBlock.appendChild(subHeaderStr);
                projectBlock.appendChild(description);
                projectBlock.appendChild(type);
                // ^ Sends subHeaderStr, description, and type inside projectBlock.

                divSlide.appendChild(projectBlock);
                // ^ Sends projectBlock inside divSlide.
            }
            // ^ For each letter inside finished subHeader object of slide3, create a h3, anchor, and p elements with the letter value of slide3's finished objects.

            for (letter in displaySlide.inProgress.subHeader) {
                var projectBlock = document.createElement("div");
                projectBlock.classList.add("projectBlock");
                // ^ Create variable projectBlock with class projectBlock.

                var subHeaderStr = document.createElement("h3");
                // ^ Create variable subHeaderStr.

                var anchor = document.createElement("a");
                anchor.href = displaySlide.inProgress.href[letter];
                anchor.target = "_blank";
                // ^ Create variable anchor with href and target attributes of the corresponding letter in href object and _target.

                var description = document.createElement("p");
                var type = document.createElement("p");
                // ^ Creates variables description and type.

                anchor.innerText = displaySlide.inProgress.subHeader[letter];
                description.innerText = displaySlide.inProgress.description[letter];
                type.innerText = displaySlide.inProgress.type[letter];
                // ^ Gives anchor, description, and type values of corresponding letter in their objects.

                subHeaderStr.appendChild(anchor);
                // Sends anchor inside subHeaderStr.

                subHeaderStr.innerHTML += " " + displaySlide.inProgress.state;
                // ^ Gives subHeaderStr value of inProgress value of state at the end of existing html.

                projectBlock.appendChild(subHeaderStr);
                projectBlock.appendChild(description);
                projectBlock.appendChild(type);
                // ^ Sends subHeaderStr, description, and type inside projectBlock.

                divSlide.appendChild(projectBlock);
                // ^ Sends projectBlock inside divSlide.
            }
            // ^ For each letter inside inProgress subHeader object of slide3, create a h3, anchor, and p elements with the letter value of slide3's finished objects.

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

            for (letter in displaySlide.socialMedia.subHeader) {
                var contentBlock = document.createElement("div");
                contentBlock.classList.add("contentBlock");
                // ^ Create variable contentBlock with class contentBlock.

                var subHeader = document.createElement("h3");
                var url = document.createElement("a");
                url.href = displaySlide.socialMedia.url[letter];
                url.target = "_blank";
                // ^ Create variable subHeader and url and give url the corresponding letter of the url object and target value of "_blank".

                subHeader.innerText = displaySlide.socialMedia.subHeader[letter];
                url.innerText = displaySlide.socialMedia.url[letter];
                // ^ Give subHeader and url values of letter for their corresponding object.

                contentBlock.appendChild(subHeader);
                contentBlock.appendChild(url);
                // ^ Send subHeader and url to contentBlock.

                divSlide.appendChild(contentBlock);
                // ^ Send contentBlock to divSlide.
            }
            // ^ For each letter inside socialMedia subHeader object of slide4, create a div, h3, and anchor elements, with the letter value of slide4's socialMedia objects.


            for (letter in displaySlide.personal.subHeader) {
                var contentBlock = document.createElement("div");
                contentBlock.classList.add("contentBlock");
                // ^ Create variable contentBlock with class contentBlock.

                var subHeader = document.createElement("h3");
                var text = document.createElement("p");
                // ^ Create variables subHeader and text

                subHeader.innerText = displaySlide.personal.subHeader[letter];
                text.innerText = displaySlide.personal.text[letter];
                // ^ Give subHeader and text the corresponding letter value of their objects.

                contentBlock.appendChild(subHeader);
                contentBlock.appendChild(text);
                // ^ Send subHeader and text inside contentBlock.

                divSlide.appendChild(contentBlock);
                // ^ Send contentBlock inside divSlide.
            }
            // ^ For each letter inside personal subHeader object of slide4, create a div, h3, and p elements, with the letter value of slide4's personal objects.

            var contentBlock = document.createElement("div");
            contentBlock.classList.add("contentBlock");
            // ^ Create variable contentBlock with class contentBlock.

            var subHeader = document.createElement("h3");
            var anchor = document.createElement("a");
            anchor.href = displaySlide.resume.url;
            anchor.target = "_target";
            // ^ Create variable subHeader and anchor and give anchor the corresponding letter of the href object and target value of "_blank".

            subHeader.innerText = displaySlide.resume.subHeader;
            anchor.innerText = displaySlide.resume.link;
            // ^ Give subHeader the  value of resume's subHeader as a concatenated string and anchor the value of resume's link.

            contentBlock.appendChild(subHeader);
            contentBlock.appendChild(anchor);
            // ^ Send subHeader and anchor inside contentBlock.

            divSlide.appendChild(contentBlock);
            // ^ Send contentBlock inside divSlide.

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