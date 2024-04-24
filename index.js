function getData(){
    const city=search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02358c4223mshca2815df7b505e7p1e4533jsn5df06420a954',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response=>response.json())
    .then(res=>{
        console.log(res);
        temp.innerText=res.temp;
        ws.innerHTML=res.wind_speed;
        hd.innerHTML=res.humidity; 

    })
    .catch(err=>console.error(err));
    
}