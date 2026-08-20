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
    { number: '01', name: 'Classic Cut', detail: 'Beratung, präziser Schnitt & Styling', duration: 'ca. 30 Min.', price: 'XX €' },
    { number: '02', name: 'Skin Fade', detail: 'Saubere Übergänge, Konturen & Finish', duration: 'ca. 35 Min.', price: 'XX €' },
    { number: '03', name: 'Beard Ritual', detail: 'Form, Konturen & professionelle Pflege', duration: 'ca. 25 Min.', price: 'XX €' },
    { number: '04', name: 'Cut & Beard', detail: 'Das komplette New-City-Paket', duration: 'ca. 55 Min.', price: 'XX €' },
    { number: '05', name: 'Hot Towel Shave', detail: 'Klassische Rasur mit warmem Handtuch', duration: 'ca. 30 Min.', price: 'XX €' },
    { number: '06', name: 'Junior Cut', detail: 'Starker Schnitt für junge Gentlemen', duration: 'ca. 25 Min.', price: 'XX €' },
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
