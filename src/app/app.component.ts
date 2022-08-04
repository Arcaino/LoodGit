import { Component, OnInit } from '@angular/core';
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

  constructor(){}

  ngOnInit(): void {
    this.searchInputUpdate.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        console.log(value);
      });
  };

  getRepositoryFromSearch(){


  }
}
