import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CreateWebComponent } from './components/create-web/create-web.component';
import { CreateNameWebappComponent } from './components/create-name-webapp/create-name-webapp.component';
import { WebAppComponent } from './components/web-app/web-app.component';


const portalRoutes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'new-web-app', component: CreateWebComponent },
  { path: 'name-webapp', component: CreateNameWebappComponent},
  { path: 'webapp', component: WebAppComponent},
];

@NgModule({
  declarations: [LoginComponent, CreateWebComponent, CreateNameWebappComponent, WebAppComponent],
imports: [
    CommonModule, MatCardModule, FlexLayoutModule, MatFormFieldModule, MatButtonModule, MatIconModule,
    RouterModule.forChild(portalRoutes)
  ]
})
export class PortalModule { }
