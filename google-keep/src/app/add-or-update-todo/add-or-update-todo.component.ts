import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { INotes } from '../../notes';

@Component({
  selector: 'app-add-or-update-todo',
  templateUrl: './add-or-update-todo.component.html',
  styleUrls: ['./add-or-update-todo.component.css']
})
export class AddOrUpdateTodoComponent implements OnInit {

  @Output() notesCreated = new EventEmitter<any>();
  @Input() notesInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearNotesInfo();
  }

  ngOnInit() {
    this.notesInfo = this.notesInfo ? this.notesInfo : { id: 1, isPinned: false, text: "" , title: "This is the title" };
    console.log(this.notesInfo);
  }

  clearNotesInfo(){
    this.notesInfo = {

      id:0,
      title:'',
      text:'',
      isPinned:false,

    };
  }

  public addOrUpdateNotesRecord = function(event) {
    this.notesCreated.emit(this.notesInfo);
    this.clearNotesInfo();
  };

}

