const mailboxBtn = document.querySelector('#mailbox');
const letterOverlay = document.getElementById('letterWrapper');
const closeLetterBtn = document.querySelector('.close-letter-btn');
const okBtn = document.querySelector('.ok-btn');
const bgMusic = document.getElementById('bgMusic');
const musicControl = document.getElementById('musicControl');
const musicIcon = document.getElementById('musicIcon');

//Login Pin
const correctPin = "0803"; // đổi PIN tại đây
let enteredPin = "";

const pinDisplay = document.getElementById("pinDisplay");
const pinButtons = document.querySelectorAll(".pin-btn");
const loginScreen = document.getElementById("loginScreen");
const mainContent = document.getElementById("mainContent");
const loginBox = document.querySelector(".login-box");
const errorMsg = document.getElementById("errorMsg");

pinButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      enteredPin = "";
    } 
    else if (value === "⌫") {
      enteredPin = enteredPin.slice(0, -1);
    } 
    else {
      if (enteredPin.length < 4) {
        enteredPin += value;
      }
    }

    updateDisplay();

    if (enteredPin.length === 4) {
      checkPin();
    }
  });
});

function updateDisplay() {
  pinDisplay.textContent = enteredPin.padEnd(4, "•");
}

function checkPin() {
  if (enteredPin === correctPin) {

    // 1. Login box biến mất
    loginBox.classList.add("hide");

    // 2. Sau 600ms cửa mở
    setTimeout(() => {
      loginScreen.classList.add("open");
    }, 400);

    // 3. Sau khi cửa mở xong hiện web
    setTimeout(() => {
      loginScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 1500);

  } else {
    errorMsg.textContent = "Quên mất rùi à 💔";
    enteredPin = "";
    updateDisplay();
  }
}
//Music
function playMusic() {
bgMusic.play().then(() => {
musicIcon.innerText = '🔊';
}).catch(error => {
console.log("Trình duyệt chặn tự động phát. Chờ tương tác người dùng...");
});
}
window.addEventListener('load', playMusic);
document.addEventListener('click', () => {
if (bgMusic.paused) {
playMusic();
}
}, { once: true }); 
musicControl.addEventListener('click', (e) => {
e.stopPropagation(); 
if (bgMusic.paused) {
bgMusic.play();
musicIcon.innerText = '🔊';
} else {
bgMusic.pause();
musicIcon.innerText = '🔇';
}
});

// Hoa rơi //
function createFlowers(){
    for(let i=0;i<30;i++){
    let flower=document.createElement("div");
    flower.className="flower";
    flower.innerHTML="🌸";
    flower.style.left=Math.random()*95+"%";
    flower.style.animationDuration=(Math.random()*5+5)+"s";
    flower.style.fontSize=(Math.random()*20+15)+"px";
    document.body.appendChild(flower);

    setTimeout(()=>{flower.remove();},10000);
    }
}

function startFlowers(){
    createFlowers();
    flowerInterval = setInterval(createFlowers,8000);
}

/* DỪNG HOA RƠI */
function stopFlowers(){
    clearInterval(flowerInterval);
}
startFlowers();
//Thư//
const fullText = `Dear My Love,
Out of all the places I've been, you're the only one I want to stop for.
Happy Women's Day, My Love! 🌷🌷🌷`;

let i = 0;
const speed = 50;
let typingTimeout;

// Mở lá thư khi click vào mailbox
mailboxBtn.addEventListener('click', () => {
    const userChoice = confirm("Bạn có một lá thư mới! Bạn có muốn mở nó ngay bây giờ không?");   
    if (userChoice) {
        letterOverlay.classList.add('active');
        // RESET
        i = 0;
        document.getElementById("typed-text").innerHTML = "";
        clearTimeout(typingTimeout);

        setTimeout(typeWriter, 800);
    }
});

function typeWriter() {
    const element = document.getElementById("typed-text");

    if (i < fullText.length) {
        if (fullText.charAt(i) === '\n') {
            element.innerHTML += '<br>';
        } else {
            element.innerHTML += fullText.charAt(i);
        }

        i++;
        typingTimeout = setTimeout(typeWriter, speed);
    }
}

// Đóng lá thư
closeLetterBtn.onclick = () => {
    letterOverlay.classList.remove('active');
};

// Đóng khi click ra ngoài vùng lá thư
window.onclick = (event) => {
    if (event.target === letterOverlay) {
        letterOverlay.classList.remove('active');
    }
};

//Gallery//
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const images = document.querySelectorAll(".photo-track img");
const closeBtn = document.querySelector(".close-popup");

images.forEach(img=>{
  img.addEventListener("click",()=>{
    popup.style.display="flex";
    popupImg.src = img.src;
  });
});

closeBtn.onclick = ()=>{
  popup.style.display="none";
}

popup.onclick = (e)=>{
  if(e.target === popup){
    popup.style.display="none";
  }
}

const openGalleryBtn = document.getElementById("openGalleryBtn");
const gallery = document.getElementById("galleryOverlay");
const closegalleryBtn = document.getElementById("closeGallery");

openGalleryBtn.onclick = () => {

  const userChoice = confirm("💗 Xem lại kỉ niệm của chúng mình nhé!💗");

  if(userChoice){
    createHearts();
    stopFlowers();
    setTimeout(() => {
      gallery.style.display = "flex";
    }, 600);
    
  }

}

closegalleryBtn.onclick = () => {
    startFlowers();
    bgMusic.play();
    gallery.style.display = "none";
}
const heartContainer = document.getElementById("heartContainer");

function createHearts(){

  for(let i=0;i<50;i++){

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random()*100 + "%";
    heart.style.fontSize = (20 + Math.random()*30) + "px";
    heart.style.animationDuration = (3 + Math.random()*2) + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },5000);

  }
}

//trai tim//

const heartbox = document.getElementById("heartbox")
const music = document.getElementById("music")
const textArea = document.getElementById("textArea")
const progressBar = document.getElementById("progressBar")

const texts = [

"Anh nhớ em ❤️",
"Em là điều tuyệt vời nhất",
"Anh luôn ở bên em",
"Love you forever 💖",
"Em là cả bầu trời của anh",
"Anh chỉ cần em thôi",
"Ở bên em là hạnh phúc"

]

heartbox.onclick = () => {

music.play()

let text=document.createElement("div")

text.className="loveText"

text.innerText=texts[Math.floor(Math.random()*texts.length)]

text.style.left=Math.random()*80+10+"%"

text.style.setProperty("--time",(Math.random()*3+4)+"s")

textArea.appendChild(text)

setTimeout(()=>{

text.remove()

},7000)

}

/* PLAYER PROGRESS */

music.addEventListener("timeupdate",()=>{

let percent=(music.currentTime/music.duration)*100

progressBar.style.width=percent+"%"

})

/* STARS */

function openStars(){

for(let i=0;i<100;i++){

let star=document.createElement("div")
star.className="star"

let size=Math.random()*3

star.style.width=size+"px"
star.style.height=size+"px"

star.style.left=Math.random()*100+"%"
star.style.top=Math.random()*100+"%"

star.style.setProperty("--duration",(Math.random()*3+2)+"s")

document.body.appendChild(star)

}

}

function closeStars(){

document.querySelectorAll(".star").forEach(star=>{
star.remove()
})

}

/* METEOR */

function meteor(){

let m=document.createElement("div")

m.className="meteor"

m.style.left=Math.random()*window.innerWidth+"px"

m.style.top="-200px"

document.body.appendChild(m)

setTimeout(()=>{

m.remove()

},1500)

}

function startMeteor(){
    createFlowers();
    meteorInterval = setInterval(meteor,2500);
}

function stopMeteor(){
    clearInterval(meteorInterval);
}


const openLove = document.getElementById("openLove")
const loveBox = document.getElementById("loveBox")
const closeLove = document.getElementById("closeLove")

openLove.onclick = () => {
    bgMusic.pause();
    stopFlowers();
    music.currentTime=0;
    loveBox.style.display = "flex";
    startMeteor();
    openStars();
}   

closeLove.onclick = () => {
    loveBox.style.display = "none";
    music.pause();   
    startFlowers();
    bgMusic.play();
    stopMeteor();
    closeStars();
}