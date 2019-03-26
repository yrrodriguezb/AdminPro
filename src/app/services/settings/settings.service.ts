import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    const ajustes = localStorage.getItem('ajustes');

    if (ajustes) {
      this.ajustes = JSON.parse(ajustes);
    }

    this.aplicarAjustes(this.ajustes.theme);
  }

  aplicarAjustes(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this.document.getElementById('theme').setAttribute('href', url);

    this.ajustes.theme = theme;
    this.ajustes.themeUrl = url;
    this.guardarAjustes();
  }
}

interface Ajustes {
  themeUrl: string;
  theme: string;
}
