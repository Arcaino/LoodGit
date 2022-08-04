import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepositoryTopics } from 'src/app/shared/models/IRepositoryTopics';
import { Repository } from 'src/app/shared/models/Repository';
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

  public getRepositories(): Observable<Repository[]>{

    return this.http.get<Repository[]>(`${API_BASE}repositories`, this.options);
  };

  public getTopicsFromRepository(repository: string): Observable<IRepositoryTopics[]>{

    return this.http.get<IRepositoryTopics[]>(`${API_BASE}repos/${repository}/topics`, this.options);
  };

  public getRepositoryFromSearch(query: string, page: number): Observable<any>{

    return this.http.get<any>(`${API_BASE}search/repositories?q=${query}&per_page=10&page=${page}`, this.options);
  }
}
