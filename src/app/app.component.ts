import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'LoodGit';
  public searchInput: string = '';
  searchInputUpdate = new Subject<string>();

  constructor(private router: Router){}

  ngOnInit(): void {

    this.searchInputUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.router.navigate(['/search'], {queryParams: { q: value }});
      });
  };

  clearInput(){
    this.searchInput = '';
  };
}
