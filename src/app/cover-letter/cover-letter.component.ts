import { Component, Input, OnInit } from '@angular/core';
import { CoverLetter } from '../shared/interface';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss']
})
export class CoverLetterComponent implements OnInit {

  @Input() coverLetter:CoverLetter

  constructor() { }

  ngOnInit(): void {
  }

}
