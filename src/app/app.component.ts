import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    Button
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Client';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
