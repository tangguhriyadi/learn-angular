import { Component } from '@angular/core';


@Component({
  selector: 'zaku-comp',
  templateUrl: `./zaku.component.html`,
  styles:[`h2, p {color:aqua}`]
})
export class zaku {
  isShow = false
  ubah(){
    this.isShow = !this.isShow
  }
}