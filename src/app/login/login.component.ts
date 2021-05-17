import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean= false; 
 
  get userName(){
    return this.loginForm.get('userName');
  }

  get passWord(){
    return this.loginForm.get('passWord');
  }

  constructor(private fb: FormBuilder ){}

    loginForm = this.fb.group({
    userName: ['',[ Validators.required, Validators.minLength(3)]],
    passWord: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      alert('Logged in succesfully!!!');
      console.table(this.loginForm.value);
    }
  }
  ngOnInit(): void {
  }

}
