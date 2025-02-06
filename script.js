const correctPin =  "403297";
let enteredPin = "";
let incorrectPinCount = 0;

const pinDisplay = document.getElementById('pinDisplay');
const lockScreen = document.getElementById('lockScreen');
const homeScreen = document.getElementById('homeScreen');
const messageScreen = document.getElementById('messageScreen');
const messageIcon = document.getElementById('messageIcon');
const messageBackButton = document.getElementById("messageBackBtn");
const stravaBackButton = document.getElementById("stravaBackBtn");
const bookBackButton = document.getElementById("bookBackBtn");
const noteBackButton = document.getElementById("noteBackBtn");
const igBackButton = document.getElementById("igBackBtn");
const musicIcon = document.getElementById("musicIcon");
const stravaIcon = document.getElementById("stravaIcon");
const bookIcon = document.getElementById("bookIcon");
const noteIcon = document.getElementById("noteIcon");
const igIcon = document.getElementById("igIcon");
const messageNotification = document.getElementById("messageNotification");

const incorrectPinMessages = [
    "Napačna koda. Poskusi znova.",
    "Maš to! Zadnji dve cifri že poznaš!",
    "Namig: začne se s 4",
    "Namig: potem gre prst dol 😉",
    "Namig: 4 in 3 = današnji datum + 3*3"
]

function formatDate(date) {
    const days = ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota'];
    const months = ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'];

    const dayName = days[date.getDay()];       
    const day = date.getDate();                
    const month = months[date.getMonth()];     

    return `${dayName}, ${day}. ${month}`;
}

function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const formattedMinutes = minutes.toString().padStart(2, '0');
  
    return `${hours}:${formattedMinutes}`;
  }

var now = new Date();
var date = formatDate(now);
var time = formatTime(now);

document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = time;

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        if (enteredPin.length < correctPin.length) {
            enteredPin += key.textContent;
            pinDisplay.textContent = "•".repeat(enteredPin.length);

            if (enteredPin.length === correctPin.length) {
                if (enteredPin === correctPin) {
                    setTimeout(() => {
                        lockScreen.style.display = 'none';
                        homeScreen.style.display = 'block';
                    }, "200");
                    setTimeout(() => {
                        messageNotification.style.display = 'block';
                    }, "1500");
                } else {
                    //alert('Napačna koda. Poskusi znova.');
                    if (incorrectPinCount >= incorrectPinMessages.length) {
                        document.getElementById("lockScreenMessage").textContent = "Napačna koda. Poskusi znova.";
                    }
                    else {
                        document.getElementById("lockScreenMessage").textContent = incorrectPinMessages[incorrectPinCount];
                    }
                    enteredPin = "";
                    pinDisplay.innerHTML = "&nbsp";
                    incorrectPinCount += 1;
                }
            }
        }
    });
});

messageIcon.addEventListener('click', () => {
    homeScreen.style.display = 'none';
    messageScreen.style.display = 'block';
});

messageBackButton.addEventListener('click', () => {
    homeScreen.style.display = 'block';
    messageScreen.style.display = 'none';
});

musicIcon.addEventListener('click', () => {
    window.open("https://open.spotify.com/track/0bfvHnWWOeU1U5XeKyVLbW?si=0944e68017b745b8", '_blank');
});

stravaIcon.addEventListener('click', () => {
    homeScreen.style.display = 'none';
    stravaScreen.style.display = 'block';
});

stravaBackButton.addEventListener('click', () => {
    homeScreen.style.display = 'block';
    stravaScreen.style.display = 'none';
});

bookIcon.addEventListener('click', () => {
    homeScreen.style.display = 'none';
    bookScreen.style.display = 'block';
});

bookBackButton.addEventListener('click', () => {
    homeScreen.style.display = 'block';
    bookScreen.style.display = 'none';
});

noteIcon.addEventListener('click', () => {
    homeScreen.style.display = 'none';
    noteScreen.style.display = 'block';
});

noteBackButton.addEventListener('click', () => {
    homeScreen.style.display = 'block';
    noteScreen.style.display = 'none';
});

igIcon.addEventListener('click', () => {
    homeScreen.style.display = 'none';
    igScreen.style.display = 'block';
});

igBackButton.addEventListener('click', () => {
    homeScreen.style.display = 'block';
    igScreen.style.display = 'none';
});