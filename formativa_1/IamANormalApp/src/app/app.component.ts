import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Testing_grid', url: 'normal', icon: 'heart' },
    { title: 'Favs?', url: '/folder/favorites', icon: 'heart' },
  ];
  public labels = ['I', 'am', 'bored'];
  constructor() {}
}
