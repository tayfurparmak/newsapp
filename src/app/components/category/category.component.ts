import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  cat: string = '';
  news: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public ns: NewsService
  ) {
    this.router.events.subscribe(async (event: Event | any) => {
      if (event instanceof NavigationEnd) {
        this.cat = '' + this.route.snapshot.paramMap.get('cat');
        await this.Get();
      }
    });
  }

  async ngOnInit() {
    this.cat = '' + this.route.snapshot.paramMap.get('cat');
    await this.Get();
  }

  async Get() {
    this.news = await this.ns.GetCategoryNews(this.cat.toLowerCase());
    console.log(this.news);
  }
}
