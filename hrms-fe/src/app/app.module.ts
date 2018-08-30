import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { EducationComponent }   from './education/education.component';
import { DependantsComponent }      from './dependants/dependants.component';
import { SpouseComponent }      from './spouse/spouse.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { LoginService }       from      './shared/login.service';
import { ChangepasswordService }       from      './changepassword/changepassword.service';
import { ProfileService }    from './shared/profile.service';
import { WorkflowService }    from './workflow/workflow.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AislogoComponent } from './aislogo/aislogo.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,
                    HttpClientModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService },
                   ProfileService,
                   LoginService,
                   ChangepasswordService
                   ],

    declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, EducationComponent, ResultComponent, DependantsComponent, SpouseComponent, FooterComponent, HeaderComponent,LoginComponent, HomeComponent, AislogoComponent, ChangepasswordComponent],

    bootstrap:    [ AppComponent ]
})

export class AppModule {}