let validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
let displayText = {
    Q: "Who Am I part 1",
    W: "Who Am I part 2",
    E: "Who Am I part 3",
    A: "Waking up part 1",
    S: "Waking up part 2",
    D: "Waking up part 3",
    Z: "The Dream part 1",
    X: "The Dream part 2",
    C: "The Dream part 3"
};
let lastKey = "Q";

// Play function
function play(str) {
    // Get audio element
    let audio = document.getElementById(str);
    // Restart audio
    if (str === lastKey) {
        audio.currentTime = 0;
    }
    // Play the audio
    audio.play();
    // Set last key
    lastKey = str;
}

// Pause function
function pause(str) {
    // Get audio element
    let audio = document.getElementById(str);
    // Pause the audio
    audio.pause();
}

// Display text
function display(str) {
    // Get display element
    let text = document.getElementById("display");
    // Change the text
    text.innerHTML = displayText[str];
}

// Pause and play audio, Display text
function start(str) {
    display(str);
    pause(lastKey);
    play(str);
}

// Key Pressed
window.document.onkeyup = function(event) {
    // Get the key pressed and turn to uppercase
    let key = event.key.toUpperCase();
    // Pause the last audio and play new
    if (validKeys.includes(key)) {
        start(key)
    }
}