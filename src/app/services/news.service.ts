import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey = '676f017549224f488970f1835f9db971';
  constructor() {}
  async GetCategoryNews(cat: string) {
    return (
      await axios({
        method: 'get',
        url: `https://newsapi.org/v2/top-headlines?country=tr&category=${cat}&apiKey=${this.apiKey}`,
        withCredentials: false,
      })
    ).data;
  }
  async GetTopNews() {
    return (
      await axios({
        method: 'get',
        url: `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${this.apiKey}`,
        withCredentials: false,
      })
    ).data;
  }
}
