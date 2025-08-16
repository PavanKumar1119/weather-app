const apikey="f8b773d8b7568833e25721b52768f43f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const cityEle=document.querySelector(".city");
const temp=document.querySelector(".temp");
const weaIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        var data=await response.json();
        cityEle.innerHTML=data.name;
temp.innerHTML=Math.round(data.main.temp)+"°C";
humidity.innerHTML=data.main.humidity+"%";
wind.innerHTML=data.wind.speed+" km/h";
if(data.weather[0].main=="Clouds"){
    weaIcon.src="img/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weaIcon.src="img/clear.png";
}
else if(data.weather[0].main=="Rain"){
    weaIcon.src="img/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weaIcon.src="img/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weaIcon.src="img/mist.png";
}
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";



 }


}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

  