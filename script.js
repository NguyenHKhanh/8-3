const heart = document.getElementById("heart")
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

heart.onclick = () => {

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

setInterval(meteor,2500)