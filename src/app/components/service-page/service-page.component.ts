import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  Http: any;

  constructor( private httpClient:HttpClient) {
   
   }
   getUser(username:any){
    return this.Http.get("https://api.github.com/users/"+   username +"?access_token=" + environment.gitHubApi)
    .pipe(((response: any) => response));
  } 
  getRepos(repoName:any){
    return this.Http.get("https://api.github.com/users/"+ repoName +"/repos?access_token=" + environment.gitHubApi)
    .pipe(((response: any) => response));

  }

  ngOnInit(): void {
  }

}
