import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo.component.html',
  // templateUrl:`
  // <div *ngFor="let note of notes">
  //   <p>{{note.title}}</p>

  // `,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //public notes = [];
  @Input() notesData : Array<any>;
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();


  constructor(private _notesService:HeroService) {
  console.log(this.notesData);
   }

  ngOnInit() {
  }


  public deleteRecord(record) {
    // console.log(record.id + "this is record");
    this.recordDeleted.emit(record);
  }

  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public newRecord() {
    this.newClicked.emit();
  }

}
