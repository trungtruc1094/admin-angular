import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { ForgotPasswordComponent } from "../forgot-password/forgot-password.component";
import { BeforeComponent } from "./before.component";

const routes = [
    { path: '', component: BeforeComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent }
    ]}   
];

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        BeforeComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class BeforeModule {}