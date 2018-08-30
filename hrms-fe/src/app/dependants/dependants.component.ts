  import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Dependants }            from '../data/formData.model';
import { ProfileService }     from '../shared/profile.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component ({
    selector:     'dependants'
    ,templateUrl: './dependants.component.html'
})

export class DependantsComponent implements OnInit {
   
    baseUrl = environment.baseUrl;
    title = 'Dependant Details';
    private dependants: Dependants = new Dependants();
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    selectedFile: File = null;
    private childImg_url: string;
    private parentImg_url: string;
    private othersImg_url: string;
    form: any;
    Gender:any[];
    Cadre: any[];
    Service: any[];

    
    // visible=false;
    // activateSaveButton:Boolean = false;

    // showChild(){
    //     this.visible = !this.visible;
    //     this.activateSaveButton = true;
    // }

    // parentVisible=false;
    // showParent(){
    //     this.parentVisible = !this.parentVisible;
    //     this.activateSaveButton = true;
    // }

    // othersVisible=false;
    // showOthers(){
    //     this.othersVisible = !this.othersVisible;
    //     this.activateSaveButton = true;
    // }


    constructor(private router: Router, private _profileService: ProfileService,private http: HttpClient) {
    }

    ngOnInit() {
       const id = sessionStorage.getItem('userId'); 
       if(!id){
           this.router.navigate(['/login']); 
        }
        this.readDependants(id);
        this.getGenderCombo();
        this.getChildPic(id);
        this.getParentPic(id);
        this.getOthersPic(id);
        this.getCadreCombo();
        this.getServiceCombo(); 


    }
//Combo From DB
getCadreCombo(){
    this.http.get<any>(`${this.baseUrl}/api/Cadres`, { headers: this.headers })
    .subscribe(res => {
        this.Cadre = res;
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
//Combo From DB
//image upload other
handleOthersInput(event) {
    const id = sessionStorage.getItem('userId');
    const fd = new FormData();
    this.selectedFile = <File>event.target.files[0];
    fd.append('image', this.selectedFile, this.selectedFile.name);
    if(this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg" ){
        this.http.post<File>(`${this.baseUrl}/api/containers/otherImage-${id}/upload`, fd)
            .subscribe(res => {
                console.log(res);
                this.getOthersPic(id);
            });
    }
    else{
        alert("upload valid jpg/png");    
    }
}

getOthersPic(id) {
   this.http.get<File>(`${this.baseUrl}/api/containers/otherImage-${id}/files`, { headers: this.headers})
    .subscribe(res =>{
        var arr: any = res;
        if(arr.length == 0){
            this.othersImg_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`; 
        }
        else{
        const file_id = arr[arr.length-1]._id;
        this.othersImg_url = `${this.baseUrl}/api/containers/otherImage-${id}/download/${file_id}`;
       }
    },
    err =>{
       this.othersImg_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`; 
    }); 
}
//image upload other
//image upload child
handleFileInput(event) {
    const id = sessionStorage.getItem('userId');
    const fd = new FormData();
    this.selectedFile = <File>event.target.files[0];
    fd.append('image', this.selectedFile, this.selectedFile.name);
    if(this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg" ){
        this.http.post<File>(`${this.baseUrl}/api/containers/childImage-${id}/upload`, fd)
            .subscribe(res => {
                console.log(res);
                this.getChildPic(id);
            });
    }
    else{
        alert("upload valid jpg/png");    
    }
}

getChildPic(id) {
   this.http.get<File>(`${this.baseUrl}/api/containers/childImage-${id}/files`, { headers: this.headers})
    .subscribe(res =>{
        var arr: any = res;
        if(arr.length == 0){
            this.childImg_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`; 
        }
        else{
        const file_id = arr[arr.length-1]._id;
        this.childImg_url = `${this.baseUrl}/api/containers/childImage-${id}/download/${file_id}`;
       }
    },
    err =>{
       this.childImg_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`; 
    }); 
}
// image upload child

//image upload parent
handleParentInput(event) {
    const id = sessionStorage.getItem('userId');
    const fd = new FormData();
    this.selectedFile = <File>event.target.files[0];
    fd.append('image', this.selectedFile, this.selectedFile.name);
    if(this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpeg" ){
        this.http.post<File>(`${this.baseUrl}/api/containers/parentImage-${id}/upload`, fd)
            .subscribe(res => {
                console.log(res);
                this.getParentPic(id);
            });
    }
    else{
        alert("upload valid jpg/png");    
    }
}

getParentPic(id) {
   this.http.get<File>(`${this.baseUrl}/api/containers/parentImage-${id}/files`, { headers: this.headers})
    .subscribe(res =>{
        var arr: any = res;
        if(arr.length == 0){
            this.parentImg_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`; 
        }
        else{
        const file_id = arr[arr.length-1]._id;
        this.parentImg_url = `${this.baseUrl}/api/containers/parentImage-${id}/download/${file_id}`;
       }
    },
    err =>{
       this.parentImg_url = `../..${this.baseUrl}/assets/images/Avatar.jpg`; 
    }); 
}

//image upload parent

//image upload//dropdown form DB
    getGenderCombo(){
        this.http.get<any>(`${this.baseUrl}/api/Genders`, { headers: this.headers})
        .subscribe(res =>{
            this.Gender = res;
        },
        err =>{
           alert('error while getiing Gender');
        }); 
    }

    selectedPrefix: string='';
    selectedValue: string='';
    childJobType: boolean = false;
    childJobDetails: boolean = false;
    parentJobType: boolean = false;
    parentJobDetails: boolean = false;
    othersJobType: boolean = false;
    othersJobDetails: boolean = false;
    
    childHandler(event:any){
        this.selectedPrefix = event.target.value;
        /*alert(this.selectedPrefix);*/
        if (this.selectedPrefix == 'AIS') { 
           this.childJobType = true;
           this.childJobDetails = true;
         }else if (this.selectedPrefix == 'Not') {
            this.childJobType = false;
            this.childJobDetails = false;
         }
         
    }
    parentHandler(event:any){
        this.selectedValue = event.target.value;
        /*alert(this.selectedValue);*/
        if (this.selectedValue == 'AIS') { 
           this.parentJobType = true;
           this.parentJobDetails = true;
         }else if (this.selectedPrefix == 'Not') {
           this.parentJobType = false;
           this.parentJobDetails = false;
         }
    }
    othersHandler(event:any){
        this.selectedValue = event.target.value;
       /* alert(this.selectedValue);*/
        if (this.selectedValue == 'AIS') { 
            this.othersJobType = true;
            this.othersJobDetails = true;
         }else if (this.selectedPrefix == 'Not') {
           this.othersJobType = false;
           this.othersJobDetails = false;
         }

    }
    // activateSaveAction(){
    //     this.activateSaveButton = true;

    // }


    readDependants(id){
        this._profileService
        .readDependants(id)
        .subscribe(data => {
             if(!data){
               this.dependants = new Dependants();
            }
            else{
               this.dependants = data;    
            }        }, err => {
            alert('failed');
        })
    }

    save(form: any): any {
        // if (!form.valid) {
        //     return false;
        // }
        const id = sessionStorage.getItem('userId');   
        this._profileService.createDependants(id,this.dependants).subscribe(
            data=>{
                console.log(data);
                this.router.navigate(['/home']);
            },err=>{
                console.log(err);
            }
         )
        // return true;
    }

   

    goToNext(form: any) {
        // if (this.save(form)) {
            
        // }
        this.save(form);
    }
  
    
}