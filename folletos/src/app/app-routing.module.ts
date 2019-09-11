import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '',component:WelcomeComponent, pathMatch:'full' },// Rutta de inicio
  { path: 'create',component:CreateComponent }, // Ruta que lleva a create
  { path: '**', redirectTo: '/', pathMatch: 'full' },// Ruta mal escrita reenvia a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
