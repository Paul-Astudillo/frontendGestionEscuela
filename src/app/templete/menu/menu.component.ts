import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  title = 'frontendGestionEscuela';
  
  @Input() userRole: string | null = null;

  toggleDropdown(event: Event) {
    const target = event.target as HTMLElement;
    const parent = target.closest('.dropdown') as HTMLElement;
    parent.classList.toggle('open');
  }

  closeDropdown(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    const parent = target.closest('.dropdown');

    if (parent?.classList.contains('open')) {
      parent.classList.remove('open');
    }
  }

  openSubmenu(event: Event, submenuId: string): void {
    const submenu = document.getElementById(submenuId);
    if (submenu) {
      submenu.style.display = 'block';
    }
  }
}
