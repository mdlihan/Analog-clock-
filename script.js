let second_hand = document.querySelector('.second-hand');
let min_hand = document.querySelector('.min-hand');
let hour_hand = document.querySelector('.hour-hand');
let digital = document.querySelector('.digital');


let date = new Date();
let min = date.getMinutes();
let hour = date.getHours();
let second = date.getSeconds();
let day = date.getDate(); 
let month = date.getMonth()+1;
let year = date.getFullYear();


digital.innerHTML=`${day}/${month}/${year}`;

      hDeg = hour * 30 + min * (360/720),
      mDeg = min * 6 + second * (360/3600),
      sDeg = second * 6,
      
second_hand.style.transform = `rotate(${sDeg}deg)`

min_hand.style.transform = `rotate(${mDeg}deg)`

hour_hand.style.transform = `rotate(${hDeg}deg)`

setInterval(()=>{
let date = new Date();
let min = date.getMinutes();
let hour = date.getHours();
let second = date.getSeconds();

      hDeg = hour * 30 + min * (360/720),
      mDeg = min * 6 + second * (360/3600),
      sDeg = second * 6,
      
second_hand.style.transform = `rotate(${sDeg}deg)`

min_hand.style.transform = `rotate(${mDeg}deg)`

hour_hand.style.transform = `rotate(${hDeg}deg)`
},1000)