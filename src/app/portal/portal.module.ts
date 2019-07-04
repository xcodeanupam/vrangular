import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CreateWebComponent } from './components/create-web/create-web.component';
import { CreateNameWebappComponent } from './components/create-name-webapp/create-name-webapp.component';
import { WebAppComponent } from './components/web-app/web-app.component';
import { BackgroundComponent } from './components/background/background.component';
import { AudioComponent } from './components/audio/audio.component';
import { ThreeDModelComponent } from './components/three-d-model/three-d-model.component';
import { ButtonStyleComponent } from './components/button-style/button-style.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropZoneDirective } from './components/background/dragDrop.directive';
import { FileSizePipe } from './components/background/file-size.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';

const portalRoutes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'new-web-app', component: CreateWebComponent },
  { path: 'name-webapp', component: CreateNameWebappComponent },
  { path: 'webapp', component: WebAppComponent },
  { path: 'webapp/background-image', component: BackgroundComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [LoginComponent, CreateWebComponent, CreateNameWebappComponent, WebAppComponent, DropZoneDirective,
    FileSizePipe, BackgroundComponent, AudioComponent, ThreeDModelComponent, ButtonStyleComponent, RegisterComponent],
  imports: [
    CommonModule, MatCardModule, FlexLayoutModule, MatFormFieldModule, MatButtonModule, MatIconModule, 
    MatSnackBarModule, MatInputModule,
    DragDropModule,
    RouterModule.forChild(portalRoutes)
  ]
})
export class PortalModule { }


