import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchild-decorator';
  @ViewChild(HeaderComponent) header:any
  cdata=""
  test(){

    this.cdata=this.header.passtoParent()
  }
}
