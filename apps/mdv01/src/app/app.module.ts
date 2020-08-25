import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SoundsComponent } from './sounds/sounds.component';
import { SoundsListComponent } from './sounds/sounds-list/sounds-list.component';
import { SoundsDetailsComponent } from './sounds/sounds-details/sounds-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@master-detail-view01/material';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreDataModule, SoundsService } from '@master-detail-view01/core-data';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SoundsComponent,
    SoundsListComponent,
    SoundsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CoreDataModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [SoundsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
