document.querySelectorAll('.block-arrow').forEach((arrow)=>{
    arrow.addEventListener('click', ()=>{
        document.querySelectorAll('.slide').forEach((slide)=>{
            slide.classList.toggle('active');
        })
        document.querySelector('.slider').classList.toggle('active');
    })
})
document.querySelector('.buttom-1').addEventListener('click', ()=>{
    document.querySelector('.ver-phone-off').classList.toggle('phone-on');
})
document.querySelector('.buttom-2').addEventListener('click', ()=>{
    document.querySelector('.hor-phone-off').classList.toggle('phone-on');
})

let imgs = document.querySelectorAll('.gallery img');
imgs.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(item.classList.contains('active')){ item.classList.remove('active'); return;}
        imgs.forEach((img)=>{
            if(img.classList.contains('active')) img.classList.remove('active')
        })
        item.classList.add('active')
    })
})

let a = document.querySelectorAll('header a');
a.forEach((item)=>{
    item.addEventListener('click', ()=>{
    })
})
let modal = document.querySelector('.modal')

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    modal.classList.add('active')
    let subj = document.querySelector('input.subj').value;
    subj = (!subj) ? 'Without subject' : `Subject: ${subj}`
    document.querySelector('p.subj').innerHTML = subj;
    let proj = document.querySelector('textarea.proj').value;
    proj = (!proj) ? 'Without description  ' : `Description  : ${proj}`
    document.querySelector('p.proj').innerHTML = proj;
    document.querySelectorAll('.quote input, .quote textarea').forEach(input => {
        input.value=''
    });
})

document.querySelectorAll('.modal input').forEach((item)=>{
    item.addEventListener('click', ()=>{
        modal.classList.remove('active')
    })
})

let images = [
    "assets/Project1.png",
    "assets/Project2.png",
    "assets/Project3.png",
    "assets/Project4.png",
    "assets/Project5.png",
    "assets/Project6.png",
    "assets/Project7.png",
    "assets/Project8.png",
    "assets/Project9.png",
    "assets/Project10.png",
    "assets/Project11.png",
    "assets/Project12.png",
];

document.querySelectorAll('.portfolio li').forEach((item)=>{
    item.addEventListener('click', function(){
        if(!this.classList.contains('active')){
            document.querySelectorAll('.portfolio li').forEach((ii)=>{
                ii.classList.remove('active');
            })
            this.classList.add('active');
            images = images.reverse();
            document.querySelectorAll('.gallery img').forEach((img, i)=>{
                img.src = images[i];
                img.classList.remove('active')
            })            
        }
    })
})

document.addEventListener("scroll", function () {
    const Elements = document.querySelectorAll(".section"),
        links = document.querySelectorAll("header a");
    document.querySelectorAll("header a").forEach((el) => el.classList.remove("active"));
    for(let el of Elements) {
        if(el.offsetTop >= window.pageYOffset && (el.offsetTop + el.offsetHeight) > window.pageYOffset) {
            links.forEach((link) => {
                if(el.getAttribute("id") === link.getAttribute("href").substring(1)){
                console.log("sdf")
                    link.classList.add("active");}
            });
            break;
        }
    }
})

let turn = 100;
function menuIsActive(){
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('header img').style = `transform: rotate(${turn}grad)`
    document.querySelector('h1').classList.toggle('h1InMenu');
    turn += 100;
}
document.querySelector('header img').addEventListener('click', function(){
    menuIsActive()
})
document.querySelectorAll('.nav2 li').forEach((el)=>{
    el.addEventListener('click', function(){
        menuIsActive()
    })
})