import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PartnersService } from 'src/app/services/partners.service';
import { Partners } from 'src/app/models/partners';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {


//getting the inputs from the form
get partner_name(){
  return this.partnerForm.get('partner_name');
}
get company_name(){
  return this.partnerForm.get('company_name');
}
get email(){
  return this.partnerForm.get('email');
}
get phone(){
  return this.partnerForm.get('phone');
}

//validating the form
public errorMessages = {
  partner_name: [
  {type: 'required', message: 'Name is requres'},
  {type: 'maxlength', message: 'Name cant be longer than 100 characters'}
],
company_name: [
  {type: 'required', message: 'Phone number is required'},
  {type: 'maxlength', message: 'Company name cant be longer than 100 characters'}
],
email: [
  {type: 'required', message: 'Email is requres'},
  {type: 'pattern', message: 'Please enter a valid email address'}
],
phone: [
  {type: 'required', message: 'Email is requres'},
  {type: 'pattern', message: 'Please enter a valid email address'}
],
}

partnerForm = this.formBuilder.group({
  partner_name:['', [Validators.required, Validators.maxLength(100)]],
  email:['', [Validators.required,
             Validators.pattern('^[a-z0-9._%-]+@[a-zA-z0-9-]+.[a-zA-Z]{2,4}$')]],
  phone:['', [Validators.required,
              Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
  company_name:['',[Validators.required, Validators.maxLength(100)]],
});
constructor(private formBuilder: FormBuilder,
            private partnerservice: PartnersService,
            public toastcontroller: ToastController) { 
}
ngOnInit() {
}
//submit button function
submit(){
  const result: Partners = Object.assign({}, this.partnerForm.value);
  this.partnerservice.postPartner(result)
  .subscribe(data =>{
    console.log(data)
  })
  this.partnerForm.reset();
  return console.log(result);
}
//toaster message for the user after clicking the submit button
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
