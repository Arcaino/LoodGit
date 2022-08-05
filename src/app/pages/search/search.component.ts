import { Component, OnInit } from '@angular/core';
import { GitHubApiService } from 'src/app/core/services/git-hub-api.service';
import { IResponsePageable } from 'src/app/shared/models/IResponsePageable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IRepository } from 'src/app/shared/models/IRepository';
import { CombineObjects } from 'src/app/core/helpers/CombineObjects';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  repositories: IRepository[] = [];
  repository!: IRepository;
  repositoryWithTopic: any;
  name: string = '';
  page: number = 1;
  results_per_page: number = 10;
  totalPages: number = 1;
  total_results: number = 0;

  constructor(private api: GitHubApiService, 
              private route: ActivatedRoute,
              public combineObjects: CombineObjects,
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['q'];
      if(this.name){
        this.getRepositoryFromSearch(this.name);    
      }else{
        this.router.navigate(['/home']); 
      } 
    });
  };

  getRepositoryFromSearch(value: string){

    this.api.getRepositoryFromSearch(value, this.page, this.results_per_page)
      .subscribe(response => {
        this.combineObjects.buildRepositoryWithTopic(response.items);
        this.repositories = this.combineObjects.repositoriesWithTopic;
        this.getPagesInfo(response.total_count);  
      });      
  };

  OnPageChange(event: PageEvent){

    this.page = event.pageIndex + 1;
    this.results_per_page = event.pageSize;
    this.getRepositoryFromSearch(this.name);
  };

  getPagesInfo(totalResults: number){

    this.total_results = totalResults;
    this.totalPages = totalResults / this.results_per_page;
  };
}
