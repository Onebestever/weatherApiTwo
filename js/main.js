//The user will enter a date. Use that date to get theweather of their location 

//
document.querySelector('button').addEventListener('click', checkWeather)


 function checkWeather(){
  let city = document.getElementById('city').value//input
  let state = document.getElementById('state').value//input
  let country = document.getElementById('country').value//input
  
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=399239f8b7aba56e5a6ed4831f09b2d7&units=imperial` 
 
   console.log(city + state +country)
   console.log(url)
 fetch(url) 
     .then(res => res.json()) // parse response as JSON 
     .then(data => { 
      console.log(data) 
      let header= document.querySelector('h2')
      let descriptionResults=document.querySelector('h3')
       header.innerText = `${data.name}'s weather`
       descriptionResults.innerText = `${data.main.temp} fahrenheit`
 
     }) 
     .catch(err => { 
         console.log(`error ${err}`) 
     }); 

 }

