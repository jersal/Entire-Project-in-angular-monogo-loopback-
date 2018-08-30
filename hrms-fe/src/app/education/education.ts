import { Qualification } from "./qualification";
import { Language } from "./language";

export class Education {
    qualifications: Qualification[] = []
    languages : Language[]=[]
    userCv: string = '';
    mothertounge: string = '';
}
