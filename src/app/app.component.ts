import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day';
  data:any 
  
  chil2parent(child_parent:any){
console.log(child_parent)
 this.data = child_parent
  }
  initial_value:any = 0
  transfer(){
    this.initial_value = 6
  }

}
