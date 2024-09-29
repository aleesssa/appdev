var nav = document.getElementById("nav")
var nav_header = document.getElementById("nav-header")
var index = document.getElementById("index")
var jobscopes = document.getElementById("jobscopes")
var intro = document.getElementById("title")


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
        closeNav()
    }

})

function closeNav(){
    nav_header.classList.remove("nav-header-focused")
    index.classList.add("index-hidden")
}

function openNav(){
    nav_header.classList.add("nav-header-focused")
    index.classList.remove("index-hidden")
}


