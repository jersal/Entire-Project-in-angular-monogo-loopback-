import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent }    from './personal/personal.component';
import { WorkComponent }        from './work/work.component';
import { EducationComponent }     from './education/education.component';
import { SpouseComponent }      from './spouse/spouse.component';
import { DependantsComponent }      from './dependants/dependants.component';
import { LoginComponent }      from './login/login.component';
import { HomeComponent }      from './home/home.component';
import { ChangepasswordComponent }      from './changepassword/changepassword.component';

import { ResultComponent }      from './result/result.component';

import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';


export const appRoutes: Routes = [
    // 1st Route
    { path: 'personal',  component: PersonalComponent },
     // 1st Route
     { path: 'login',  component: LoginComponent },
     { path: 'home',  component: HomeComponent },
    // 2nd Route
    { path: 'work',  component: WorkComponent },
    // 3rd Route
    { path: 'education',  component: EducationComponent },
    // 4th Route
    { path: 'spouse',  component: SpouseComponent },
    // 5th Route
    { path: 'dependants',  component: DependantsComponent },

    { path: 'changepassword',  component: ChangepasswordComponent },
    // 6th Route
    // { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    // 7th Route
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    // 8th Route
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}