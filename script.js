/* =========================================================
   NIRVAN '26
   JAVASCRIPT
========================================================= */


/* =========================================================
   EVENT DATA
========================================================= */

const events = [

    {
        id: 1,

        category: "Hackathon",

        title: "HackSprint",

        icon: "⌘",

        color: "#6d5dfc",

        background:
            "linear-gradient(135deg,#211d58,#0d1220)",

        description:
            "A high-energy innovation challenge where participants turn ideas into impactful solutions. Build, code, collaborate and compete.",

        date: "12 October 2026",

        time: "10:00 AM",

        venue: "Computer Lab 1",

        team: "2–4",

        fee: "₹100",

        prize: "₹15,000",

        rules:
            "Build an original solution within the challenge constraints. Final rules can be added by the organizers."
    },


    {
        id: 2,

        category: "Workshop",

        title: "Tech Workshop",

        icon: "✦",

        color: "#23d7e9",

        background:
            "linear-gradient(135deg,#0c4b58,#0d1220)",

        description:
            "An interactive learning experience designed to bridge theory and practical skills. Learn from experts and explore emerging technologies.",

        date: "12 October 2026",

        time: "11:00 AM",

        venue: "Innovation Lab",

        team: "Individual",

        fee: "TBA",

        prize: "Certificate",

        rules:
            "Workshop-specific participation rules will be announced by organizers."
    },


    {
        id: 3,

        category: "CTF",

        title: "Cyber CTF",

        icon: "⌁",

        color: "#f34c9a",

        background:
            "linear-gradient(135deg,#53183c,#0d1220)",

        description:
            "Put your cybersecurity skills to the test through challenges covering cryptography, web security, forensics and more.",

        date: "12 October 2026",

        time: "04:00 PM",

        venue: "Open Ground",

        team: "TBA",

        fee: "TBA",

        prize: "TBA",

        rules:
            "Find the flags, solve the challenges and prove your skills. Final rules will be provided by organizers."
    },


    {
        id: 4,

        category: "E-Sports",

        title: "E-Sports Arena",

        icon: "◈",

        color: "#f5b83d",

        background:
            "linear-gradient(135deg,#5a4214,#0d1220)",

        description:
            "Experience the ultimate competitive gaming arena where strategy, teamwork, reflexes and skill come together.",

        date: "12 October 2026",

        time: "02:00 PM",

        venue: "Lab 2",

        team: "TBA",

        fee: "TBA",

        prize: "TBA",

        rules:
            "Compete against fellow gamers, climb the leaderboard and battle for victory."
    },


    {
        id: 5,

        category: "Treasure Hunt",

        title: "Tech Treasure Hunt",

        icon: "◇",

        color: "#34d399",

        background:
            "linear-gradient(135deg,#124d3b,#0d1220)",

        description:
            "A thrilling adventure combining logic, teamwork, observation and problem-solving. Follow clues and race against other teams.",

        date: "12 October 2026",

        time: "11:00 AM",

        venue: "Seminar Hall",

        team: "TBA",

        fee: "TBA",

        prize: "TBA",

        rules:
            "Follow clues and complete challenges. Final rules and team limits will be announced by organizers."
    }

];



/* =========================================================
   SCHEDULE DATA
========================================================= */

const schedule = [

    {
        time: "09:00",
        event: "Opening Ceremony",
        venue: "Main Auditorium"
    },

    {
        time: "10:00",
        event: "Hackathon",
        venue: "Lab 1"
    },

    {
        time: "11:00",
        event: "Treasure Hunt",
        venue: "Seminar Hall"
    },

    {
        time: "13:00",
        event: "Lunch",
        venue: "Food Court"
    },

    {
        time: "14:00",
        event: "E-Sport",
        venue: "Lab 2"
    },

    {
        time: "16:00",
        event: "CTF",
        venue: "Open Ground"
    },

    {
        time: "18:00",
        event: "HackSprint Begins",
        venue: "Innovation Lab"
    }

];



/* =========================================================
   VARIABLES
========================================================= */

let selectedCategory = "All";

let searchText = "";



/* =========================================================
   DOM ELEMENTS
========================================================= */

const eventContainer =
    document.getElementById(
        "eventContainer"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const filters =
    document.getElementById(
        "filters"
    );


const noEvents =
    document.getElementById(
        "noEvents"
    );



/* =========================================================
   DISPLAY EVENTS
========================================================= */

function displayEvents() {


    const filteredEvents =
        events.filter(
            event => {


                const categoryMatch =
                    selectedCategory === "All" ||
                    event.category === selectedCategory;


                const searchMatch =
                    (
                        event.title +
                        event.category +
                        event.description +
                        event.venue
                    )
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    eventContainer.innerHTML = "";


    filteredEvents.forEach(
        event => {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "event-card";


            card.innerHTML = `

                <div
                    class="event-image"
                    style="
                        background:
                        ${event.background};
                    "
                >

                    <span
                        class="event-stripe"
                        style="
                            background:
                            ${event.color};
                        "
                    ></span>


                    <span class="event-icon">

                        ${event.icon}

                    </span>


                    <span class="event-badge">

                        ${event.category}

                    </span>

                </div>


                <div class="event-content">


                    <span class="event-type">

                        ${event.category.toUpperCase()}

                    </span>


                    <h3>

                        ${event.title}

                    </h3>


                    <p>

                        ${event.description}

                    </p>


                    <div class="event-meta">

                        <span>
                            ◷ ${event.date}
                            • ${event.time}
                        </span>

                        <span>
                            ⌖ ${event.venue}
                        </span>

                    </div>


                    <div class="event-bottom">

                        <span class="prize">

                            Prize:
                            ${event.prize}

                        </span>


                        <button
                            class="view-btn"
                            onclick="
                                openEvent(${event.id})
                            "
                        >

                            View Details

                        </button>

                    </div>


                </div>

            `;


            eventContainer.appendChild(
                card
            );

        }
    );


    if (
        filteredEvents.length === 0
    ) {

        noEvents.classList.remove(
            "hidden"
        );

    }

    else {

        noEvents.classList.add(
            "hidden"
        );

    }

}



/* =========================================================
   FILTER EVENTS
========================================================= */

filters.addEventListener(
    "click",
    function(event) {


        const button =
            event.target.closest(
                ".filter"
            );


        if (!button) return;


        document
            .querySelectorAll(
                ".filter"
            )
            .forEach(
                btn =>
                    btn.classList.remove(
                        "active"
                    )
            );


        button.classList.add(
            "active"
        );


        selectedCategory =
            button.dataset.category;


        displayEvents();

    }
);



/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    function(event) {

        searchText =
            event.target.value;

        displayEvents();

    }
);



/* =========================================================
   EVENT MODAL
========================================================= */

function openEvent(id) {


    const event =
        events.find(
            item =>
                item.id === id
        );


    if (!event) return;


    const eventDetails =
        document.getElementById(
            "eventDetails"
        );


    eventDetails.innerHTML = `

        <div
            class="event-detail-top"
            style="
                background:
                ${event.background};
            "
        >

            <div class="event-symbol">

                ${event.icon}

            </div>

        </div>


        <p class="section-label">

            ${event.category.toUpperCase()}

        </p>


        <h2>

            ${event.title}

        </h2>


        <p class="modal-description">

            ${event.description}

        </p>


        <div class="event-detail-list">


            <div>

                <span>
                    DATE
                </span>

                <strong>
                    ${event.date}
                </strong>

            </div>


            <div>

                <span>
                    TIME
                </span>

                <strong>
                    ${event.time}
                </strong>

            </div>


            <div>

                <span>
                    VENUE
                </span>

                <strong>
                    ${event.venue}
                </strong>

            </div>


            <div>

                <span>
                    TEAM SIZE
                </span>

                <strong>
                    ${event.team}
                </strong>

            </div>


            <div>

                <span>
                    REGISTRATION FEE
                </span>

                <strong>
                    ${event.fee}
                </strong>

            </div>


            <div>

                <span>
                    PRIZE
                </span>

                <strong>
                    ${event.prize}
                </strong>

            </div>


            <div>

                <span>
                    RULES
                </span>

                <strong>
                    ${event.rules}
                </strong>

            </div>


        </div>


        <button
            class="btn btn-primary full"
            onclick="
                closeEventModal();
                openRegistration(${event.id});
            "
        >

            Register for
            ${event.title}
            ↗

        </button>

    `;


    document
        .getElementById(
            "eventModal"
        )
        .classList.remove(
            "hidden"
        );

}



/* =========================================================
   CLOSE EVENT MODAL
========================================================= */

function closeEventModal() {

    document
        .getElementById(
            "eventModal"
        )
        .classList.add(
            "hidden"
        );

}



/* =========================================================
   REGISTRATION
========================================================= */

function openRegistration(
    selectedEvent = null
) {


    const select =
        document.getElementById(
            "eventSelect"
        );


    select.innerHTML = `

        <option value="General Registration">

            General Fest Registration

        </option>

        ${

            events
                .map(
                    event => `

                        <option
                            value="${event.title}"
                        >

                            ${event.title}

                        </option>

                    `
                )
                .join("")

        }

    `;


    if (selectedEvent) {

        const event =
            events.find(
                item =>
                    item.id ===
                    selectedEvent
            );


        if (event) {

            select.value =
                event.title;

        }

    }


    document
        .getElementById(
            "registrationModal"
        )
        .classList.remove(
            "hidden"
        );

}



/* =========================================================
   CLOSE REGISTRATION
========================================================= */

function closeRegistration() {

    document
        .getElementById(
            "registrationModal"
        )
        .classList.add(
            "hidden"
        );

}



/* =========================================================
   REGISTRATION FORM
========================================================= */

document
    .getElementById(
        "registrationForm"
    )
    .addEventListener(
        "submit",
        function(event) {


            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value;


            const email =
                document.getElementById(
                    "email"
                ).value;


            const college =
                document.getElementById(
                    "college"
                ).value;


            const selectedEvent =
                document.getElementById(
                    "eventSelect"
                ).value;


            const registration = {

                name: name,

                email: email,

                college: college,

                event: selectedEvent,

                date:
                    new Date()
                    .toLocaleString()

            };


            let registrations =
                JSON.parse(
                    localStorage.getItem(
                        "nirvanRegistrations"
                    )
                ) || [];


            registrations.push(
                registration
            );


            localStorage.setItem(

                "nirvanRegistrations",

                JSON.stringify(
                    registrations
                )

            );


            closeRegistration();


            showToast(
                "Registration successful ✓"
            );


            this.reset();

        }
    );



/* =========================================================
   TOAST
========================================================= */

function showToast(message) {


    const container =
        document.getElementById(
            "toastContainer"
        );


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "toast";


    toast.textContent =
        message;


    container.appendChild(
        toast
    );


    setTimeout(
        () => {

            toast.remove();

        },
        3000
    );

}



/* =========================================================
   COUNTDOWN
========================================================= */

/*
   IMPORTANT:
   The brief supplied to us does not contain
   an official NIRVAN '26 date.

   Replace this date when the official date
   is confirmed.
*/

const festDate =
    new Date(
        "2026-10-12T09:00:00"
    ).getTime();



function updateCountdown() {


    const now =
        new Date().getTime();


    const difference =
        festDate - now;


    if (difference <= 0) {

        document.getElementById(
            "countdown"
        ).innerHTML = `

            <div
                style="
                    grid-column:
                    1 / -1;
                "
            >

                <strong>
                    LIVE
                </strong>

                <span>
                    NIRVAN '26
                </span>

            </div>

        `;

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            difference /
            (1000 * 60 * 60)
        ) % 24;


    const minutes =
        Math.floor(
            difference /
            (1000 * 60)
        ) % 60;


    const seconds =
        Math.floor(
            difference /
            1000
        ) % 60;


    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(
            2,
            "0"
        );


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(
            2,
            "0"
        );


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(
            2,
            "0"
        );


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(
            2,
            "0"
        );

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);



/* =========================================================
   SCHEDULE
========================================================= */

function displaySchedule() {


    const container =
        document.getElementById(
            "scheduleContainer"
        );


    container.innerHTML =
        schedule
            .map(
                item => `

                    <div
                        class="schedule-item"
                    >

                        <span
                            class="schedule-time"
                        >

                            ${item.time}

                        </span>


                        <div
                            class="schedule-event"
                        >

                            <strong>

                                ${item.event}

                            </strong>

                            <span>

                                NIRVAN '26

                            </span>

                        </div>


                        <span
                            class="schedule-venue"
                        >

                            ${item.venue}

                        </span>

                    </div>

                `
            )
            .join("");

}


displaySchedule();



/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


const savedTheme =
    localStorage.getItem(
        "nirvanTheme"
    );


if (
    savedTheme ===
    "light"
) {

    document.body.classList.add(
        "light"
    );

    themeBtn.textContent =
        "☾";

}


themeBtn.addEventListener(
    "click",
    function() {


        document.body.classList.toggle(
            "light"
        );


        const isLight =
            document.body.classList.contains(
                "light"
            );


        localStorage.setItem(

            "nirvanTheme",

            isLight
                ? "light"
                : "dark"

        );


        themeBtn.textContent =
            isLight
                ? "☾"
                : "☀";

    }
);



/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const navMenu =
    document.getElementById(
        "navMenu"
    );


menuBtn.addEventListener(
    "click",
    function() {

        navMenu.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll(
        "#navMenu a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                function() {

                    navMenu.classList.remove(
                        "open"
                    );

                }
            );

        }
    );



/* =========================================================
   GALLERY
========================================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


galleryItems.forEach(
    (item, index) => {


        item.addEventListener(
            "click",
            function() {


                document.getElementById(
                    "galleryNumber"
                ).textContent =
                    String(index + 1)
                    .padStart(
                        2,
                        "0"
                    );


                document.getElementById(
                    "galleryTitle"
                ).textContent =
                    item.dataset.title
                    .toUpperCase();


                document
                    .getElementById(
                        "galleryModal"
                    )
                    .classList.remove(
                        "hidden"
                    );

            }
        );

    }
);



function closeGallery() {

    document
        .getElementById(
            "galleryModal"
        )
        .classList.add(
            "hidden"
        );

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {


        if (
            event.key ===
            "Escape"
        ) {

            closeEventModal();

            closeRegistration();

            closeGallery();

        }

    }
);



/* =========================================================
   START
========================================================= */

displayEvents();