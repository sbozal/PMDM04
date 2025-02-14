import { Component } from '@angular/core';

import { register } from 'swiper/element/bundle'; // Import swiper

register(); // Función de swiper

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
