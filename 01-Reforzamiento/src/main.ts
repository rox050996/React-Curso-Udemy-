import './style.css'

import './bases/01-const-let'
import './bases/02-template-string'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="hero">
   <h1>Hola Mundo</h1>
  </div>
`

