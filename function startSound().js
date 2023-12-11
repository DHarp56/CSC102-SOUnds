function startSound()
{
mySound = new sound("us-lab-background-1.mp3");
mySound.play();
}

class sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.play = function () {
            this.sound.play();
        };
    }
}

function stopSound()
{
    window.location.reload();
}