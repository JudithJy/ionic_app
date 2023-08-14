import { Component, OnInit } from '@angular/core';
import { Hackathons } from 'src/app/models/hackathons';
import { FormBuilder, Validators } from '@angular/forms';
import { HackathonsService } from 'src/app/services/hackathons.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hackathonregistration',
  templateUrl: './hackathonregistration.page.html',
  styleUrls: ['./hackathonregistration.page.scss'],
})
export class HackathonregistrationPage implements OnInit {
//array of objects storing the hackathons
  hackathons = [
    {id:1, name:'1st Hackathons'},
    {id:2, name:'2nd Hackathons'},
    {id:3, name:'3th Hackathons'},
    {id:4, name:'4th Hackathons'},
    {id:5, name:'5th Hackathons'},
    {id:6, name:'6th Hackathons'},
    {id:7, name:'7th Hackathons'},
    {id:8, name:'8th Hackathons'}
  ]
//array of objects storing programming languages
  languages = [
    {id:1, val:'Java'},
    {id:1, val:'Python'},
    {id:1, val:'C#/C++'},
    {id:1, val:'HTML/CSS'},
    {id:1, val:'JavaScript'},
    {id:1, val:'UI/UX Design'},
    {id:1, val:'SQL'},
    {id:1, val:'.NET'},
    {id:1, val:'Cloud Computing'},
    {id:1, val:'Other'}
  ]
// getting data from the form
  get participant_name(){
    return this.registrationForm.get('participant_name');
  }
  get id_number(){
    return this.registrationForm.get('id_number');
  }
  get email_address(){
    return this.registrationForm.get('email_address');
  }
  get whatsapp_number(){
    return this.registrationForm.get('whatsapp_number');
  }
  get disability(){
    return this.registrationForm.get('disability');
  }
  get disability_description(){
    return this.registrationForm.get('disability_description');
  }
  get update_participant(){
    return this.registrationForm.get('update_participant');
  }
  get development_experience(){
    return this.registrationForm.get('development_experience');
  }
  get familiar_language(){
    return this.registrationForm.get('familiar_language');
  }
  get programming_experience(){
    return this.registrationForm.get('programming_experience');
  }
  get cloudprovider_expertise(){
    return this.registrationForm.get('cloudprovider_expertise');
  }
  get hackathons_participation(){
    return this.registrationForm.get('hackathons_participation');
  }
  get which_hackathons(){
    return this.registrationForm.get('which_hackathons');
  }
  get sourceofinformation(){
    return this.registrationForm.get('sourceofinformation');
  }
// error messages for the form
public errorMessages = {
  participant_name:[{type:'required', message:'Participant Name required'},
              {type: 'maxlength', message:'Name should not execed a maximum length of 100'}],
  id_number:[{type:'required', message:'Id number required'},
              {type:'maxlength', message:'Invalid ID Number'}],
  email_address:[{type:'required', message:'Email Address required'},
              {type: 'pattern', message:'Invalid email address format'}],
  whatsapp_number: [{type:'required', message:'Whatsapp Number required'},
              {type: 'pattern', message:'Invalid phone number format'}],
  disability:[{type:'required', message:'Text required'},
              {type: 'maxlength', message:'Text should not execed a maximum length of 100'}],
  disability_description:[{type: 'maxlength', message:'Text should not execed a maximum length of 100'}], 
  update_participant:[{type:'required', message:'Text required'},
              {type: 'maxlength', message:'Text should not execed a maximum length of 100'}],          
  development_experience:[{type:'required', message:'Text required'},
              {type: 'maxlength', message:'Text should not execed a maximum length of 100'}],          
  familiar_language:[{type:'required', message:'Select at least one'},
              {type: 'maxlength', message:'Text should not execed a maximum length of 100'}],          
  programming_experience:[{type:'required', message:'Text required'},
              {type: 'maxlength', message:'Text should not execed a maximum length of 100'}],          
  cloudprovider_expertise:[{type:'required', message:'Text required'},
              {type: 'maxlength', message:'Text should not execed a maximum length of 100'}],          
  hackathons_participation:[{type:'required', message:'Text required'},
              {type: 'maxlength', message:'Text should not execed a maximum length of 100'}],          
  which_hackathons:[{type: 'maxlength', message:'Text should not execed a maximum length of 100'}],          
  sourceofinformation:[{type:'required', message:'Text required'},
              {type: 'maxlength', message:'Text should not execed a maximum length of 100'}]                  
}
// form builder for validating the form
  registrationForm = this.formBuilder.group({
    participant_name:['',[Validators.required, Validators.maxLength(100)]],
    id_number:['', [Validators.required, Validators.maxLength(13)]],
    email_address: ['', [Validators.required, Validators.pattern('^[a-z0-9._%-]+@[a-zA-z0-9-]+.[a-zA-Z]{2,4}$')]],
    whatsapp_number: ['', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    disability: ['', [Validators.required, Validators.maxLength(100)]],
    disability_description: [null, [Validators.maxLength(100)]],
    update_participant: ['', [Validators.required, Validators.maxLength(100)]],
    development_experience: ['', [Validators.required, Validators.maxLength(100)]],
    familiar_language: ['', [Validators.required, Validators.maxLength(100)]],
    programming_experience: ['', [Validators.required, Validators.maxLength(100)]],
    cloudprovider_expertise: ['', [Validators.required, Validators.maxLength(100)]],
    hackathons_participation: ['', [Validators.required, Validators.maxLength(100)]],
    which_hackathons: [null, [Validators.maxLength(100)]],
    sourceofinformation: ['', [Validators.required, Validators.maxLength(100)]],

  })
  constructor(private formBuilder:FormBuilder,
              private hackathonservice: HackathonsService,
              public toastcontroller: ToastController ) { }

  ngOnInit() {
  }
  //fuction to submit the data from the form to the database
  submit(){
    const result: Hackathons = Object.assign({}, this.registrationForm.value);
    this.hackathonservice.postHackathons(result)
    .subscribe(data =>{
      console.log(data)
    })
    this.registrationForm.reset();
    return console.log(result);
  }
//toast message for the user to indicade that they have succesfully submitted their information
  async presentToast() {
    const toast = await this.toastcontroller.create({
      message: 'You have Succesfully registered!',
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

