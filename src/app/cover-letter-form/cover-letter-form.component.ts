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

  ngOnChanges(): void { 
    
    !this.message && this.form?  this.form.reset({ draft: true}) : null;
    console.log('Message',!this.message);
    console.log('this.form',!!this.form);  

    this.form && this.editableLetter? this.form.setValue({    
      id:this.editableLetter.id,
      profession: this.editableLetter.profession,
      name:this.editableLetter.name,
      about:this.editableLetter.about,
      draft:this.editableLetter.draft
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
      console.log('Edit');
      const coverLetters:CoverLetter = {...this.form.value};
      this.onUpdate.emit(coverLetters);     
    }
    else
    {
      if(this.form.valid)
      { 
        const coverLetters:CoverLetter = {...this.form.value};
        this.onAdd.emit(coverLetters);
      } 
      else
      {
        this.message = 'Please fill in all fields correctly!';
      }
    }
  }
}
