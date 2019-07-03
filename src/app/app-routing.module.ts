import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalModule } from './portal/portal.module';

const routes: Routes = [];

@NgModule({
  imports: [
    PortalModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule, PortalModule]
})
export class AppRoutingModule { }
