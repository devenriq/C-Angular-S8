import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: string= 'admin@admin'
  password: string = 'password'

  show = false

  submit(e:Event){
    e.preventDefault()
    console.log('first')
  }


}
