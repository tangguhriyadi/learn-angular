import { Component } from '@angular/core';


@Component({
  selector: 'first-comp',
  templateUrl: `./first-comp.component.html`,
  styles:[`h2, p {color:red}`]
})
export class firstComp {
  nama = 'tangguh'
  color = 'green'
  isActive = false
  sayHello(e) {
    console.log(`halo ${e}`)
  }
}