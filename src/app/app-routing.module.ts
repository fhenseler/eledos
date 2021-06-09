import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ItemListComponent } from './Components/item-list/item-list.component';
import { CharacterListComponent } from './Components/character-list/character-list.component';
import { PowerlevelingComponent } from './Components/powerleveling/powerleveling.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/notfound/notfound.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'itemList', component: ItemListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'characterList', component: CharacterListComponent },
  { path: 'powerleveling', component: PowerlevelingComponent },
  { path: 'contact', component: ContactComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
