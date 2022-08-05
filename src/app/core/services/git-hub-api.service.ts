import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepositoryTopics } from 'src/app/shared/models/IRepositoryTopics';
import { IRepository } from 'src/app/shared/models/IRepository';
import { API_BASE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService {

  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Basic QXJjYWlubzpnaHBfZm5ET2V1Rk1BR0VEbGRMQTdqV2E3ZHdhcDZiTlZxMXViZDZI'
  });

  options = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  public getRepositories(): Observable<IRepository[]>{

    return this.http.get<IRepository[]>(`${API_BASE}repositories`, this.options);
  };

  public getTopicsFromRepository(repository: string): Observable<IRepositoryTopics[]>{

    return this.http.get<IRepositoryTopics[]>(`${API_BASE}repos/${repository}/topics`, this.options);
  };

  public getRepositoryFromSearch(query: string, page: number, results_per_page: number): Observable<any>{

    return this.http.get<any>(`${API_BASE}search/repositories?q=${query}&per_page=${results_per_page}&page=${page}`, this.options);
  }
}
