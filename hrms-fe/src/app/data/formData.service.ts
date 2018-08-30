import { Injectable } from '@angular/core';
import { FormData, Personal, Spouse, Dependants } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS }  from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isEducationFormValid: boolean = false;
    private isSpouseFormValid: boolean = false;
    private isDependantsFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            fullName: this.formData.fullName,
            userPrefix: this.formData.userPrefix,
            dateOfBirth: this.formData.dateOfBirth,
            aadhaarNumber: this.formData.aadhaarNumber,
            penNumber: this.formData.penNumber,
            email: this.formData.email,
            mobile: this.formData.mobile,
            gender:this.formData.gender,
            maritialStatus:this.formData.maritialStatus
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.fullName = data.fullName;
        this.formData.userPrefix = data.userPrefix;
        this.formData.dateOfBirth = data.dateOfBirth;
        this.formData.aadhaarNumber = data.aadhaarNumber;
        this.formData.penNumber = data.penNumber;
        this.formData.email = data.email;
        this.formData.mobile = data.mobile;
        this.formData.gender = data.gender;
        this.formData.maritialStatus=data.maritialStatus;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }


    // getWork(): Work {
    //     // Return the Personal data
    //     var work: Work = {
    //         workService: this.formData.workService,
    //         cadre: this.formData.cadre,
    //         batch: this.formData.batch,
    //         dateOfAllotment: this.formData.dateOfAllotment,
    //         identityNumber: this.formData.identityNumber,
    //         modeOfRecruitment: this.formData.modeOfRecruitment,
    //         domicile: this.formData.domicile,
    //         motherTongue: this.formData.motherTongue,
    //         scaleOfPay: this.formData.scaleOfPay,
    //         position: this.formData.position,
    //         nameOfPost: this.formData.nameOfPost,
    //         nameOfPostCentral: this.formData.nameOfPostCentral,
    //         pinCodeCentral: this.formData.pinCodeCentral,
    //         officeTelCentral: this.formData.officeTelCentral,
    //         officeFaxStateEx: this.formData.officeFaxStateEx,
    //         departmentOrPsu: this.formData.departmentOrPsu,
    //         pinCode: this.formData.pinCode,
    //         officeTel: this.formData.officeTel,
    //         workEmail: this.formData.workEmail,
    //         workMobile: this.formData.workMobile,
    //         officeFax: this.formData.officeFax,
    //         residencePh: this.formData.residencePh,
    //         residenceAddress: this.formData.residenceAddress,
    //         startCentralDeputation: this.formData.startCentralDeputation,
    //         ministryOrDepartmentOrPsu: this.formData.ministryOrDepartmentOrPsu,
    //         nameOfTraining: this.formData.nameOfTraining,
    //         trainingDuration: this.formData.trainingDuration,
    //         trainingPlace: this.formData.trainingPlace,
    //         dateOfStartingLeave: this.formData.dateOfStartingLeave
    //     };
    //     return work;
    // }

    // setWork(data: Work) {
    //     // Update the Work data only when the Work Form had been validated successfully
    //     this.isWorkFormValid = true;
    //     this.formData.workService = data.workService;
    //     this.formData.cadre  = data.cadre;
    //     this.formData.batch = data.batch;
    //     this.formData.dateOfAllotment = data.dateOfAllotment;
    //     this.formData.identityNumber = data.identityNumber;
    //     this.formData.modeOfRecruitment = data.modeOfRecruitment;
    //     this.formData.domicile = data.domicile;
    //     this.formData.motherTongue = data.motherTongue;
    //     this.formData.scaleOfPay = data.scaleOfPay;
    //     this.formData.position = data.position;
    //     this.formData.nameOfPost = data.nameOfPost;
    //     this.formData.nameOfPostCentral=data.nameOfPostCentral,
    //     this.formData.pinCodeCentral=data.pinCodeCentral,
    //     this.formData.officeTelCentral=data.officeTelCentral,
    //     this.formData.officeFaxStateEx=data.officeFaxStateEx,
    //     this.formData.departmentOrPsu = data.departmentOrPsu;
    //     this.formData.pinCode = data.pinCode;
    //     this.formData.officeTel = data.officeTel;
    //     this.formData.workEmail = data.workEmail;
    //     this.formData.workMobile = data.workMobile;
    //     this.formData.officeFax = data.officeFax;
    //     this.formData.residencePh = data.residencePh;
    //     this.formData.residenceAddress = data.residenceAddress;
    //     this.formData.startCentralDeputation = data.startCentralDeputation;
    //     this.formData.ministryOrDepartmentOrPsu = data.ministryOrDepartmentOrPsu;
    //     this.formData.nameOfTraining = data.nameOfTraining;
    //     this.formData.trainingDuration = data.trainingDuration;
    //     this.formData.trainingPlace = data.trainingPlace;
    //     this.formData.dateOfStartingLeave = data.dateOfStartingLeave;
    //     this.workflowService.validateStep(STEPS.work);
    // }

    // getSpouse(): Spouse {
    //     // Return the Personal data
    //     var spouse: Spouse = {
    //         spousePrefix: this.formData.spousePrefix,
    //         spouseFullName: this.formData.spouseFullName,
    //         spouseGender: this.formData.spouseGender,
    //         spouseDateOfBirth: this.formData.spouseDateOfBirth,
    //         spouseAdhaarNumber: this.formData.spouseAdhaarNumber,
    //         spouseNationality: this.formData.spouseNationality,
    //         spouseEmail: this.formData.spouseEmail,
    //         spousePhoto: this.formData.spousePhoto,
    //         spouseEmployment: this.formData.spouseEmployment,
    //         spouseEmploymentType: this.formData.spouseEmploymentType,
    //         spouseConstitutionalPost:this.formData.spouseConstitutionalPost,
    //         spouseService: this.formData.spouseService,
    //         spouseCadre: this.formData.spouseCadre,
    //         spouseBatch: this.formData.spouseBatch,
    //         spouseDateOfAllotment: this.formData.spouseDateOfAllotment,
    //         spouseIdentityNumber: this.formData.spouseIdentityNumber,
    //         spousePost: this.formData.spousePost,
    //         spouseMinistry: this.formData.spouseMinistry,
    //         spouseDepartment: this.formData.spouseDepartment,
    //         spouseOrganization: this.formData.spouseOrganization,
    //         spousePostState: this.formData.spousePostState,
    //         spouseMinistryState: this.formData.spouseMinistryState,
    //         spouseDepartmentState: this.formData.spouseDepartmentState,
    //         spouseOrganizationState: this.formData.spouseOrganizationState        
                 
    //     };
    //     return spouse;
    // }

    // setSpouse(data: Spouse) {
    //     // Update the Spouse data only when the Spouse Form had been validated successfully
    //     this.isSpouseFormValid = true;
       
    //     this.formData.spousePrefix = data.spousePrefix;
    //     this.formData.spouseFullName =data.spouseFullName;
    //     this.formData.spouseGender =data.spouseGender;
    //     this.formData.spouseDateOfBirth =data.spouseDateOfBirth;
    //     this.formData.spouseAdhaarNumber =data.spouseAdhaarNumber;
    //     this.formData.spouseNationality =data.spouseNationality;
    //     this.formData.spouseEmail =data.spouseEmail;
    //     this.formData.spousePhoto =data.spousePhoto;
    //     this.formData.spouseEmployment =data.spouseEmployment;
    //     this.formData.spouseEmploymentType =data.spouseEmploymentType;
    //     this.formData.spouseConstitutionalPost =data.spouseConstitutionalPost;
    //     this.formData.spouseService =data.spouseService;
    //     this.formData.spouseCadre =data.spouseCadre;
    //     this.formData.spouseBatch =data.spouseBatch;
    //     this.formData.spouseDateOfAllotment =data.spouseDateOfAllotment;
    //     this.formData.spouseIdentityNumber =data.spouseIdentityNumber;
    //     this.formData.spousePost =data.spousePost;
    //     this.formData.spouseMinistry =data.spouseMinistry;
    //     this.formData.spouseOrganization =data.spouseOrganization;
    //     this.formData.spouseDepartment =data.spouseDepartment;
    //     this.formData.spousePostState =data.spousePostState;
    //     this.formData.spouseMinistryState =data.spouseMinistryState;
    //     this.formData.spouseDepartmentState =data.spouseDepartmentState;
    //     this.formData.spouseOrganizationState =data.spouseOrganizationState;

    //     this.workflowService.validateStep(STEPS.spouse);
    // }

    // getDependants(): Dependants {
    //     // Return the Personal data
    //     var dependants: Dependants = {
    //         childFullName: this.formData.childFullName,
    //         childGender: this.formData.childGender,
    //         childRelation: this.formData.childRelation,
    //         childDateOfBirth: this.formData.childDateOfBirth,
    //         childEmploy: this.formData.childEmploy,
    //         childAis: this.formData.childAis,
    //         parentFullName: this.formData.parentFullName,
    //         parentRelation: this.formData.parentRelation,
    //         parentDateOfBirth: this.formData.parentDateOfBirth,
    //         parentEmploy: this.formData.parentEmploy,
    //         parentAis: this.formData.parentAis,
    //         othersFullName: this.formData.othersFullName,
    //         othersGender: this.formData.othersGender,
    //         othersRelation: this.formData.othersRelation,
    //         othersDateOfBirth: this.formData.othersDateOfBirth,
    //         othersEmploy: this.formData.othersEmploy
    //     };
    //     return dependants;
    // }

    // setDependants(data: Dependants) {
    //     // Update the Dependants data only when the Dependants Form had been validated successfully
    //     this.isDependantsFormValid = true;
    //     this.formData.childFullName = data.childFullName;
    //     this.formData.childGender = data.childGender;
    //     this.formData.childRelation = data.childRelation;
    //     this.formData.childDateOfBirth = data.childDateOfBirth;
    //     this.formData.childEmploy = data.childEmploy;
    //     this.formData.childAis = data.childAis;

    //     this.formData.parentFullName = data.parentFullName;
    //     this.formData.parentRelation = data.parentRelation;
    //     this.formData.parentDateOfBirth = data.parentDateOfBirth;
    //     this.formData.parentEmploy = data.parentEmploy;
    //     this.formData.parentAis = data.parentAis;

    //     this.formData.othersFullName = data.othersFullName;
    //     this.formData.othersGender = data.othersGender;
    //     this.formData.othersRelation = data.othersRelation;
    //     this.formData.othersDateOfBirth = data.othersDateOfBirth;
    //     this.formData.othersEmploy = data.othersEmploy;
    //     this.workflowService.validateStep(STEPS.dependants);
    // }

    // getEducation() : Education {
    //     // Return the Education data
    //     var education: Education = {
           
    //             eduqualification: this.formData.eduqualification,
    //             university: this.formData.university,
    //             institute: this.formData.institute,
    //             subject: this.formData.subject,
    //             division: this.formData.division,
    //             year: this.formData.year,
    //             userCv: this.formData.userCv,
    //             language:this.formData.language,
    //             read: this.formData.read,
    //             write: this.formData.write,
    //             speak: this.formData.speak,
    //             understand: this.formData.understand
    //     };
    //     return education;
    // }

    // setEducation(data: Education) {
    //     // Update the Education data only when the Education Form had been validated successfully
    //     this.isEducationFormValid = true;
       
    //     this.formData.eduqualification = data.eduqualification;
    //     this.formData.university = data.university;
    //     this.formData.institute = data.institute;
    //     this.formData.subject = data.subject;
    //     this.formData.division = data.division;
    //     this.formData.year = data.year;
    //     this.formData.userCv = data.userCv;
    //     this.formData.language=data.language;
    //     this.formData.read = data.read;
    //     this.formData.write = data.write;
    //     this.formData.speak = data.speak;
    //     this.formData.understand = data.understand;
       
    //     this.workflowService.validateStep(STEPS.education);
    // }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isEducationFormValid = this.isSpouseFormValid = this.isDependantsFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid &&
                this.isSpouseFormValid &&
                this.isDependantsFormValid &&
                this.isEducationFormValid;
    }
}
