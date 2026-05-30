const message =
"Happy Birthday to my amazing bestie! 🎉❤️ " +
"Thank you for all the wonderful memories, laughs, and support. " +
"May your life be filled with happiness, success, and endless smiles! ✨🎂";

let i = 0;

function typeWriter() {
    if(i < message.length){
        document.getElementById("message").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();

function showSurprise(){
    document.getElementById("surprise").innerHTML =
    "To My Wonderful person ❤️, Very Happy Birthday! 🎂✨ " +
"Thank you for every smile, every laugh, every memory, and every moment you've shared with me. " +
"You are one of the most precious people in my life. " +
"You mean a lot to me in this little life of mine 🎁🌸 " +
"Only one incident made us build a very strong nd good bonding in our lives"
"I never imagined i would meet a very gud and humble person like you in my life as a very precious💖"
"You mean a lot to me darling🎂🥳✨";
}

function createHeart(){
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

setInterval(createHeart,300);
