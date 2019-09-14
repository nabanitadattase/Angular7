import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourcesComponent } from './sources/sources.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'sources/:source', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
