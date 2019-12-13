import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css']
})
export class NewoneComponent implements OnInit {
message: string;
students = ['John', 'Paul', 'Ringo', 'George'];
isOk = false;
titleButton: string;
isClicked: boolean = null;
text: string;
currentTime: string;
  constructor() {
    this.message = ' Variable from new one component';
    this.isClicked = true;
    this.titleButton = 'Of';
    this.text = 'Hello binding';
    this.currentTime = new Date().toLocaleTimeString();
  }

  ngOnInit() {
    setInterval(() => {this.currentTime = new Date().toLocaleTimeString(); }, 1000 );
  }

  evewntHandler($event: MouseEvent) {
    console.log('Botton has been clicked');
  }

  switch() {
    this.isClicked = !this.isClicked;
    if (!this.isClicked) {
      this.titleButton = 'On';
    } else {
      this.titleButton = 'Of';
    }
  }
}
