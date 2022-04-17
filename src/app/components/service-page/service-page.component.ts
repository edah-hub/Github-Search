import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  constructor( private httpClient:HttpClient) {
   
   }
   // method for user profile
   public getProfile(searchQuery: any){
     let dataURL = 'htts://api.github.com/users/users';
   }

    // method for user profile

  ngOnInit(): void {
  }

}
