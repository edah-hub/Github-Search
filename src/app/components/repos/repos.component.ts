import { Component,OnInit,Input, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
// import { User } from 'src/app/user';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  // @Input () gitHubRepos! :any[];
  
  name = new FormControl();
  username!:string;
  // user :any = User;
  // serviceservice: ServiceService;
  repos: any;
  @ViewChild('form')
  searchForm :any = NgForm;
  searchRepoForm!: NgForm;
  
  constructor(private myService:ServiceService) {}




  getRepos(myUserName:string){
    // this.username =this.searchRepoForm.value.search;

    this.myService.getUserRepos(myUserName).then(
      (response) =>{
        this.repos=this.myService.getRepositories;
        console.log(this.repos);
        // this.displayRepository=true
      },
      (error) =>{
        // this.displayErrorMessage=true;
        console.log(error);
        
      }
    );
  }

  getUserName(){
    let myUserName = this.name.value
    console.log(myUserName)
    this.getRepos(myUserName)
    return false;
  }

  ngOnInit(): void {
    this.getRepos("edah-hub");
  }



}
