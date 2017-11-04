import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-two',
  template: `
    <div class="one"><code>
      .one &#123;<br>
      &nbsp;&nbsp;background: blue;<br>
      &nbsp;&nbsp;color: red;<br>
      &nbsp;&nbsp;border: red;<br>
      }
    </code></div>
    <div class="two"><code>
      .two &#123;<br>
      &nbsp;&nbsp;background: blue;<br>
      &nbsp;&nbsp;color: white;<br>
      &nbsp;&nbsp;border: red;<br>
      }
    </code></div>
    <div class="three"><code>
      .three &#123;<br>
      <br>
      &nbsp;&nbsp;color: red;<br>
      <br>
      }
    </code></div>
  `,
  styles: [`
    .one {
      background: blue;
      color: red;
      border: 3px solid red;

      margin-bottom: 10px;
      padding: 10px;
    }
    .two {
      background: blue;
      color: white;
      border: 3px solid red;
      margin-bottom: 10px;
      padding: 10px;
    }
    .three {
      color: red;
      margin-bottom: 10px;
      padding: 10px;
    }

  `],
  encapsulation: ViewEncapsulation.Native
})
export class TwoComponent {}
