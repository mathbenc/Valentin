const correctPin =  "1" //"123456";
let enteredPin = "";
let incorrectPinCount = 0;

const pinDisplay = document.getElementById('pinDisplay');
const lockScreen = document.getElementById('lockScreen');
const homeScreen = document.getElementById('homeScreen');
const messageScreen = document.getElementById('messageScreen');
const messageIcon = document.getElementById('messageIcon');
const backButton = document.getElementById("backBtn");

const incorrectPinMessages = [
    "Napačna koda. Poskusi znova.",
    "Maš to! Zadnji dve cifri že poznaš!",
    "Namig: začne se s 4",
    "Namig: potem gre prst dol na luknjo 😉",
    "Namig: 4 in 3 = današnji datum + 9"
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

backButton.addEventListener('click', () => {
    homeScreen.style.display = 'block';
    messageScreen.style.display = 'none';
});