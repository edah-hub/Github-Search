import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
export class MainFormComponent implements OnInit {
  // public githubUserQuery: string | undefined;

  username: string;
  user: User;
  // serviceservice: ServiceService;
  repos: any;
  @ViewChild('form')
  searchForm :any = NgForm;
  searchRepoForm!: NgForm;
  repositories: any;

  constructor(private myService:ServiceService) {}


  getUsername() {
    this.username = this.searchForm.value.search;
   this.myService.getUserDataApi(this.username).then(
     (response) => {
       this.user = this.myService.userProfile;
      //  this.DetailContainer = true;

     },
     (error) => {
       console.log(error);
      //  this.Error = true;
     }
   );

 
}


ngOnInit(): void {}
}
