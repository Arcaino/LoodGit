import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RepositoryCardComponent } from './shared/components/repository-card-list/repository-card/repository-card.component';
import { RepositoryCardListComponent } from './shared/components/repository-card-list/repository-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryCardComponent,
    RepositoryCardListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
