import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInComponentComponent } from './Components/log-in-component/log-in-component.component';
import { ContentComponentComponent } from './Components/content-component/content-component.component';
import { MenuComponentComponent } from './Components/menu-component/menu-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialClass } from './material';
import { DesnaStranaComponentComponent } from './Components/desna-strana-component/desna-strana-component.component';
import { ObavestenjeComponentComponent } from './Components/obavestenje-component/obavestenje-component.component';
import { ProfileViewComponent } from './Components/profile-view/profile-view.component';
import { IzmenaProfilaUserComponent } from './Components/izmena-profila-user/izmena-profila-user.component';
import { NovoObavestenjeComponent } from './Components/novo-obavestenje/novo-obavestenje.component';
import { ForumComponent } from './Components/forum/forum.component';
import { ForumThreadViewComponent } from './Components/forum-thread-view/forum-thread-view.component';
import { DialogThreadAnswerComponent } from './Components/dialog-thread-answer/dialog-thread-answer.component';
import { NewForumThreadComponent } from './Components/new-forum-thread/new-forum-thread.component';
import { PregledDeceRoditeljComponent } from './Components/pregled-dece-roditelj/pregled-dece-roditelj.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponentComponent,
    ContentComponentComponent,
    MenuComponentComponent,
    DesnaStranaComponentComponent,
    ObavestenjeComponentComponent,
    ProfileViewComponent,
    IzmenaProfilaUserComponent,
    NovoObavestenjeComponent,
    ForumComponent,
    ForumThreadViewComponent,
    DialogThreadAnswerComponent,
    NewForumThreadComponent,
    PregledDeceRoditeljComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialClass
  ],
  entryComponents: [
    DialogThreadAnswerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
