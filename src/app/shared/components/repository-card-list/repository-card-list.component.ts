import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-repository-card-list',
  templateUrl: './repository-card-list.component.html',
  styleUrls: ['./repository-card-list.component.scss']
})
export class RepositoryCardListComponent implements OnInit {

  @Input() repositories: any

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  };

  goToPage(url: string){

    window.location.href = url;
  }
}
