const dishContainers = [...document.querySelectorAll('.dish-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]
dishContainers.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
})