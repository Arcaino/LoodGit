import { Injectable } from "@angular/core";
import { IRepository } from "src/app/shared/models/IRepository";
import { IRepositoryTopics } from "src/app/shared/models/IRepositoryTopics";
import { GitHubApiService } from "../services/git-hub-api.service";

@Injectable({
    providedIn: 'root'
})
export class CombineObjects{

    repositoriesWithTopic: IRepository[] = [];
    repositoryTopic:  IRepositoryTopics[] = [];
    repositories: IRepository[] = [];
    repositoryWithTopic: any = [];

    constructor(private api: GitHubApiService){}

    buildRepositoryWithTopic(repositories: IRepository[]){

        this.repositoriesWithTopic = [];

        repositories.forEach(repository => {

            this.api.getTopicsFromRepository(repository.full_name)
                .subscribe(repositoryTopic => {
                    this.repositoryTopic = repositoryTopic;
                    this.repositoryWithTopic = {...repository, 
                                                topics: this.repositoryTopic};
                    this.repositoriesWithTopic.push(this.repositoryWithTopic);
            });
        })
    };
}