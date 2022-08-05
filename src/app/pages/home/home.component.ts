import { Component, OnInit } from '@angular/core';
import { GitHubApiService } from 'src/app/core/services/git-hub-api.service';
import { IRepositoryTopics } from 'src/app/shared/models/IRepositoryTopics';
import { IRepository } from 'src/app/shared/models/IRepository';
import { CombineObjects } from 'src/app/core/helpers/CombineObjects';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  repositories: IRepository[] = [];
  repositoriesWithTopic: IRepository[] = [];

  constructor(private api: GitHubApiService, 
              public combineObjects: CombineObjects) { }

  ngOnInit(): void {
    this.getRepositories();
  };

  getRepositories(){
    this.api.getRepositories().subscribe(repositories => {
      this.combineObjects.buildRepositoryWithTopic(repositories);
      this.repositories = this.combineObjects.repositoriesWithTopic;
    });
  };
}
