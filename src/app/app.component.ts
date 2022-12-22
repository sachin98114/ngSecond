import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularsecond';
  s={
    name:"sachin",
    age:21,
  }

  getval(){
    alert("Hello wold");
  }
}
