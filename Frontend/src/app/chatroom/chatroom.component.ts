import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(private auth:AuthService,private chat:ChatService,public router:Router) { }

  user:any=[]
  email:any=''
  

  ngOnInit(): void {

    
    this.email=sessionStorage.getItem('email')

    this.chat.getUser(this.email).subscribe((data)=>{
      this.user=JSON.parse(JSON.stringify(data))
    })

    
  }

  chatUser(user:any){
    console.log(user);
    sessionStorage.setItem('chatUser',user._id)
    // this._router.ngOnInit();
  }

  // logout user
  logoutUser(){

    this.email =sessionStorage.getItem("email");

    this.auth.logOut(this.email)
    console.log(this.email);
    sessionStorage.clear()
    this.router.navigate(['/'])
  }
}
