import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  news: any = {};
  constructor(public ns: NewsService) {}
  async ngOnInit() {
    this.news = await this.ns.GetTopNews();
  }
}
