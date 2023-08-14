import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contacts } from 'src/app/models/contacts';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

    

  get contact_name(){
    return this.contactForm.get('contact_name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get phone(){
    return this.contactForm.get('phone');
  }
  get address(){
    return this.contactForm.get('address');
  }
  get contact_subject(){
    return this.contactForm.get('contact_subject');
  }
// error messages for form validation
public errorMessages = {
  contact_name:[{type:'required', message:'Contact Name required'},
                {type: 'maxlength', message:'Name should not execed a maximum length of 100'}],
  email: [{type:'required', message:'Email address Name required'},
          {type:'pattern', message:'Invalid Email Address'}],
  phone: [{type:'required', message:'Phone number required'},
          {type: 'pattern', message:'Invalid Phone number format'}],
  address: [{type:'required', message:'Address required'},
            {type: 'maxlength', message:'Address should not execed a maximum length of 100'}],
  contact_subject: [{type:'required', message:'subject message required'},
                    {type: 'maxlength', message:'Name should not execed a maximum length of 250'}]          
}

// validating the form
  contactForm = this.formBuilder.group({
    contact_name:['',[Validators.required, Validators.maxLength(100)]],
    email:['', [Validators.required, Validators.pattern('^[a-z0-9._%-]+@[a-zA-z0-9-]+.[a-zA-Z]{2,4}$')]],
    phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    address: ['', [Validators.required, Validators.maxLength(100)]],
    contact_subject: ['', [Validators.required, Validators.maxLength(250)]]
  })
  
  
constructor(private formBuilder: FormBuilder,
            private contactservice: ContactsService,
            public toastcontroller: ToastController) { 
}

ngOnInit() {

}
//fuction to send data to the database
submit(){
  const result: Contacts = Object.assign({}, this.contactForm.value);
  this.contactservice.postContact(result)
  .subscribe(data =>{
    console.log(data)
  })
  this.contactForm.reset();
  return console.log(result);
}
//toaster message for the user after submiting the form
async presentToast() {
  const toast = await this.toastcontroller.create({
    message: 'Your information has succesfully been submited we will be in touch with you soon',
    duration: 5000,
    position: 'top',
    animated: false,
    color: 'success',
    buttons: [
      {
        side: 'start',
        icon: 'alert-circle-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]      
  });
  toast.present();
}


}