function timing()
        {

            
            let hour=document.getElementById("hr")
            let minute=document.getElementById("min");
            let second=document.getElementById("sec");
            let time= new Date();
            hour.innerText=time.getHours()+" : ";
            if(minute<10)
            {
                minute.innerText="0" + time.getMinutes()+" : ";
            }
            else
            {
                minute.innerText=time.getMinutes()+" : ";
            }
            second.innerText=time.getSeconds();
            
        } 
        setInterval(timing, 1000);
    
