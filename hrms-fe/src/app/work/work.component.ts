import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from '../data/formData.model';
import { ProfileService } from '../shared/profile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Component({
    selector: 'mt-wizard-work'
    , templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {

    baseUrl = environment.baseUrl;
    title = 'Work';
    private work: Work = new Work();
    form: any;
    workState: boolean;
    central: boolean;
    InterState: boolean;
    training: boolean;
    leave: boolean;
    selectedPrefix: any = '';
    selectedCombo: any = '';
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    Grade: any[];
    Service: any[];
    isGrade: any[];
    Position: any[];
    Recruitment: any[];
    isRecruitment: any[];
    State: any[];
    Cadre: any[];

    constructor(private router: Router, private _profileService: ProfileService, private http: HttpClient) {
    }

    ngOnInit() {

        this.workState = false;
        this.central = false;
        this.InterState = false;
        this.training = false;
        this.leave = false;
        const id = sessionStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['/login']);
        }
        this.readWork(id);
        this.getGradeCombo();
        this.getServiceCombo();
        this.getPositionCombo();
        this.getRecruitmentCombo();
        this.getStateCombo();
        this.getCadreCombo();

    }
    getCadreCombo(){
        this.http.get<any>(`${this.baseUrl}/api/Cadres`, { headers: this.headers })
        .subscribe(res => {
            this.Cadre = res;
        },
            err => {
                alert('error while getiing prefix');
            });

    }
    getStateCombo() {
        this.http.get<any>(`${this.baseUrl}/api/States`, { headers: this.headers })
            .subscribe(res => {
                this.State = res;
            },
                err => {
                    alert('error while getiing prefix');
                });
    }

    getGradeCombo() {
        this.http.get<any>(`${this.baseUrl}/api/Grades`, { headers: this.headers })
            .subscribe(res => {
                this.Grade = res;
            },
                err => {
                    alert('error while getiing prefix');
                });
    }
    getServiceCombo() {
        this.http.get<any>(`${this.baseUrl}/api/Services`, { headers: this.headers })
            .subscribe(res => {
                this.Service = res;
            },
                err => {
                    alert('error while getiing prefix');
                });
    }
    getPositionCombo() {
        this.http.get<any>(`${this.baseUrl}/api/Positions`, { headers: this.headers })
            .subscribe(res => {
                this.Position = res;
            },
                err => {
                    alert('error while getiing prefix');
                });
    }
    getRecruitmentCombo() {
        this.http.get<any>(`${this.baseUrl}/api/Recruitments`, { headers: this.headers })
            .subscribe(res => {
                this.Recruitment = res;

            },
                err => {
                    alert('error while getiing prefix');
                });
    }
    readWork(id) {
        this._profileService
            .readWork(id)
            .subscribe(data => {
                if (!data) {
                    this.work = new Work();
                }
                else {
                    this.work = data;
                }
            }, err => {
                alert('failed');
            })
    }

    save(form: any): any {
        if (!form.valid) {
            return false;
        }
        const id = sessionStorage.getItem('userId');
        this._profileService.createWork(id, this.work).subscribe(
            data => {
                console.log(data);
            }, err => {
                console.log(err);
            }
        )
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/dependants']);
        }
    }


    selectComboHandler(event: any) {
        this.selectedCombo = event.target.value;
        if (this.selectedCombo == 'IAS') {
            this.isRecruitment = [];
            this.isGrade = [];
            for (var i = 0; i < 3; i++) {
                this.isRecruitment.push(this.Recruitment[i]);

            }
            for (var i = 0; i < 7; i++) {
                this.isGrade.push(this.Grade[i]);
            }

        } else if (this.selectedCombo == 'IPS') {
            this.isRecruitment = [];
            this.isGrade = [];
            this.isRecruitment.push(this.Recruitment[0]);
            this.isRecruitment.push(this.Recruitment[3])
        for (var i = 0; i < 12; i++) {
                if(i==4 ||i==5 ||i==6 ){}
                
            else {
                this.isGrade.push(this.Grade[i]);
            }
        }
        } else if (this.selectedCombo == 'IFS') {
            this.isRecruitment = [];
            this.isGrade = [];
            this.isRecruitment.push(this.Recruitment[0]);
            this.isRecruitment.push(this.Recruitment[4]);
        for (var i = 0; i < 17; i++) {
                if(i==4 ||i==5 ||i==6 ||i==7 
                    ||i==8 ||i==9 ||i==10 ||i==11 ){}
                
            else {
                this.isGrade.push(this.Grade[i]);
            }
        }    

        }
    }


    selectChangeHandler(event: any) {
        this.selectedPrefix = event.target.value;
        /*alert(this.selectedPrefix);*/
        if (this.selectedPrefix == 'Cadre') {
            this.central = false;
            this.InterState = false;
            this.training = false;
            this.leave = false;
            this.workState = true;
        } else if (this.selectedPrefix == 'Central Deputation') {
            this.central = true;
            this.InterState = false;
            this.training = false;
            this.leave = false;
            this.workState = false;
        } else if (this.selectedPrefix == 'Ex-cadre') {
            this.workState = true;
            this.central = false;
            this.InterState = false;
            this.training = false;
            this.leave = false;
        } else if (this.selectedPrefix == 'Inter-cadre Deputation') {
            this.workState = false;
            this.central = false;
            this.InterState = true;
            this.training = false;
            this.leave = false;
        } else if (this.selectedPrefix == 'Foreign Assignment') {
            this.InterState = true;
            this.workState = false;
            this.central = false;
            this.training = false;
            this.leave = false;
        } else if (this.selectedPrefix == 'Training') {
            this.InterState = false;
            this.workState = false;
            this.central = false;
            this.training = true;
            this.leave = false;
        } else if (this.selectedPrefix == 'State Deputation') {
            this.InterState = false;
            this.workState = false;
            this.central = false;
            this.training = false;
            this.leave = false;
        } else if (this.selectedPrefix == 'Constitutional') {
            this.InterState = false;
            this.workState = false;
            this.central = false;
            this.training = false;
            this.leave = false;
        }

    }
}