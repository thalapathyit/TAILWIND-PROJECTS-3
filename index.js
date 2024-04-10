var sidebar=document.getElementById("sidebar")
var closenav=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")
menuicon.addEventListener("click",function()
{
  sidebar.style.right=0

})
closenav.addEventListener("click",function()
{
  sidebar.style.right="-50%"
})