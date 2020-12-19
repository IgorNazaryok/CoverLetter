import { Component, EventEmitter, Input, DoCheck, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoverLetter } from '../shared/interface';

@Component({
  selector: 'app-cover-letter-form',
  templateUrl: './cover-letter-form.component.html',
  styleUrls: ['./cover-letter-form.component.scss']
})
export class CoverLetterFormComponent implements OnInit, OnChanges {

  form: FormGroup
  message: string

  @Output() onAdd: EventEmitter<CoverLetter> = new EventEmitter<CoverLetter>()
  @Output() onUpdate: EventEmitter<CoverLetter> = new EventEmitter<CoverLetter>()
  @Input()   editableLetter: CoverLetter
  @Input()   errorMessage: string

coverLetters:CoverLetter

  constructor() { }

  ngOnChanges(changes:SimpleChanges): void { 
      
      changes.errorMessage &&!changes.errorMessage.firstChange && (!changes.errorMessage.currentValue.includes('There')) && this.form?  this.form.reset({ draft: true}) : null;
      changes.errorMessage && changes.errorMessage.currentValue && changes.errorMessage.currentValue.includes('There')? this.message=changes.errorMessage.currentValue : null

      changes.editableLetter && this.form?  this.form.reset({ draft: true}) : null;
  
      this.form && changes.editableLetter && changes.editableLetter.currentValue? this.form.setValue({    
        id:changes.editableLetter.currentValue.id,
        profession: changes.editableLetter.currentValue.profession,
        name:changes.editableLetter.currentValue.name,
        about:changes.editableLetter.currentValue.about,
        draft:changes.editableLetter.currentValue.draft
     })
     : null 
    }

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
    
    if(this.editableLetter)
    {
      const coverLetters:CoverLetter = {...this.form.value};
      this.onUpdate.emit(coverLetters);     
    }
    else
    {
      if(this.form.valid)
      { 
        const coverLetters:CoverLetter = {...this.form.value};
        this.onAdd.emit(coverLetters);
        this.message =''
      } 
      else
      {
        this.message = 'Please fill in all fields correctly!';
      }
    }
  }
}
