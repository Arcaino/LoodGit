import { Component, OnInit } from '@angular/core';
import { GitHubApiService } from 'src/app/core/services/git-hub-api.service';
import { IRepositoryTopics } from '../../models/IRepositoryTopics';
import { Repository } from '../../models/Repository';
import * as AOS from 'aos';

@Component({
  selector: 'app-repository-card-list',
  templateUrl: './repository-card-list.component.html',
  styleUrls: ['./repository-card-list.component.scss']
})
export class RepositoryCardListComponent implements OnInit {

  repositories: Repository[] = [];
  repositoriesWithTopic: Repository[] = [];
  repositoryTopic:  IRepositoryTopics[] = [];
  repositoryWithTopic: any;

  constructor(private api: GitHubApiService) { }

  ngOnInit(): void {
    AOS.init();
    this.getRepositories();
  };

  getRepositories(){
    this.api.getRepositories().subscribe(response => {
      this.repositories = response;
      this.repositories.forEach((repository, index) => {
        this.getTopicsFromRepository(repository.full_name, index);
      })
    });
  };

  getTopicsFromRepository(repositoryUrl: string, index: number){
    this.api.getTopicsFromRepository(repositoryUrl).subscribe(response => {

      this.repositoryTopic = response
      this.repositoryWithTopic = {...this.repositories[index], topics: this.repositoryTopic}
      this.repositoriesWithTopic.push(this.repositoryWithTopic);
    })
  }

}
