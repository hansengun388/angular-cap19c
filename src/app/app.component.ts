import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'visitor';
  a = 0;
  b = 0;
  status = 0;
  hasil = 0;
  loopGenap = 0;
  hasilGenap = '';
  hasilGanjil = [];

  ubah(){
    this.status = 1;
  }

}
