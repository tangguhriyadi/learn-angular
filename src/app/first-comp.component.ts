import { Component } from '@angular/core';
import { Logger } from './logger.service';

@Component({
  selector: 'first-comp',
  templateUrl: `./first-comp.component.html`,
  styles:[`h2, p {color:red}`]
})
export class firstComp {
  nama = 'tangguh'
  color = 'green'
  isActive = false
  count = 0

  constructor(private logger: Logger){

  }

  sayHello(e) {
    console.log(`halo ${e}`)
  }
  increment(){
    this.logger.writeCount(this.count)
    this.count++
  }
}