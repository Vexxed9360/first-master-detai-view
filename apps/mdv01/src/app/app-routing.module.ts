import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SoundsComponent } from './sounds/sounds.component';

const routes: Routes = [
  { path: 'sounds', component: SoundsComponent },
  { path: '**', redirectTo: 'sounds' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
