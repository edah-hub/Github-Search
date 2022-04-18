import { Component, OnInit } from '@angular/core';
import { serviceserviceComponent } from 'src/app/service.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
export class MainFormComponent implements OnInit {
  public githubUserQuery: string | undefined;

  username: any;
  user: any;
  repos: any;
  serviceservice: any;
  getUsername() {
    this.serviceservice.getUser(this.username).subscribe((profile: any) => {
      console.log(profile);
      return (this.user = profile);
    });
  }
  getRepository() {
    this.serviceservice.getRepos(this.username).subscribe((data: any) => {
      console.log(data);
      return (this.repos = data);
    });
  }

  constructor() {}

  public searchUser() {}

  ngOnInit(): void {}
}
