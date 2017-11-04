import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-one',
  template: `
    <div class="one"><code>
      .one &#123;<br>
      &nbsp;&nbsp;background: purple;<br>
      &nbsp;&nbsp;color: white;<br>
      &nbsp;&nbsp;border: red;<br>
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
      <br>
      }
    </code></div>
  `,
  styles: [`
    .one {
        background: purple;
        color: white;
        border: 3px solid red;
        margin-bottom: 10px;
        padding: 10px;
    }
    .two {
        margin-bottom: 10px;
        padding: 10px;
    }
    .three {
        margin-bottom: 10px;
        padding: 10px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class OneComponent {}
