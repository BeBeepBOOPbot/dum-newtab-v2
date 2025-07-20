import './style.scss'
import header from './header.png'
import { clock } from './clock.js'
import { config } from './config.js'

document.querySelector('#app').innerHTML = `
  <div>
    <main>
    <div class="info">
        <div class="clock" id="clock"> time is an ilusion </div>

        <div class="greet">
            <p>Hello, ${config.name}</p>
            <p id="greet" >${config.greeting}</p>
        </div>
    </div>

    <img src="${header}" alt="a simple image of a castle far away in a vast field">

    <div class="line"></div> 

    <div class="links">
        <div id="cat1" class="cat">
            <h3 id="li1">media</h3> 
            <div class="line"></div> 
            <ul>
                <li> <a href="${config.cat[0].link[0]}"> ${config.cat[0].name[0]} </a>  </li>
                <li> <a href="${config.cat[0].link[1]}"> ${config.cat[0].name[1]} </a>  </li>
                <li> <a href="${config.cat[0].link[2]}"> ${config.cat[0].name[2]} </a>  </li>
                <li> <a href="${config.cat[0].link[3]}"> ${config.cat[0].name[3]} </a>  </li>
            </ul>
        </div>

        <div id="cat2" class="cat">
            <h3 id="li2">info</h3> 
            <div class="line"></div> 
            <ul>
                <li> <a href="${config.cat[1].link[0]}"> ${config.cat[1].name[0]} </a>  </li>
                <li> <a href="${config.cat[1].link[1]}"> ${config.cat[1].name[1]} </a>  </li>
                <li> <a href="${config.cat[1].link[2]}"> ${config.cat[1].name[2]} </a>  </li>
                <li> <a href="${config.cat[1].link[3]}"> ${config.cat[1].name[3]} </a>  </li>
            </ul>
        </div>

        <div id="cat3" class="cat">
            <h3 id="li3">dev</h3> 
            <div class="line"></div> 
            <ul>
                <li> <a href="${config.cat[2].link[0]}"> ${config.cat[2].name[0]} </a>  </li>
                <li> <a href="${config.cat[2].link[1]}"> ${config.cat[2].name[1]} </a>  </li>
                <li> <a href="${config.cat[2].link[2]}"> ${config.cat[2].name[2]} </a>  </li>
                <li> <a href="${config.cat[2].link[3]}"> ${config.cat[2].name[3]} </a>  </li>
            </ul>
        </div>

        <div id="cat4" class="cat">
            <h3 id="li4">other</h3> 
            <div class="line"></div> 
            <ul>
                <li> <a href="${config.cat[3].link[0]}"> ${config.cat[3].name[0]} </a>  </li>
                <li> <a href="${config.cat[3].link[1]}"> ${config.cat[3].name[1]} </a>  </li>
                <li> <a href="${config.cat[3].link[2]}"> ${config.cat[3].name[2]} </a>  </li>
                <li> <a href="${config.cat[3].link[3]}"> ${config.cat[3].name[3]} </a>  </li>
            </ul>
        </div>
    </div>

    <div class="keys">
        <p> s | search </p>
    </div>

    </main>

  </div>
`

setInterval(clock, 1000);
clock();
