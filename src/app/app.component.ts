import {Component, OnInit} from '@angular/core';

@Component({
  // Services, etc.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // Fields default to public
  public title = 'angular-tour-of-heroes';

  // Constructor before Life-cycle hooks: https://angular.io/guide/lifecycle-hooks
  constructor(){

  }

  ngOnInit(): void {
    this.title = "NAME OVERRIDE [app.component.ts]"
  }
}
