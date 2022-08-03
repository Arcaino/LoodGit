import { Component, OnInit } from '@angular/core';
import { GitHubApiService } from 'src/app/core/services/git-hub-api.service';
import { Repository } from '../../models/Repository';

@Component({
  selector: 'app-repository-card-list',
  templateUrl: './repository-card-list.component.html',
  styleUrls: ['./repository-card-list.component.scss']
})
export class RepositoryCardListComponent implements OnInit {

  repositories: Repository[] = [];

  constructor(private api: GitHubApiService) { }

  ngOnInit(): void {
    this.api.getRepositories().subscribe(response => {
      this.repositories = response;
      console.log(this.repositories);
    });
  };

}
