import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted: boolean= false; 
  public companylist:String[] = [];
  
  get Name(){
    return this.Registration.get('Name');
  }
  get Age(){
    return this.Registration.get('Age');
  }
  get Phone(){
    return this.Registration.get('Phone');
  }
  get Gender(){
    return this.Registration.get('Gender');
  }
  get company(){
    return this.Registration.get('company');
  }
 get userName(){
    return this.Registration.get('userName');
  }

  get passWord(){
    return this.Registration.get('passWord');
  }

  constructor(private fb: FormBuilder,private us: UserService){}

  Registration = this.fb.group({
  Name: ['',[ Validators.required, Validators.minLength(3)]],
  Age:  ['', Validators.required],
  Phone:  ['', Validators.required],
  Gender:  ['', Validators.required],
  company: ['', Validators.required],
  userName: ['',[ Validators.required, Validators.minLength(3)]],
  passWord: ['', [Validators.required, Validators.minLength(6)]],
  
});

onSubmit() {
this.submitted = true;
if (this.Registration.valid) {
alert('Registration is complete.');
console.table(this.Registration.value);
}
}

ngOnInit(): void {
  this.us.getCompanies().subscribe(data => this.companylist= data);
}

}

