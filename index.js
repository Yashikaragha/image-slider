const nextEl= document.querySelector(".next")
const prevE1= document.querySelector(".prev")
const imgsE1= document.querySelectorAll("img");
const imagecontainerEl =document.querySelector(".image-container")

let currentImg=1
let timeout ;
nextEl.addEventListener("click",()=>{
   currentImg++;
   clearTimeout(timeout);
   updateImg();
});
prevE1.addEventListener("click",()=>{
   currentImg--;
   clearTimeout(timeout);
   updateImg();
});
updateImg()
function updateImg()
{
  if(currentImg > imgsE1.length)
  {
   currentImg = 1;
} else if(currentImg <1)
{
   currentImg=imgsE1.length;
}
imagecontainerEl.style.transform = `translateX(-${(currentImg - 1 ) * 500}px)`;
 timeout = setTimeout(() => {
  currentImg++
   updateImg()
 }, 3000)
}
