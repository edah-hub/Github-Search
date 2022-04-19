import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { MainFormComponent } from '../main-form/main-form.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}
  searchUser() {}

  ngOnInit(): void {}
}
