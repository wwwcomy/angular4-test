import { Component } from '@angular/core';
@Component({
  selector: 'demo-comp',
  template:`
    <h1>{{title}}</h1>
  `
})
export class DemoComponent {
  title = 'Hello Demo!';
}