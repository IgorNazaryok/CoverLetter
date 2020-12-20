import { Component, OnInit, ViewChild } from '@angular/core';
import {CoverLetterService} from './shared/cover-letter.service'
import {CoverLetter} from './shared/interface'
import { CoverLetterFormComponent} from './cover-letter-form/cover-letter-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  @ViewChild(CoverLetterFormComponent, {static: false})
  private coverLetterFormComponent: CoverLetterFormComponent;


  constructor(public coverLetterService:CoverLetterService){
  }
  
  ngOnInit(){
    this.coverLetterService.getcoverLetters();
  }

  addCoverLetters(coverLetter:CoverLetter){
    this.coverLetterService.addCoverLetter(coverLetter)? this.coverLetterFormComponent.reset() : null;
  }
  updateCoverLetters(coverLetter:CoverLetter){
    this.coverLetterService.updateCoverLetter(coverLetter)? this.coverLetterFormComponent.reset() : null;    
  }

  editCoverLetters(id:number){
    this.coverLetterFormComponent.message='';
    this.coverLetterService.GetCoverLetterById(id);
  }
}
