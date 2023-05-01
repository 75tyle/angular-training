import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @Input() number:any =0
 @Output() childtoparent = new EventEmitter<any>();
 @Output() user_data =new EventEmitter<any>();
 name:any ='mangal'
 userdata!:FormGroup

  constructor(private fb:FormBuilder) { 
    this.userdata = fb.group ({
      user_name:[''],
      user_fullname:[''],
      user_phone:[''],
      user_email:[''],
    })
  }

  ngOnInit(): void {
  
  }
  sbmt(){
    
    this.user_data.emit(this.userdata.value)
  }
  send(){
    this.childtoparent.emit('mangal')
  }
}


