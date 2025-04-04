import './css/style.css'

import { AndCutter } from './js/and-cutter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>And Cutter!</h1>
    <div class="card">
      ${AndCutter.html()}
    </div>
  </div>
  ${AndCutter.css()}
`;

AndCutter.setup();