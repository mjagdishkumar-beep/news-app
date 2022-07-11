import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private api: NewsapiService) { }
  topTechData: any[] = [];

  ngOnInit(): void {
    this.api.techHeadlines().subscribe(result => {
      console.log(result);
      this.topTechData = result.articles;
    })
  }
}
