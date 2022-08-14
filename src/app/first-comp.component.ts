import { Component } from '@angular/core';


@Component({
  selector: 'first-comp',
  templateUrl: `./first-comp.component.html`,
  styles:[`h2, p {color:red}`]
})
export class firstComp {
  nama = 'tangguh'
  color = 'green'
  active = false
  sayHello = () => {
    console.log(this.nama)
  }
}