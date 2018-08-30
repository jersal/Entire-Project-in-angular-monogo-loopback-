import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Education }            from './education';
import { ProfileService }     from '../shared/profile.service';
import { Qualification } from './qualification';
import { Language } from './language';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';



@Component({
    selector: 'mt-wizard-eduation'
    , templateUrl: './education.component.html'
})

export class EducationComponent implements OnInit {

    baseUrl = environment.baseUrl;
    editFlag = false
    editFlagLang = false
    file_id:string;
    file_name:string;
    title = 'Education info';
    private qualification: Qualification = new Qualification();
    language: Language = new Language();
    education: Education = new Education()
    form: any;
    Languages:any[];
    
    selectedFile:File = null;
    private headers = new HttpHeaders().set('Content-Type','application/json');
    private resume_url:string;

    constructor(private router: Router, private _profileService: ProfileService,private http:HttpClient) {
    }

    ngOnInit() {
        const id = sessionStorage.getItem('userId');
        if(!id){
           this.router.navigate(['/login']); 
        }
        this.readEducation(id);
        this.getResume(id); 
        this.getLanguagesCombo();
    }

    getLanguagesCombo(){
        this.http.get<any>(`${this.baseUrl}/api/Languages`, { headers: this.headers})
        .subscribe(res =>{
            this.Languages = res;
        },
        err =>{
           alert('error while getiing prefix');
        }); 
    }

    //uploadfile
    handleFileInput(event) {
        const id = sessionStorage.getItem('userId');
        const fd = new FormData();
        this.selectedFile = <File>event.target.files[0];
        fd.append('file',this.selectedFile,this.selectedFile.name);
        // this.http.post<File>(`http://localhost:4000/api/users/${id}/uploadDisplayPic`, fd)
        // this.http.post<File>(`${this.baseUrl}/api/containers/resume-${id}/upload`,fd)
        //     .subscribe(res =>{
        //         console.log(res);
        //         this.getResume(id); 
        //     });
        if(this.selectedFile.type == "application/pdf"){
            this.http.post<File>(`${this.baseUrl}/api/containers/resume-${id}/upload`,fd)
                .subscribe(res => {
                    console.log(res);
                    this.getResume(id);
                });
        }
        else{
            alert("upload valid pdf format");    
        }
    }

    getResume(id){
        this.http.get<File>(`${this.baseUrl}/api/containers/resume-${id}/files`,{headers:this.headers})
         .subscribe(res =>{
             var arr:any = res;
             if(arr.length == 0){
                // alert("no resume in your profile"); 
            }
            else{
                
             this.file_id = arr[arr.length-1]._id;
             this.file_name = arr[arr.length-1].filename;

             this.resume_url = `${this.baseUrl}/api/containers/resume-${id}/download/${this.file_id}`;  
            }
            
         },
         err =>{
            alert('error'); 
         }); 
     }
    //language
    addLanguage(){
        if(this.isEmpty(this.language)){
            console.log("language is empty")
            return console.log(JSON.stringify(this.language))

        }else{
            console.log("language is not emty")
            this.education.languages.push(this.language)
        this.language = new Language()
        }
    }

    languageEdit(indx){
        this.language = this.education.languages[indx]
        this.editFlag = true
    }

    languageDelete(valueToRemove){
        this.education.languages.splice(valueToRemove,1)

    }

    // isBlank(language){
    //     if(language.lang != null)
    //         true
    //     else
    //         false
    // }

    saveChangesLanguage(){
        this.language = new Language()
        this.editFlag = false
    }

//Qualifications
    addQualification(){
        if(this.isBlank(this.qualification))
        {
            console.log(this.qualification);
            return console.log(JSON.stringify(this.qualification))

        }else{
            console.log("qualification is not emty")
            this.education.qualifications.push(this.qualification)
            this.qualification = new Qualification()
        }
    }

    isBlank(qualification){
   
        if (qualification.eduqualification == null ) {
           return true
        }else if(qualification.university ==null){
            return true
        }else if(qualification.institute ==null){
            return true
         }else if(qualification.subject ==null){
             return true
         }else if(qualification.division ==null){
            return true
        }else if(qualification.year ==null){
            return true
        }
         else {
            return false
        }
    }


    qualificationEdit(indx){
        this.qualification = this.education.qualifications[indx]
        this.editFlag = true
    }

    qualificationDelete(valueToRemove){
       this.education.qualifications.splice(valueToRemove,1)
    }

    saveChanges(){
        this.qualification = new Qualification()
        this.editFlag = false
    }
    
    
    qualEmptyCheck:any[];

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
            this.qualEmptyCheck.push("key");
            console.log("qualification=" +key);

            return false;
        }
        return true;
    }
    //show or hide
    visible=false;
    showFlag=true;
    showQualification(){
        this.hideFlag=true;
        this.visible=true;
        this.showFlag=false;
    }
    hideFlag=false;
    hideQualification(){
        this.hideFlag=false;
        this.visible=false;
        this.showFlag=true;

    }
    showLanguage(){
        this.hideFlag=true;
        this.visible=true;
        this.showFlag=false;
    }
    hideLanguage(){
        this.hideFlag=false;
        this.visible=false;
        this.showFlag=true;

    }

    readEducation(id) {
        this._profileService
        .readEducation(id)
        .subscribe(data => {
             if(!data){
               this.education = new Education();
            }
            else{
               this.education = data;    
            }
           
           console.log( JSON.stringify(this.education))

        }, err => {
            console.log( "Fetch failed in education")
        })
    }

    save(form: any): any {
        if (!form.valid) {
           return false;
       }
       console.log(JSON.stringify(this.education))
       const userId = sessionStorage.getItem('userId');
        this._profileService.createEducation(userId, this.education).subscribe(
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
            this.router.navigate(['/work']);
        }
    }

}
