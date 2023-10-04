import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitGuideComponent } from './guides/git-guide/git-guide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ArraysComponent } from './guides/arrays/arrays.component';


@NgModule({
  declarations: [
    AppComponent,
    GitGuideComponent,
    WelcomeComponent,
    ArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatExpansionModule,
    RouterModule,
    RouterModule.forRoot([
      
      { path: 'git', component: GitGuideComponent },
      { path: 'arrays', component: ArraysComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
