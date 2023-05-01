import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day';
  data:any 
  user:any={}
  userinput(user_database:any){
    console.log(user_database)
   this.user.user_name = user_database.user_name
   this.user.user_fullname = user_database.user_fullname
   this.user.user_email = user_database.user_email
   this.user.user_phone = user_database.user_phone
  }
  chil2parent(child_parent:any){
console.log(child_parent)
 this.data = child_parent
  }
  initial_value:any = 0
  transfer(){
    this.initial_value = 6
  }

}
