import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  list: any =[{
    title:'Home',
    name:'home',
    path: 'tabs/home'
  },
  {
    title:'About',
    name:'reader',
    path: 'tabs/about'
  },
  {
    title:'The Digital Citizen',
    name:'terminal',
    path: '/digitalcitizen'
  },
  {
    title:'Hackathons',
    name:'laptop',
    path: 'tabs/hackathons'
  },
  {
    title:'The Incubation Hub',
    name:'list',
    path: 'incubator'
  },
  {
    title:'Our Partners',
    name:'people-circle',
    path: '/partners'
  },
  {
    title:'Become a sponsor',
    name:'people',
    path: '/sponsor'
  },
  {
    title:'Contact',
    name:'person-circle',
    path: '/contact'
  },
  {
    title:'Upcoming Events',
    name:'newspaper',
    path: 'tabs/events'
  },
  {
    title:'Gallery',
    name:'images',
    path: '/gallery'
  },
  {
    title:'Videos',
    name:'videocam',
    path: '/videos'
  }]

  constructor(private menu: MenuController) {}

  NgOnInit(){

  }
  onMenuClick(){
    this.menu.close();
  }
}
