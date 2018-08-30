import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from '../data/formData.model';
import { ProfileService } from '../shared/profile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { DISABLED } from '@angular/forms/src/model';

@Component({
    selector: 'personal',
    templateUrl: './personal.component.html'
})
export class PersonalComponent implements OnInit {

    baseUrl = environment.baseUrl;
    title = 'Basic Info';
    personal: Personal = new Personal();
    form: any;
    Prefix: any[];
    Gender: any[];
    selectedFile: File = null;
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private img_url: string;

    constructor(private router: Router, private _profileService: ProfileService, private http: HttpClient) {
    }

    ngOnInit() {
        const id = sessionStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['/login']);
        }
        this.readProfile(id);
        this.getProfilePic(id);
        this.getPrefixCombo();
        this.getGenderCombo();
    }


    getPrefixCombo() {
        this.http.get<any>(`${this.baseUrl}/api/Prefixes`, { headers: this.headers })
            .subscribe(res => {
                this.Prefix = res;
            },
                err => {
                    alert('error while getiing prefix');
                });
    }

    getGenderCombo() {
        this.http.get<any>(`${this.baseUrl}/api/Genders`, { headers: this.headers })
            .subscribe(res => {
                this.Gender = res;
            },
                err => {
                    alert('error while getiing Gender');
                });
    }

    handleFileInput(event) {
        const id = sessionStorage.getItem('userId');
        const fd = new FormData();
        this.selectedFile = <File>event.target.files[0];
        fd.append('image', this.selectedFile, this.selectedFile.name);
        if (this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg") {
            this.http.post<File>(`${this.baseUrl}/api/containers/profile-${id}/upload`, fd)
                .subscribe(res => {
                    console.log(res);
                    this.getProfilePic(id);
                });
        }
        else {
            alert("upload valid jpg/png");
        }
    }

    getProfilePic(id) {
        this.http.get<File>(`${this.baseUrl}/api/containers/profile-${id}/files`, { headers: this.headers })
            .subscribe(res => {
                var arr: any = res;
                if (arr.length == 0) {
                    this.img_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`;
                }
                else {
                    const file_id = arr[arr.length - 1]._id;
                    this.img_url = `${this.baseUrl}/api/containers/profile-${id}/download/${file_id}`;
                }
            },
                err => {
                    this.img_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`;
                });
    }

    readProfile(id) {
        this._profileService
            .readProfile(id)
            .subscribe(data => {
                if (!data) {
                    this.personal = new Personal();
                }
                else {
                    this.personal = data;
                }
                console.log('component:' + JSON.stringify(this.personal));
            }, err => {
                alert('failed');
            })
    }

    save(form: any): any {
        if (!form.valid) {
            return false;
        }
        const id = sessionStorage.getItem('userId');
        this._profileService.createProfile(id, this.personal).subscribe(
            data => {
                console.log(data);
            }, err => {
                console.log(err);
            }
        )
        return true;
    }

    disabled = false;
    goToNext(form: any) {
        if (this.save(form)) {
            if (this.personal.maritialStatus == 'Married') {
                this.router.navigate(['/spouse']);
            } else {
                this.router.navigate(['/education']);

               
            }

        }
    }


}
