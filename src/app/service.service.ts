import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repos } from './repos';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})

export class ServiceService {
  userProfile:any = User;
  getRepositories:any =Repos;

  constructor(private Http: HttpClient) {
    this.userProfile = new this.userProfile('','',new Date,0,'',0,'','',new Date,'')
    this. getRepositories= new this.getRepositories('','',new Date,'')
  }

  //  user details
  getUserDataApi(gitUserName:string) {
    interface ApiUserResponse {
       avatar_url :string;
       name :string;
       created_at :Date;
       public_repos :number;
       login :string;
       followers :number;
       email : string;
       company :string;
       updated_at :Date;
       location :string;
    }
   let userPromise = new Promise<void>((resolve, reject) =>
    // this.Http.get<ApiUserResponse>(environment.gitHubApi +'/' +gitUserName  +'?access_token'+environment.gitHubApi)
    this.Http.get('https://api.github.com/users/' + gitUserName +'?access_token' + environment.gitHubApi)
        .toPromise().then(
          (response) => {
            this.userProfile = response;
            resolve();

            console.log('Search Data',response);
            // console.log(gitUserName)
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        )
    );
    return userPromise;
  }

  getUserRepos(gitUserName:string) {
    interface ApiRepositoryResponse {
      // login: string,
      // avatar_url: string,
      
      // repoName: string,
      
      // public_repos: number,
      // followers: number,
      // following: number,
      name:string,
      bio: string,
      created_at: Date,
      html_url: string,
      
      // location: string,
      
     
     
      // createdDate:Date;
    }

    let repositoryPromise = new Promise<void>((resolve, reject) =>
    // this.Http.get<ApiRepositoryResponse>(environment.gitHubApi +'/' +gitUserName +'/repos?sort=created&direction=asc?access_token' +environment.gitHubApi)
    this.Http.get(`https://api.github.com/users/${gitUserName}/repos`)

        .toPromise().then(
          (response) => {
            this.getRepositories = response;
            resolve();

            console.log('Search repo',response);
            // console.log("hello")
          },
          (error) => {
            reject(error);
            console.log( 'errors',error);

          }
          )
      );
      return repositoryPromise;
    }
 
}
  

