 function storeLocation()
{
    let location=document.getElementById("place").value;
    window.localStorage.setItem("place",location);
   
}
function move()
{
    window.location.href="index2.html";
}

