import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GitHubApiService } from './core/services/git-hub-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'LoodGit';
  public searchInput: string = '';
  searchInputUpdate = new Subject<string>();

  constructor(private router: Router, private api: GitHubApiService){}

  ngOnInit(): void {

    this.searchInputUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.getRepositoryFromSearch(value);
        this.router.navigate(['/search'], {queryParams: { q: value }});
      });
  };

  clearInput(){
    this.searchInput = '';
  };

  getRepositoryFromSearch(value: string){

    this.api.getRepositoryFromSearch(value)
      .subscribe(response => {
        console.log(response);
      });
  }
}
