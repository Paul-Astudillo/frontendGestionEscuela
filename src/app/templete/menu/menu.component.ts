import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  title = 'frontendGestionEscuela';

  toggleDropdown(event: Event) {
    const target = event.target as HTMLElement;
    const parent = target.closest('.dropdown') as HTMLElement;
    parent.classList.toggle('open');
  }

}
