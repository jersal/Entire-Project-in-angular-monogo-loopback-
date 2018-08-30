import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Spouse }            from '../data/formData.model';
import { ProfileService }     from '../shared/profile.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component ({
    selector:     'mt-wizard-spouse'
    ,templateUrl: './spouse.component.html'
})

export class SpouseComponent implements OnInit {

    baseUrl = environment.baseUrl
    title = 'Spouse Info';
    form: any;
    Prefix:any[];
    Gender:any[];
    Service:any[];
    private spouse: Spouse = new Spouse();
    selectedFile:File = null;
    private headers = new HttpHeaders().set('Content-Type','application/json');
    private img_url:string =  `../..${this.baseUrl}/assets/images/Avatar.jpg`; 
    constructor(private router: Router, private _profileService: ProfileService,private http:HttpClient) {
    }

    ngOnInit() {
       const id = sessionStorage.getItem('userId'); 
       if(!id){
           this.router.navigate(['/login']); 
        }
        this.readSpouse(id);
        this.getSpousePic(id);
        this.getPrefixCombo();
        this.getGenderCombo();
        this.getServiceCombo();
    }

    getPrefixCombo(){
        this.http.get<any>(`${this.baseUrl}/api/Prefixes`, { headers: this.headers})
        .subscribe(res =>{
            this.Prefix = res;
        },
        err =>{
           alert('error while getiing prefix');
        }); 
    }

     getGenderCombo(){
        this.http.get<any>(`${this.baseUrl}/api/Genders`, { headers: this.headers})
        .subscribe(res =>{
            this.Gender = res;
        },
        err =>{
           alert('error while getiing Gender');
        }); 
    }
    getServiceCombo(){
        this.http.get<any>(`${this.baseUrl}/api/Services`, { headers: this.headers})
        .subscribe(res =>{
            this.Service = res;
        },
        err =>{
           alert('error while getiing Gender');
        }); 
    }

    handleFileInput(event) {
        const id = sessionStorage.getItem('userId');
        const fd = new FormData();
        this.selectedFile = <File>event.target.files[0];
        fd.append('image',this.selectedFile,this.selectedFile.name);
        // this.http.post<File>(`/api/users/${id}/uploadDisplayPic`, fd)
        // this.http.post<File>(`${this.baseUrl}/api/containers/spouse-${id}/upload`,fd)
        //     .subscribe(res =>{
        //         console.log(res);
        //         this.getSpousePic(id);
        //     });

        if(this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg" ){
            this.http.post<File>(`${this.baseUrl}/api/containers/spouse-${id}/upload`,fd)
            .subscribe(res => {
                console.log(res);
                this.getSpousePic(id);
            });
        }
        else{
            alert("upload valid jpg/png");    
        }
    }

    getSpousePic(id){
       this.http.get<File>(`${this.baseUrl}/api/containers/spouse-${id}/files`,{headers:this.headers})
        .subscribe(res =>{
            var arr:any = res;
            if(arr.length == 0){
                this.img_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`; 
            }
            else{
            const file_id = arr[arr.length-1]._id;
            this.img_url = `${this.baseUrl}/api/containers/spouse-${id}/download/${file_id}`;
           }
        },
        err => {
           this.img_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`; 
        }); 
        console.log('img url set:'+ this.img_url)
    }

    readSpouse(id){
        this._profileService
        .readSpouse(id)
        .subscribe(data => {
            if(!data){
               this.spouse = new Spouse();
            }
            else{
               this.spouse = data;    
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
        this._profileService.createSpouse(id,this.spouse).subscribe(
            data=>{
                console.log(data);
            },err=>{
                console.log(err);
            }
         )
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/education']);
        }
    }
    selectedPrefix: string='';
    selectedValue: string='';
    constitutional: boolean = false;
    employed:boolean = false;
    aisService: boolean = false;
    central: boolean = false;
    state:boolean = false;  
    selectChangeHandler (event:any){
        this.selectedPrefix = event.target.value;
        /*alert(this.selectedPrefix);*/
        if (this.selectedPrefix == 'Constitutional posts') { 
            this.constitutional = true;
            this.employed = false;
         }else if (this.selectedPrefix == 'Employed') {
            this.employed = true;
            this.constitutional = false;
         }else if (this.selectedPrefix == 'Retired') {
            this.constitutional = false;
            this.employed = true;
         }else if (this.selectedPrefix == 'Not Employed') {
            this.constitutional = false;
            this.employed = false;
         }
         
    }
    jobTypeHandler(event:any){
        this.selectedValue = event.target.value;
       /* alert(this.selectedValue);*/
        if (this.selectedValue == 'AIS') { 
            this.aisService = true;
            this.central = false;
            this.employed = false;
         }if (this.selectedValue == 'Central GovernmentOrPSU') { 
            this.central = true;
            this.state = false;
            this.aisService = false;
         }if (this.selectedValue == 'State GovernmentOrPSU') { 
            this.state = true;
            this.aisService = false;
            this.central = false;
         }

    }
}
