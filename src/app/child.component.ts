import { Component } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `
    <h2>ini child</h2>
    
  `,
  styles:[`h2 {color:blue}`]
})
export class child {
  // The code in this class drives the component's behavior.
}