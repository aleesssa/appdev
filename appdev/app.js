var nav = document.getElementById("nav")
var nav_header = document.getElementById("nav-header")
var index = document.getElementById("index")
var jobscopes = document.getElementById("jobscopes")
var intro = document.getElementById("title")
var x = window.matchMedia("(max-width: 1200px)")

nav_header.addEventListener("click", ()=>{
    
    
    if(nav_header.classList.contains("nav-header-focused")){
        closeNav()
    }else{
        openNav()
    }
})

window.addEventListener('scroll', ()=>{
    introPosition = intro.offsetTop + 100
    if(window.scrollY >= introPosition){
        navFixed()
        closeNav()
    }

    if(window.scrollY < introPosition){
        openNav()
        navAbsolute()
    }
})

x.addEventListener("change", ()=>{
    if (x.matches) { // If media query matches
        closeNav()
      } 
})

function navFixed(){
    nav.classList.remove("nav-absolute")
    nav.classList.add("nav-fixed")
}

function navAbsolute(){
    nav.classList.remove("nav-fixed")
    nav.classList.add("nav-absolute")
}

function closeNav(){
    nav_header.classList.remove("nav-header-focused")
    index.classList.add("index-hidden")
}

function openNav(){
    nav_header.classList.add("nav-header-focused")
    index.classList.remove("index-hidden")
}



