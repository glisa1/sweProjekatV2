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
import { DetePregledComponent } from './Components/dete-pregled/dete-pregled.component';
import { PregledOcenaComponent } from './Components/pregled-ocena/pregled-ocena.component';
import { PregledIzostanakaComponent } from './Components/pregled-izostanaka/pregled-izostanaka.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpisOcenaProfesorComponent } from './Components/upis-ocena-profesor/upis-ocena-profesor.component';
import { ListaOdeljenjaComponent } from './Components/lista-odeljenja/lista-odeljenja.component';
import { ListaUcenikaComponent } from './Components/lista-ucenika/lista-ucenika.component';
import { ProfesorUpisOceneNapomeneIzostankaComponent } from './Components/profesor-upis-ocene-napomene-izostanka/profesor-upis-ocene-napomene-izostanka.component';
import { NovaOcenaProfesorComponent } from './Components/nova-ocena-profesor/nova-ocena-profesor.component';
import { NovaNapomenaProfesorComponent } from './Components/nova-napomena-profesor/nova-napomena-profesor.component';
import { NoviIzostanakProfesorComponent } from './Components/novi-izostanak-profesor/novi-izostanak-profesor.component';
import { DodavanjeProfilaComponent } from './Components/dodavanje-profila/dodavanje-profila.component';
import { PregledIzmenaBrisanjeProfilaComponent } from './Components/pregled-izmena-brisanje-profila/pregled-izmena-brisanje-profila.component';
import { DijalogNoviDjakComponent } from './Components/dijalog-novi-djak/dijalog-novi-djak.component';
import { DijalogNoviRoditeljComponent } from './Components/dijalog-novi-roditelj/dijalog-novi-roditelj.component';
import { DijalogNoviProfesorComponent } from './Components/dijalog-novi-profesor/dijalog-novi-profesor.component';
import { PIBProfilaComponent } from './Components/pibprofila/pibprofila.component';
import { PIBStudentComponent } from './Components/pibstudent/pibstudent.component';
import { PIBParentComponent } from './Components/pibparent/pibparent.component';
import { PIBTeacherComponent } from './Components/pibteacher/pibteacher.component';
import { PIBAdminComponent } from './Components/pibadmin/pibadmin.component';
import { ChangeStudentProfileAdminComponent } from './Components/change-student-profile-admin/change-student-profile-admin.component';
import { ChangeParentProfileAdminComponent } from './Components/change-parent-profile-admin/change-parent-profile-admin.component';
import { AddChildToParentAdminComponent } from './Components/add-child-to-parent-admin/add-child-to-parent-admin.component';
import { ChangeAdminProfileAdminComponent } from './Components/change-admin-profile-admin/change-admin-profile-admin.component';
import { ChangeTeacherProfileAdminComponent } from './Components/change-teacher-profile-admin/change-teacher-profile-admin.component';
import { AddClassesToTeacherAdminComponent } from './Components/add-classes-to-teacher-admin/add-classes-to-teacher-admin.component';
import { AddMainClassToTeacherAdminComponent } from './Components/add-main-class-to-teacher-admin/add-main-class-to-teacher-admin.component';

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
    PregledDeceRoditeljComponent,
    DetePregledComponent,
    PregledOcenaComponent,
    PregledIzostanakaComponent,
    UpisOcenaProfesorComponent,
    ListaOdeljenjaComponent,
    ListaUcenikaComponent,
    ProfesorUpisOceneNapomeneIzostankaComponent,
    NovaOcenaProfesorComponent,
    NovaNapomenaProfesorComponent,
    NoviIzostanakProfesorComponent,
    DodavanjeProfilaComponent,
    PregledIzmenaBrisanjeProfilaComponent,
    DijalogNoviDjakComponent,
    DijalogNoviRoditeljComponent,
    DijalogNoviProfesorComponent,
    PIBProfilaComponent,
    PIBStudentComponent,
    PIBParentComponent,
    PIBTeacherComponent,
    PIBAdminComponent,
    ChangeStudentProfileAdminComponent,
    ChangeParentProfileAdminComponent,
    AddChildToParentAdminComponent,
    ChangeAdminProfileAdminComponent,
    ChangeTeacherProfileAdminComponent,
    AddClassesToTeacherAdminComponent,
    AddMainClassToTeacherAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialClass,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogThreadAnswerComponent,
    NovaOcenaProfesorComponent,
    NovaNapomenaProfesorComponent,
    NoviIzostanakProfesorComponent,
    DijalogNoviDjakComponent,
    DijalogNoviRoditeljComponent,
    DijalogNoviProfesorComponent,
    AddChildToParentAdminComponent,
    AddClassesToTeacherAdminComponent,
    AddMainClassToTeacherAdminComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
