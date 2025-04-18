let words = document.querySelectorAll(".word");

words.forEach((word)=>{
    let letters =  word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
         word.append(span);
    });
});

 const hireBtn = document.getElementById('hireBtn');

    hireBtn.addEventListener('click', function() {
      const phoneNumber = '9599841192';
      const message = 'Hi%2C%20I%20would%20like%20to%20hire%20you%20for%20a%20project%20🙂';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    });

let currWordIdx = 0;
let maxWordIdx = words.length-1;

words[currWordIdx].style.opacity = '1';

let changeText = ()=>{
    let currWord = words[currWordIdx];
    let nextWord = currWordIdx === maxWordIdx ? words[0] : words[currWordIdx + 1];

    Array.from(currWord.children).forEach((letter, i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i*80);
    });
    nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        }, 340 + i*80)
      });
      currWordIdx = currWordIdx === maxWordIdx ? 0 : currWordIdx +1;
}

changeText();
setInterval(changeText, 2000);

// circle skill --------------------------//

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
 let dots = elem.getAttribute("data-dots");
 let marked = elem.getAttribute("data-percent");
 let percent = Math.floor(dots*marked/100);
 let points = ""; 
 let rotate = 360/dots; 

 for(let i=0; i<dots; i++){
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
 }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for(let i=0; i<percent; i++){ 
        pointsMarked[i].classList.add('marked');
    }
} );


let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activemenu() {
    let length = section.length;
    while (--length && window.scrollY + 97 < section[length].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[length].classList.add("active");
}


activemenu();

window.addEventListener("scroll", activemenu);

// sticky navbar ------------------------------

const header = document.querySelector("header");
    window.addEventListener("scroll", ()=>{
        header.classList.toggle("sticky", window.scrollY > 50);
    });


    //toggle icon navbar ----------------------------

    let menuIcon = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");

 menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
 };
    
    
 window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.remove("open");
 }

 const observer =   new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
         }

    });
 });

 const scrollScale = document.querySelectorAll(".scroll-scale");
 scrollScale.forEach((el)=> observer.observe(el));

 
 const scrollBotton = document.querySelectorAll(".scroll-bottom");
 scrollBotton.forEach((el)=> observer.observe(el));

 
 const scrollTop = document.querySelectorAll(".scroll-top");
 scrollTop.forEach((el)=> observer.observe(el));
