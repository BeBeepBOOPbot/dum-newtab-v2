import './style.scss'

document.querySelector('#search-main').innerHTML = `
    <div class="search-box" id="search-box" style="display: none;">
        <form method="GET" class="search" id="search" action="https://duckduckgo.com/">
            <input id="search-bar" type="text" name="q" placeholder="Search...">
            <button type="submit">
                <svg viewBox="0 0 11.90625 11.90625">
                    <path d="M 4.6445357,0 C 2.0923503,0 0,2.0922716 0,4.6443594 0,7.1964472 2.0923503,9.288266 4.6445357,9.288266 c 0.7968407,0 1.5485947,-0.2038692 2.20586,-0.5620881 l 2.788353,2.7900581 c 0.5200383,0.520019 1.3574333,0.520019 1.8774723,0 0.520039,-0.52002 0.520038,-1.357382 0,-1.8774016 L 8.725604,6.8501357 C 9.0834266,6.1927917 9.2872598,5.4409549 9.2872598,4.6443594 9.2872598,2.0922716 7.1967203,0 4.6445357,0 Z m 0,2.1038668 c 1.4153048,0 2.5387775,1.125241 2.5387775,2.5404926 0,1.4152517 -1.1234727,2.5400398 -2.5387775,2.5400398 -1.4153056,0 -2.5405892,-1.1247881 -2.5405892,-2.5400398 0,-1.4152516 1.1252836,-2.5404926 2.5405892,-2.5404926 z">
                    </path>
                </svg>
            </button>
        </form>
    </div>
`


function showHide(tag) {
  var x = document.getElementById(tag);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let x = document.getElementById("search-box");

document.addEventListener("keydown", function(event) {
    if (x.style.display === "none" && event.keyCode == 83) {
        document.getElementById("search").reset();
        showHide("search-box")
        document.getElementById("search-bar").focus();
        event.preventDefault();
        
    } else if (x.style.display === "block" && event.keyCode == 27) {
        showHide("search-box")
    }
});

x.addEventListener("mouseup", (event) => { 
    if (x.style.display === "block" && event.target === event.currentTarget) {
        showHide("search-box")
    }
})

