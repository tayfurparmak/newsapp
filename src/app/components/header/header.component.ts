import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cats = [
    { key: 'business', name: 'İş' },
    { key: 'entertainment', name: 'Eğlence' },
    { key: 'general', name: 'Genel' },
    { key: 'health', name: 'Sağlık' },
    { key: 'science', name: 'Bilim' },
    { key: 'sports', name: 'Spor Dalları' },
    { key: 'technology', name: 'Teknoloji' },
  ];
}
