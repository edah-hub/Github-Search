import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class servicepage {
  constructor(private Http: HttpClient) {}
  getUser(unamer: any) {
    return this.Http.get(
      'https://api.github.com/users/' +
        unamer +
        '?access_token=' +
        environment.gitHubApi
    ).pipe((response: any) => response);
  }
  getRepos(repoName: any) {
    return this.Http.get(
      'https://api.github.com/users/' +
        repoName +
        '/repos?access_token=' +
        environment.gitHubApi
    ).pipe((response: any) => response);
  }
}
