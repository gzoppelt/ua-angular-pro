import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-four',
  template: `
    <div class="one"><code>
      .one &#123;<br>
      <br>
      <br>
      <br>
      }
    </code></div>
    <div class="two"><code>
      .two &#123;<br>
      <br>
      <br>
      <br>
      }
    </code></div>
    <div class="three"><code>
      .three &#123;<br>
      <br>
      <br>
      &nbsp;&nbsp;border: blue;<br>
      }
    </code></div>
  `,
  styles: [`
      .one {

          margin-bottom: 10px;
          padding: 10px;
      }
      .two {
          
          margin-bottom: 10px;
          padding: 10px;
      }
    .three {
        border: 3px solid blue;
        
      margin-bottom: 10px;
      padding: 10px;
    }
    
  `],
  encapsulation: ViewEncapsulation.None,
})
export class FourComponent {}
