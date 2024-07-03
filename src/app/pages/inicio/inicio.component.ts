import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  constructor() { }

  ngOnInit(): void {
    this.addMouseHoverEffect();
    this.addBlinkingEffect();
    this.addScrollEffect();
  }

  toggleDropdown(event: Event): void {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const parentLi = target.closest('li');
    if (parentLi) {
      parentLi.classList.toggle('open');
    }
  }

  addMouseHoverEffect(): void {
    const features = document.querySelectorAll('.features li');
    features.forEach((feature) => {
      feature.addEventListener('mouseover', () => {
        feature.classList.add('hover');
      });
      feature.addEventListener('mouseout', () => {
        feature.classList.remove('hover');
      });
    });
  }

  addBlinkingEffect(): void {
    const title = document.querySelector('.banner h1');
    if (title) {
      setInterval(() => {
        title.classList.toggle('blinking');
      }, 1000);
    }
  }

  addScrollEffect(): void {
    window.addEventListener('scroll', () => {
      const content = document.querySelector('.content');
      if (content) {
        const contentPosition = content.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (contentPosition < screenPosition) {
          content.classList.add('appear');
        }
      }
    });
  }

}
