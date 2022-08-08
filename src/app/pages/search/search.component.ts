import { Component, OnInit } from '@angular/core';
import { GitHubApiService } from 'src/app/core/services/git-hub-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IRepository } from 'src/app/shared/models/IRepository';
import { CombineObjects } from 'src/app/core/helpers/CombineObjects';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

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
  resultsText: string = 'Searching repositories...';
  total_results: number = 0;
  loader = true;
  routeSubscription!: Subscription;
  apiSubscription!: Subscription;

  constructor(private api: GitHubApiService, 
              private route: ActivatedRoute,
              public combineObjects: CombineObjects,
              private router: Router) { }

  ngOnInit(): void {

    this.routeSubscription = this.route.queryParams.subscribe(params => {
      this.name = params['q'];
      if(this.name){
        this.getRepositoryFromSearch(this.name);    
      }else{
        this.router.navigate(['/home']); 
      } 
    });
  };

  getRepositoryFromSearch(value: string){

    const apiGetRepositoryFromSearch$ = this.api.getRepositoryFromSearch(value, this.page, this.results_per_page);
    this.apiSubscription = apiGetRepositoryFromSearch$.subscribe(response => {
      this.combineObjects.buildRepositoryWithTopic(response.items);
      this.repositories = this.combineObjects.repositoriesWithTopic;
      this.getPagesInfo(response.total_count);  
      this.loader = false;
    }) 
  };

  OnPageChange(event: PageEvent){

    this.page = event.pageIndex + 1;
    this.results_per_page = event.pageSize;
    this.getRepositoryFromSearch(this.name);
  };

  getPagesInfo(totalResults: number){

    this.total_results = totalResults;
    this.resultsText = totalResults + ' repositories found';
    this.totalPages = totalResults / this.results_per_page;
  };

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.apiSubscription.unsubscribe();
  }
}
