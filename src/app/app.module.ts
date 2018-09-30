import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes = [
  { path: '', loadChildren: 'app/layout/layout.module#LayoutModule' },
  { path: 'before', loadChildren: 'app/before/before.module#BeforeModule' },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
