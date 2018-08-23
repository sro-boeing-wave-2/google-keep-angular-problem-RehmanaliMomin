import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  @Input() notesData: Array<any>;
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();

  constructor(private _notesService: HeroService) {
    console.log(this.notesData);
  }

  ngOnInit() {
  }

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }

  public editRecord(record) {
    this.editClicked.emit(record);
  }

  public newRecord() {
    this.newClicked.emit();
  }

}
