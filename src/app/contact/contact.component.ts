import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  contactForm = this.fb.group ({
    name : ['', Validators.required],
    email : ['', Validators.required],
    phone : [''],
    message : ['', Validators.required],
  })

  constructor(private fb : FormBuilder) {}

  ngOnInit(){
  }

  sendEmail() {
  
    const name = this.contactForm.value.name;
    const email = this.contactForm.value.email;
    const phone = this.contactForm.value.phone;
    const message = this.contactForm.value.message;
    const allInfo = 'Votre nom est ' + name + 'et votre email ' + email;
    alert(allInfo);
    console.log(name);
    console.log(message);
  }

}


