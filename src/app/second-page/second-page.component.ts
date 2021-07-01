import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor() {
    console.log(String, 'hello from second page');
  }

  ngOnInit() {
  }

}
