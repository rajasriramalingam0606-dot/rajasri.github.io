// Typing animation text
const text = "Hello, I'm Rajasri — Software Developer...";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typed").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}

typing();