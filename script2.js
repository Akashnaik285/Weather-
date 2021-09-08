let loc=window.localStorage.getItem('place');
const url="http://api.weatherapi.com/v1/current.json?key=8da6835d80bb4bf2a51134016202412&q="+loc+"&aqi=no";
let windData;
let conditionData;
let tempData;
function getData()
{
    
    fetch(url).then((response)=>
        {
           
            return response.json();
        }).then((data)=>
        {
            console.log(data);
            conditionData=data.current.condition.text;
            windData=data.current.wind_kph;
            tempData=data.current.temp_c;
            let windCell=document.getElementById("wind");
            let tempCell=document.getElementById("temperature");
            let conditionCell=document.getElementById("condition");
            console.log(conditionData,windData,tempData);

            windCell.innerText=windData+"km/hr";
            tempCell.innerHTML=tempData+"&deg;C";
            conditionCell.innerText=conditionData;
            
            
            //Changing Background Image According to Condition 
            
         
            // if(conditionData=='sunny')
            //     document.body.style.backgroundImage = url('https://source.unsplash.com/1600x900/?sunny');
              
                    
            // else if(conditionData==="Partly couldy")
            //     document.body.style.backgroundImage = url('https://source.unsplash.com/1600x900/?couldy');
                  
                
         let footer=document.getElementById("footer");
         footer.innerText=data.location.name +", "+data.location.region;   
        })
}

getData();
