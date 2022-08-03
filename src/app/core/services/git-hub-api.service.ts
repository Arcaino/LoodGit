import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from 'src/app/shared/models/Repository';
import { API_BASE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService {

  constructor(private http: HttpClient) { }

  public getRepositories(): Observable<Repository[]>{

    return this.http.get<Repository[]>(`${API_BASE}repositories`);
  };
}
