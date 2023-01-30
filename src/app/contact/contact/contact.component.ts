import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(){}

  get(f:any)
  {
     if(!f.invalid) 
     {
      const username=document.getElementById("username") as HTMLInputElement
      const emailUser=document.getElementById("emailUser") as HTMLInputElement
      const messageUser=document.getElementById("messageUser") as HTMLInputElement
      

      const SubmitSucces=document.getElementById("SubmitSucces") as HTMLElement
      SubmitSucces.innerHTML="<div class='alert alert-primary mt-3' role='alert'>Thank You "+username.value+" For Contacting Us !</div>"

      username.value=""
      emailUser.value=""
      messageUser.value=""

      const btnSubmit=document.getElementById("btnSubmit") as HTMLInputElement

      btnSubmit.disabled=true

     }
      
  }

}
