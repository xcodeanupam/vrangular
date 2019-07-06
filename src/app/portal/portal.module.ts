import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import { PreviewBackgroundImgComponent } from './components/preview-background-img/preview-background-img.component';
import { ThreeDModelViewComponent } from './components/three-d-model-view/three-d-model-view.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ViewWebappComponent } from './components/view-webapp/view-webapp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AuthServices } from './service/auth.service';
import { UserserviceService } from './service/userservice.service';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
import {MatDialogModule} from '@angular/material/dialog';

const portalRoutes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'new-web-app', component: CreateWebComponent },
  { path: 'name-webapp', component: CreateNameWebappComponent },
  { path: 'webapp', component: WebAppComponent },
  { path: 'webapp/background-image', component: BackgroundComponent },
  { path: 'webapp/audio', component: AudioComponent },
  { path: 'webapp/3d-model', component: ThreeDModelComponent },
  { path: 'webapp/button-style', component: ButtonStyleComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'background/preview', component: PreviewBackgroundImgComponent },
  { path: '3d-model/view', component: ThreeDModelViewComponent },
  { path: 'view', component: ViewWebappComponent },
];


@NgModule({
  declarations: [LoginComponent, CreateWebComponent, CreateNameWebappComponent, WebAppComponent, DropZoneDirective,
    FileSizePipe, BackgroundComponent, AudioComponent, ThreeDModelComponent, ButtonStyleComponent, RegisterComponent, PreviewBackgroundImgComponent, ThreeDModelViewComponent, ViewWebappComponent],
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule,
    CommonModule, MatCardModule, FlexLayoutModule, MatFormFieldModule, MatButtonModule, MatIconModule,
    MatSnackBarModule, MatInputModule, ColorPickerModule, MatDialogModule,
    DragDropModule, JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
    RouterModule.forChild(portalRoutes)
  ], providers: [
    AuthServices, UserserviceService

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PortalModule { }


