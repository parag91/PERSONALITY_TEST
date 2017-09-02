import { Component  , OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppService } from './app.service';
import {MdRadioModule} from '@angular/material';
import { Location }                 from '@angular/common';

@Component({
  selector: 'test-details',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  
})
export class TestDetailComponent implements OnInit{
  title = 'Personality Test';

   navItems: any ;
   navItemsCategory : any ;
   questions : any[] ;

  constructor(private _appService: AppService , private location: Location){} 


  ngOnInit(){
        this.getHeroes();
       }

 getHeroes(): void {
    this._appService
        .getHeroes()
        .then(heroes => {
           this.navItems = heroes;
           console.log(this.navItems);
        this.navItemsCategory = this.navItems.categories;
        this.questions = this.navItems.questions;
        
        console.log(this.questions[0].question_type.options);
});
  }

config: SwiperOptions = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            
        };



goBack(): void {
    this.location.back();
  }
}
