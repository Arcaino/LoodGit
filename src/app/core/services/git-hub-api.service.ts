import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepositoryTopics } from 'src/app/shared/models/IRepositoryTopics';
import { IRepository } from 'src/app/shared/models/IRepository';
import { API_BASE, API_TOKEN } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService {

  constructor(private http: HttpClient) { }

  public getRepositories(): Observable<IRepository[]>{

    return this.http.get<IRepository[]>(`${API_BASE}repositories`, { headers: API_TOKEN });
  };

  public getTopicsFromRepository(repository: string): Observable<IRepositoryTopics[]>{

    return this.http.get<IRepositoryTopics[]>(`${API_BASE}repos/${repository}/topics`, { headers: API_TOKEN });
  };

  public getRepositoryFromSearch(query: string, page: number, results_per_page: number): Observable<any>{

    return this.http.get<any>(`${API_BASE}search/repositories?q=${query}&per_page=${results_per_page}&page=${page}`, { headers: API_TOKEN });
  }
}
