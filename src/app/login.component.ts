import { Component  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppService } from './app.service';
import {MdRadioModule} from '@angular/material';


@Component({
  selector: 'app-login',
  template: `
             <nav>
              <label>Enter Your Email</label>
              <input type="text" name="email" > 
              <button type="button" class="btn btn-primary" routerLink="/testDetails" >Enter Test</button>
             </nav>
            `
        })
export class LoginComponent  {
  title = 'Personality Test';

   
 
}
