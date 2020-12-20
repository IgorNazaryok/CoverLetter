import { Component, EventEmitter, Input, DoCheck, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoverLetter } from '../shared/interface';

@Component({
  selector: 'app-cover-letter-form',
  templateUrl: './cover-letter-form.component.html',
  styleUrls: ['./cover-letter-form.component.scss']
})
export class CoverLetterFormComponent implements OnInit {

  form: FormGroup
  message: string

  @Output() onAdd: EventEmitter<CoverLetter> = new EventEmitter<CoverLetter>()
  @Output() onUpdate: EventEmitter<CoverLetter> = new EventEmitter<CoverLetter>()
  @Input()   editableLetter: CoverLetter

coverLetters:CoverLetter

  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      id:new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      profession: new FormControl('', Validators.required),
      name:new FormControl('', Validators.required),
      about:new FormControl('', Validators.required),
      draft:new FormControl(true)
    }) 
  }

  submit():void{
    
    this.message=null
    
    if(!this.form.valid)
    {
      this.message = 'Please fill in all fields correctly!';    
    }
    else
    {
      if(this.editableLetter)
      { 
        const coverLetters:CoverLetter = {...this.form.value};
        this.onUpdate.emit(coverLetters); 
      } 
      else
      {
        const coverLetters:CoverLetter = {...this.form.value};
        this.onAdd.emit(coverLetters);
      }
    }
  }
  resetForm(){
    this.form.reset({ draft: true})    
  }
  
  initializationForm (coverLetters:CoverLetter): void {
    this.form.setValue({    
      id:coverLetters.id,
      profession: coverLetters.profession,
      name:coverLetters.name,
      about:coverLetters.about,
      draft:coverLetters.draft
   })
  }
}
