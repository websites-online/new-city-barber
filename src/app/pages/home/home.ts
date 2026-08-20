import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly whatsappUrl =
    'https://wa.me/491639692733?text=Hallo%20New%20City%20Barber%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen.';

  readonly services = [
    { number: '01', name: 'Haarschnitt', detail: 'Präziser Schnitt mit sauberem Finish', price: '15 €' },
    { number: '02', name: 'Haarschnitt nur Schere', detail: 'Komplett mit der Schere geschnitten', price: '18 €' },
    { number: '03', name: 'Kinderschnitt', detail: 'Für Kinder bis einschließlich 10 Jahre', price: '12 €' },
    { number: '04', name: 'Bart', detail: 'Bart kürzen und Konturen pflegen', price: '10 €' },
    { number: '05', name: 'Augenbrauen zupfen', detail: 'Saubere Form und gepflegte Konturen', price: '6 €' },
    { number: '06', name: 'Gesicht mit Heißwachs', detail: 'Entfernung feiner Gesichtshaare', price: '8 €' },
    { number: '07', name: 'Gesichtsmaske', detail: 'Pflegende Maske für das Gesicht', price: '5 €' },
    { number: '08', name: 'Haare & Bart schwarz färben', detail: 'Schwarze Farbe für Haare und Bart', price: '20 €' },
    { number: '09', name: 'Waschen', detail: 'Gründliche Haarwäsche', price: '3 €' },
    { number: '10', name: 'Komplettpaket', detail: 'Das komplette New-City-Paket', price: '35 €' },
  ];

  readonly reviews = [
    { initials: 'MK', name: 'Marius Ke', age: 'vor 2 Monaten', text: 'Toller Laden. Für Bart und Haare wird hier bestens gesorgt – alles nach Wunsch. Bin sehr zufrieden. Toller Preis!' },
    { initials: 'NN', name: 'Nid7 Nid7', age: 'vor einem Monat', text: 'Ich bin absolut begeistert! Genau die Frisur bekommen, die ich wollte. Super Arbeit und ein starkes Ergebnis.' },
    { initials: 'MB', name: 'Max Brand', age: 'vor 4 Wochen', text: 'Schicker und sehr moderner Laden. Sieht sehr gut aus – klare Empfehlung!' },
  ];

  constructor(private readonly element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) {
      this.element.nativeElement.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    this.element.nativeElement.querySelectorAll('.reveal').forEach((item) => this.observer?.observe(item));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
