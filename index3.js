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
// Function
  var search=document.getElementById("search")
  var container=document.getElementById("container")
  var  productlist=container.querySelectorAll("div")

  search.addEventListener("keyup",function()
{
  var entervalue=event.target.value.toUpperCase()

  for(count=0; count<productlist.length; count=count+1)
  {
    var productname=productlist[count].querySelector("h1").textContent
    if(productname.toUpperCase().indexOf(entervalue) <0)
    {
      productlist[count].style.display='none'
    }

    else
    {
      productlist[count].style.display='block'
    }
  }

})