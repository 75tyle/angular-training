import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @Input() number:any =0
 @Output() childtoparent = new EventEmitter<any>();
 name:any ='mangal'

  constructor() { }

  ngOnInit(): void {
  
  }
  send(){
    this.childtoparent.emit('mangal')
  }
}


