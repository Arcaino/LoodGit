import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { RepositoryCardComponent } from './shared/components/repository-card-list/repository-card/repository-card.component';
import { RepositoryCardListComponent } from './shared/components/repository-card-list/repository-card-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonRepositoryCardComponent } from './shared/components/repository-card-list/skeleton-repository-card/skeleton-repository-card.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryCardComponent,
    RepositoryCardListComponent,
    HomeComponent,
    SearchComponent,
    SkeletonRepositoryCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    AppRoutingModuleModule,
    MatPaginatorModule,
    NgxSkeletonLoaderModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
