import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SourcesService } from '../sources.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  articles: [];
  constructor(private route: ActivatedRoute, private sourceService: SourcesService) { }

  ngOnInit() {
    this.route.params.subscribe(news => {
      console.log(news.source);
      this.sourceService.getArticles(news.source)
      .subscribe((article: any) => {
        this.articles = article.articles;
        console.log(this.articles);

      });
    });
  }

}
