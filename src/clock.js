export function clock(element) {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let am_pm = "AM";

  if (hh >= 12) {
    if (hh > 12) hh -= 12;
    am_pm = "PM";
} else if (hh == 0) {
    hr = 12;
    am_pm = "AM";
}

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
    
   let time = hh + ":" + mm + " " + am_pm;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ clock() }, 1000); 
}

