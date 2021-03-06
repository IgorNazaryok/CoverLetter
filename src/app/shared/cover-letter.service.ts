import { Injectable } from '@angular/core';
import {CoverLetter} from './interface'


@Injectable({
  providedIn: 'root'
})
export class CoverLetterService {

  errorMessage: string;

  coverLetters:CoverLetter[];

  editableLetter:CoverLetter;

  constructor() { }  
  

  addCoverLetter(coverLetter:CoverLetter):string
  {    
    if (!this.isIncludesCoverLetter(coverLetter))
    {
    this.coverLetters.unshift(coverLetter);
    this.coverLetters.sort((a, b) => a.id > b.id ? 1 : -1);
    localStorage.listcoverLetters = JSON.stringify(this.coverLetters);
    this.editableLetter=null;    
    }
    return this.errorMessage;  
  }

  updateCoverLetter(coverLetter:CoverLetter):string
  {
    if(coverLetter.id===this.editableLetter.id)
    {
      this.coverLetters=this.coverLetters.filter(letters=> letters.id!==coverLetter.id);
      this.coverLetters.unshift(coverLetter);
      this.coverLetters.sort((a, b) => a.id > b.id ? 1 : -1);
      localStorage.listcoverLetters = JSON.stringify(this.coverLetters);
      this.editableLetter=null;     
      return null; 
    }
    else 
    {
      return this.addCoverLetter(coverLetter);
    }
  }

  GetCoverLetterById(id:number):void
  {    
    this.editableLetter =this.coverLetters.find(letters=> letters.id===id);
  }

  getcoverLetters():void
  {
   this.coverLetters = localStorage.listcoverLetters ? JSON.parse(localStorage.listcoverLetters) : []; 
   this.coverLetters.sort((a, b) => a.id > b.id ? 1 : -1);
  }

  isIncludesCoverLetter(coverLetter:CoverLetter):string
  {    
    (!!this.coverLetters.find(letters=> letters.id===coverLetter.id))? this.errorMessage ='There is already a record with this id!' : this.errorMessage = null;
    
    return this.errorMessage
  }

}
