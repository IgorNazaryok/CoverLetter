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

  id: FormControl
  profession: FormControl
  name: FormControl
  about: FormControl
  draft: FormControl

  message: string

  @Output() onAdd: EventEmitter<CoverLetter> = new EventEmitter<CoverLetter>()
  @Output() onUpdate: EventEmitter<CoverLetter> = new EventEmitter<CoverLetter>()
  @Input()   editableLetter: CoverLetter

coverLetters:CoverLetter

  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }

  createFormControls(){
    this.id = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
    this.profession = new FormControl('', Validators.required),
    this.name = new FormControl('', Validators.required),
    this.about = new FormControl('', Validators.required),
    this.draft = new FormControl(true)    
  }

  createForm(){
    this.createFormControls()
    this.form=new FormGroup({
      id: this.id,
      profession: this.profession,
      name: this.name,
      about: this.about,
      draft: this.draft
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
