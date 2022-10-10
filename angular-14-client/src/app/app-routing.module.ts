import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AddEnvioComponent } from './components/add-envio/add-envio.component';
import { EnviosListComponent } from './components/envios-list/envios-list.component';
import { EnvioDetailsComponent } from './components/envio-details/envio-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'addEnvio', pathMatch: 'full' },
  { path: 'addEnvio', component: AddEnvioComponent },
  { path: 'envios', component: EnviosListComponent },
  { path: 'envios/:id_envio', component: EnvioDetailsComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }