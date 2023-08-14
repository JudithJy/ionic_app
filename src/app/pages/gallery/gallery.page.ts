import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  gallery =[
    {text:'Image 1', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 2', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 3', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 4', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 5', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 6', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 7', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 8', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 9', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 10', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 11', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"},
    {text:'Image 12', src:"https://static.wixstatic.com/media/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.jpg/v1/fill/w_1088,h_620,fp_0.50_0.50,q_85/6d0e60_3eb05918428d4587a64352dae750a3ca~mv2.webp"}
  ]
  constructor() { }

  ngOnInit() {
    this.gallery[0].src
  }

}
