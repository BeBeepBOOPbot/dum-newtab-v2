(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const m="/dum-newtab-v2/assets/header-TVSf08F-.png";function d(l){let c=new Date,a=c.getHours(),s=c.getMinutes(),t="AM";a>=12?(a>12&&(a-=12),t="PM"):a==0&&(hr=12,t="AM"),a=a<10?"0"+a:a,s=s<10?"0"+s:s;let i=a+":"+s+" "+t;document.getElementById("clock").innerText=i,setTimeout(function(){d()},1e3)}const e={name:"Human",greeting:"i feel like a zombie",cat:[{title:"media",name:["Youtube","Pintrest","Dribbble","Github"],link:["https://www.youtube.com/","https://www.pinterest.com/","https://dribbble.com/","https://github.com/"]},{title:"info",name:["Anime","ChatGPT","W3schools","Arch Linux"],link:["https://www.anime-planet.com/","https://chatgpt.com/","https://www.w3schools.com/html/default.asp","https://archlinux.org/"]},{title:"media",name:["Google Fonts","Ascii Arts","Color Picker","Nerd Fonts"],link:["https://fonts.google.com/","https://patorjk.com/software/taag/#p=display&amp;c=bash&amp;f=Small%20Slant","https://coolors.co/ffbbf1","https://www.nerdfonts.com/cheat-sheet"]},{title:"media",name:["Amazon","FBmarket","NeoCities","Messages"],link:["https://www.amazon.com/","https://www.facebook.com/marketplace/","https://neocities.org/","https://messages.google.com/web/conversations"]}]};document.querySelector("#app").innerHTML=`
  <div>
    <main>
    <div class="info">
        <div class="clock" id="clock"> time is an ilusion </div>

        <div class="greet">
            <p>Hello, ${e.name}</p>
            <p id="greet" >${e.greeting}</p>
        </div>
    </div>

    <img src="${m}" alt="a simple image of a castle far away in a vast field">

    <div class="line"></div> 

    <div class="links">
        <div id="cat1" class="cat">
            <h3 id="li1">media</h3> 
            <div class="line"></div> 
            <ul>
                <li> <a href="${e.cat[0].link[0]}"> ${e.cat[0].name[0]} </a>  </li>
                <li> <a href="${e.cat[0].link[1]}"> ${e.cat[0].name[1]} </a>  </li>
                <li> <a href="${e.cat[0].link[2]}"> ${e.cat[0].name[2]} </a>  </li>
                <li> <a href="${e.cat[0].link[3]}"> ${e.cat[0].name[3]} </a>  </li>
            </ul>
        </div>

        <div id="cat2" class="cat">
            <h3 id="li2">info</h3> 
            <div class="line"></div> 
            <ul>
                <li> <a href="${e.cat[1].link[0]}"> ${e.cat[1].name[0]} </a>  </li>
                <li> <a href="${e.cat[1].link[1]}"> ${e.cat[1].name[1]} </a>  </li>
                <li> <a href="${e.cat[1].link[2]}"> ${e.cat[1].name[2]} </a>  </li>
                <li> <a href="${e.cat[1].link[3]}"> ${e.cat[1].name[3]} </a>  </li>
            </ul>
        </div>

        <div id="cat3" class="cat">
            <h3 id="li3">dev</h3> 
            <div class="line"></div> 
            <ul>
                <li> <a href="${e.cat[2].link[0]}"> ${e.cat[2].name[0]} </a>  </li>
                <li> <a href="${e.cat[2].link[1]}"> ${e.cat[2].name[1]} </a>  </li>
                <li> <a href="${e.cat[2].link[2]}"> ${e.cat[2].name[2]} </a>  </li>
                <li> <a href="${e.cat[2].link[3]}"> ${e.cat[2].name[3]} </a>  </li>
            </ul>
        </div>

        <div id="cat4" class="cat">
            <h3 id="li4">other</h3> 
            <div class="line"></div> 
            <ul>
                <li> <a href="${e.cat[3].link[0]}"> ${e.cat[3].name[0]} </a>  </li>
                <li> <a href="${e.cat[3].link[1]}"> ${e.cat[3].name[1]} </a>  </li>
                <li> <a href="${e.cat[3].link[2]}"> ${e.cat[3].name[2]} </a>  </li>
                <li> <a href="${e.cat[3].link[3]}"> ${e.cat[3].name[3]} </a>  </li>
            </ul>
        </div>
    </div>

    <div class="keys">
        <p> s | search </p>
    </div>

    </main>

  </div>
`;setInterval(d,1e3);d();document.querySelector("#search-main").innerHTML=`
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
`;function r(l){var c=document.getElementById(l);c.style.display==="none"?c.style.display="block":c.style.display="none"}let n=document.getElementById("search-box");document.addEventListener("keydown",function(l){n.style.display==="none"&&l.keyCode==83?(document.getElementById("search").reset(),r("search-box"),document.getElementById("search-bar").focus(),l.preventDefault()):n.style.display==="block"&&l.keyCode==27&&r("search-box")});n.addEventListener("mouseup",l=>{n.style.display==="block"&&l.target===l.currentTarget&&r("search-box")});
