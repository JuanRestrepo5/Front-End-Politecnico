import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-home-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  
})
export class HomeLayoutComponent {
  isCartas: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isCartas = this.router.url.includes('/cartas');
    });
  }

}

