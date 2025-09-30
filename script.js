var i = 0;
var txt = ['Kodi\'s Retro Shop', 'Retro Shop', 'Kodi\'s Shop'];
var speed = 80;
var isDeleting = false;
var loopIndex = 0;

function typeWriter() {
    var currentTxt = txt[loopIndex];
    var displayTxt = isDeleting ? currentTxt.substring(0, i--) : currentTxt.substring(0, i++);

    document.querySelector('.text').innerHTML = displayTxt;

    if (!isDeleting && i === currentTxt.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && i === 0) {
        isDeleting = false;
        loopIndex = (loopIndex + 1) % txt.length;
    }

    setTimeout(typeWriter, speed);
}

typeWriter();