let ftrIcons = document.querySelectorAll(".ftr-icons")

ftrIcons.forEach((icons)=>{
    icons.addEventListener("mouseover",function(){
        if (this===ftrIcons[0]){
          ftrIcons[0].setAttribute("src","images/facebook-white.svg")
        }else if (this===ftrIcons[1]){
            ftrIcons[1].setAttribute("src","images/instagram-white.svg")
        }else if (this===ftrIcons[2]){
            ftrIcons[2].setAttribute("src","images/pinterest-white.svg")
        }else if (this===ftrIcons[3]){
            ftrIcons[3].setAttribute("src","images/twitter-white.svg")
        }
    })

    icons.addEventListener("mouseleave",function(){
        if (this===ftrIcons[0]){
            ftrIcons[0].setAttribute("src","images/icon-facebook.svg")
          }else if (this===ftrIcons[1]){
              ftrIcons[1].setAttribute("src","images/icon-instagram.svg")
          }else if (this===ftrIcons[2]){
              ftrIcons[2].setAttribute("src","images/icon-pinterest.svg")
          }else if (this===ftrIcons[3]){
              ftrIcons[3].setAttribute("src","images/icon-twitter.svg")
          }
    })
})



document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector("#nav").classList.toggle("nav-sub")
    document.querySelector("#nav").classList.toggle("nav")
})