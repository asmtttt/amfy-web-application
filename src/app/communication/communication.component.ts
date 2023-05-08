import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  communicationForm: FormGroup = new FormGroup({
    'fullName': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'message': new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500)
    ])
  });  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.communicationForm = this.formBuilder.group({
      namesurname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      message: ['', [Validators.required]],

  });
  }

  

 // convenience getter for easy access to form fields
 get f() { return this.communicationForm.controls; }

 onSubmit() {
     this.submitted = true;

     // eğer validasyonlar sağlanmaz ise metot burada bitiyor
     if (this.communicationForm.invalid) {
         return;
     }

     // eğer sağlanırsa alt satırdaki kodlar çalışır

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.communicationForm.value))
 }
 
}
  


