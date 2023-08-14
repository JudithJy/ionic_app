import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SponsorsService } from 'src/app/services/sponsors.service';
import { Sponsors } from 'src/app/models/sponsors';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.page.html',
  styleUrls: ['./sponsor.page.scss'],
})
export class SponsorPage implements OnInit {
// array of object for storing the types of industries that the user will select from
  selectIndustry = [
    {id:1, name:'Accounting, banking and finance'},
    {id:2, name:'Business Consulting and Management'},
    {id:3, name:'Charity and Voluntary work'},
    {id:4, name:'Creative arts and design'},
    {id:5, name:'Energy and utilities'},
    {id:6, name:'Engineering and Manufacturing'},
    {id:7, name:'Enviroment and Agriculture'},
    {id:8, name:'Healthcare'},
    {id:9, name:'Hospitality and Events management '},
    {id:10, name:'Information Technology'},
    {id:11, name:'Law'},
    {id:12, name:'Law enforcement and security'},
    {id:13, name:'Leisure, sport and tourism'},
    {id:14, name:'Marketing, advertising and PR'},
    {id:15, name:'Media and Internet'},
    {id:16, name:'Property and Construction'},
    {id:17, name:'Public services and administration'},
    {id:18, name:'Recruitment and HR'},
    {id:19, name:'Retail'},
    {id:20, name:'Sales'},
    {id:21, name:'Science and pharmaceuticals'},
    {id:22, name:'Social Care'},
    {id:23, name:'Teacher training and Education'},
    {id:24, name:'Transport and Logisticts'},

  ]
// getting data from the form to the database
  get sponsor_name(){
    return this.sponsorForm.get('sponsor_name');
  }
  get sponsor_surname(){
    return this.sponsorForm.get('sponsor_surname');
  }
  get prefered_contactmethod(){
    return this.sponsorForm.get('prefered_contactmethod');
  }
  get email(){
    return this.sponsorForm.get('email');
  }
  get phone(){
    return this.sponsorForm.get('phone');
  }
  get industry(){
    return this.sponsorForm.get('industry');
  }
  get sponsorship_description(){
    return this.sponsorForm.get('sponsorship_description');
  }
  get sourceofinformation(){
    return this.sponsorForm.get('sourceofinformation');
  }
// error messages for the form validation
  public errorMessages = {
    sponsor_name: [{type:'required', message:'Name is required'},
                   {type:'maxlength', message:'Name should not execed a maximum length of 100'}],
    sponsor_surname: [{type:'required', message:'Surname is required'},
                   {type:'maxlength', message:'Surname should not execed a maximum length of 100'}],
    prefered_contactmethod:[{type:'required', message:' Prefered contact method is required'},
                   {type:'maxlength', message:'Text should not execed a maximum lenght of 100'}],
    email: [{type:'required', message:'Email Address is required'},
                   {type:'pattern', message:'Invalid Email Address'}],
    phone: [{type:'required', message:'Phone Number is required'},
                   {type:'pattern', message:'Invalid Phone Number'}],
    industry: [{type:'required', message:'Industry is required'},
                   {type:'maxlength', message:'Text should not execed a maximum lenght of 100'}],
    sponsorship_description: [{type:'required', message:' Text is required'},
                   {type:'maxlength', message:'Text should not execed a maximum lenght of 100'}],
    sourceofinformation:[{type:'required', message:'Text is required'},
                   {type:'maxlength', message:'Text should not execed a maximum lenght of 100'}]
  }
// validating the form
  sponsorForm = this.formBuilder.group({
    sponsor_name: ['',[Validators.required, Validators.maxLength(100)]],
    sponsor_surname: ['',[Validators.required, Validators.maxLength(100)]],
    prefered_contactmethod: ['',[Validators.required, Validators.maxLength(100)]],
    email:[null,[Validators.pattern('^[a-z0-9._%-]+@[a-zA-z0-9-]+.[a-zA-Z]{2,4}$')]],
    phone: [null,[Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    industry: ['',[Validators.required, Validators.maxLength(100)]],
    sponsorship_description: ['',[Validators.required, Validators.maxLength(100)]],
    sourceofinformation:['',[Validators.required, Validators.maxLength(100)]]
  })

  constructor(private formBuilder: FormBuilder,
              private sponsorService: SponsorsService,
              public toastcontroller: ToastController) { }

  ngOnInit() {
  }
  // function to submit data to the database
  submit(){
    const result: Sponsors = Object.assign({}, this.sponsorForm.value);
    this.sponsorService.postSponsor(result)
    .subscribe(data =>{
      console.log(data)
      
    })
   
    this.sponsorForm.reset();
    return console.log(result);
  }
  // toaster to send out a message to the user after submitting the form
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

