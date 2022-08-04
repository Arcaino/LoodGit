import { Component, OnInit } from '@angular/core';
import { GitHubApiService } from 'src/app/core/services/git-hub-api.service';
import { IResponsePageable } from 'src/app/shared/models/IResponsePageable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  responsePageable!:  IResponsePageable;
  name: string = '';
  page: number = 1;

  constructor(private api: GitHubApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['q'];
      this.getRepositoryFromSearch(this.name)
    });
  };

  getRepositoryFromSearch(value: string){

    this.api.getRepositoryFromSearch(value, this.page)
      .subscribe(response => {
        this.responsePageable = response;
        this.getTotalPages(this.responsePageable.total_count);
        console.log(this.responsePageable);
      });
  };

  getTotalPages(totalPages: number){

    
  };
}
