import { Component, OnInit } from '@angular/core';
import {CoverLetterService} from './shared/cover-letter.service'
import {CoverLetter} from './shared/interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{


  constructor(public coverLetterService:CoverLetterService){
  }
  
  ngOnInit(){
    this.coverLetterService.getcoverLetters();
  }

  addCoverLetters(coverLetter:CoverLetter){
    this.coverLetterService.addCoverLetter(coverLetter);
  }
  updateCoverLetters(coverLetter:CoverLetter){
    this.coverLetterService.updateCoverLetter(coverLetter);
  }

  editCoverLetters(id:number){
    this.coverLetterService.GetCoverLetterById(id);
  }
}
