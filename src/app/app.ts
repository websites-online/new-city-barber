import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly currentYear = new Date().getFullYear();
  readonly whatsappUrl =
    'https://wa.me/491639692733?text=Hallo%20New%20City%20Barber%2C%20ich%20habe%20eine%20Frage.';

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 28);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
