import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-three',
  template: `
    <div class="one"><code>
      .one &#123;<br>
      <br>
      <br>
      &nbsp;&nbsp;border: green;<br>
      }
    </code></div>
    <div class="two"><code>
      .two &#123;<br>
      &nbsp;&nbsp;background: green;<br>
      <br>
      <br>
      }
    </code></div>
    <div class="three"><code>
      .three &#123;<br>
      <br>
      <br>
      &nbsp;&nbsp;border: red;<br>
      }
    </code></div>
  `,
  styles: [`
      .one {
          border: 3px solid green;

          margin-bottom: 10px;
          padding: 10px;
      }
      .two {
          background: green;
          
          margin-bottom: 10px;
          padding: 10px;
      }
    .three {
        border: 3px solid red;
        
      margin-bottom: 10px;
      padding: 10px;
    }
    
  `],
  encapsulation: ViewEncapsulation.None,
})
export class ThreeComponent {}
