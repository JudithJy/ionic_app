import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  
  images =[
    {text:'Image 1', src:"https://edmidentity.com/wp-content/uploads/2019/03/Imagine-Music-Festival-2018.jpg"},
    {text:'Image 2', src:"https://edmidentity.com/wp-content/uploads/2019/03/Imagine-Music-Festival-2018.jpg"},
    {text:'Image 3', src:"https://edmidentity.com/wp-content/uploads/2019/03/Imagine-Music-Festival-2018.jpg"},
    {text:'Image 4', src:"https://edmidentity.com/wp-content/uploads/2019/03/Imagine-Music-Festival-2018.jpg"},
    {text:'Image 5', src:"https://edmidentity.com/wp-content/uploads/2019/03/Imagine-Music-Festival-2018.jpg"},
    {text:'Image 6', src:"https://edmidentity.com/wp-content/uploads/2019/03/Imagine-Music-Festival-2018.jpg"},
    {text:'Image 7', src:"https://edmidentity.com/wp-content/uploads/2019/03/Imagine-Music-Festival-2018.jpg"},
  ]

  constructor(private service: EventsService) { }
  

  listEvents: Events[];

  ngOnInit() {

    this.service.getEvents()
    .subscribe(
      data => {
        this.listEvents = data;
      }
    );
  }
    

}
