import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    public settingsService: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  changeTheme(theme: string, link: any) {
    this.themeChecked(link);
    this.settingsService.aplicarAjustes(theme);
  }

  themeChecked(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const theme = this.settingsService.ajustes.theme;

    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }

  }
}
