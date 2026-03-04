const mailboxBtn = document.querySelector('#mailbox');
const letterOverlay = document.getElementById('letterWrapper');
const closeLetterBtn = document.querySelector('.close-letter-btn');
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closemodalBtn = document.querySelector('.close-modal-btn');
const okBtn = document.querySelector('.ok-btn');
const bgMusic = document.getElementById('bgMusic');
const musicControl = document.getElementById('musicControl');
const musicIcon = document.getElementById('musicIcon');


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
createFlowers();
setInterval(createFlowers,8000);

// Mở ô thoại
openBtn.onclick = () => {
modal.classList.add('active');
};

// Đóng khi click vào nút X hoặc nút OK
const closeModal = () => {
modal.classList.remove('active');
};

closemodalBtn.onclick = closeModal;
okBtn.onclick = closeModal;

// Đóng khi click vào vùng nền mờ bên ngoài
window.onclick = (event) => {
if (event.target === modal) {
closeModal();
}
};
// Mở lá thư khi click vào mailbox
mailboxBtn.addEventListener('click', () => {
    const userChoice = confirm("Bạn có một lá thư mới! Bạn có muốn mở nó ngay bây giờ không?"); 
    if (userChoice) {
        letterOverlay.classList.add('active');
    }
});

// Đóng lá thư
closeLetterBtn.onclick = () => {
letterOverlay.classList.remove('active');
};

// Đóng khi click ra ngoài vùng lá thư
window.onclick = (event) => {
if (event.target == letterOverlay) {
    letterOverlay.classList.remove('active');
}
};

