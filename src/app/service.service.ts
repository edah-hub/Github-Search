import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class serviceserviceComponent {
  constructor(private Http: HttpClient) {}
  getUser(username: any) {
    return this.Http.get(
      'https://api.github.com/users/' +
        username +
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
