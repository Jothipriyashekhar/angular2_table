import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public username : string = '';
public password : string = '';
public flag =  false;
public users = [];
public obj :any ={};

changeusername(event){
this.username = event.target.value;
}

changepassword(event){
this.password = event.target.value;
}
onsave(){
   this.flag = true;
   this.obj.username= this.username;
   this.obj.password = this.password;
   this.users.push(this.obj);
   this.obj = {};
   console.log(this.users);

}
onclear(){
  this.username = '';
  this.password = '';
}
}
