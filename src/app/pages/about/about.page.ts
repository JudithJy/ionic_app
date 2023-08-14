import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
 productId;
  constructor(private router: Router,
              private route: ActivatedRoute) {
  this.productId = this.route.snapshot.paramMap.get('id');
               }

  ngOnInit() {
  }
  
}
