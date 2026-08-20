import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Imprint } from './pages/imprint/imprint';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  { path: '', component: Home, title: 'New City Barber | Nürnberg' },
  { path: 'impressum', component: Imprint, title: 'Impressum | New City Barber' },
  { path: 'datenschutz', component: Privacy, title: 'Datenschutz | New City Barber' },
  { path: '**', redirectTo: '' },
];
