import { Component, OnInit } from '@angular/core';
import { SourcesService } from '../sources.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  sources: [];
  source: any;
  constructor(public sourceService: SourcesService, private router: Router) { }

  ngOnInit() {
    this.sourceService.getSources()
    .subscribe((source: any) => {
      this.sources = source.sources;
      console.log(this.sources);
    });
  }

}
