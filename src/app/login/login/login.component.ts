import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: string= 'admin@admin'
  password: string = 'password'

  show:boolean = false
  let email: string = ''

  submit(event:Event){
    event.preventDefault()
    console.log(email)
  }


}
