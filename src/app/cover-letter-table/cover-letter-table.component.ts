import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoverLetter } from '../shared/interface';

@Component({
  selector: 'app-cover-letter-table',
  templateUrl: './cover-letter-table.component.html',
  styleUrls: ['./cover-letter-table.component.scss']
})
export class CoverLetterTableComponent implements OnInit {

  @Input() coverLetters: CoverLetter[]
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  edit(id:number):void {    
    this.onEdit.emit(id);
  }

}
