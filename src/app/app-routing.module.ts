import {NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import { TestDetailComponent } from './test-details.component' ;
import {LoginComponent } from './login.component';

const routes : Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },
    {path : 'testDetails' , component: TestDetailComponent}
];

@NgModule({

imports:[
    RouterModule.forRoot(routes)
],
exports:[
    RouterModule
]

})


export class AppRoutingModule {}

export const routingComponents = [TestDetailComponent]