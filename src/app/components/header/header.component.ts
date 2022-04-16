import { Component, OnInit } from '@angular/core';
import { MainFormComponent } from '../main-form/main-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public githubUserQuery:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
