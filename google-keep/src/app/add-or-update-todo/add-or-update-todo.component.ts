import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { INotes } from '../../notes';

@Component({
  selector: 'app-add-or-update-todo',
  templateUrl: './add-or-update-todo.component.html',
  styleUrls: ['./add-or-update-todo.component.css']
})
export class AddOrUpdateTodoComponent implements OnInit {

  @Output() notesCreated = new EventEmitter<any>();
  @Output() notesEdited = new EventEmitter<any>();
  @Input() notesAddInfo: any;
  @Input() notesEditInfo: any;

  public buttonText = 'Save';

  constructor() {
    //this.clearNotesInfo();
  }

  ngOnInit() {
    this.notesAddInfo = this.notesAddInfo ? this.notesAddInfo : { id: 0, isPinned: false, text: "" , title: "This is the title" };
    console.log(this.notesAddInfo);
  }

  clearNotesInfo(){
    this.notesAddInfo = {
      id:0,
      title:'',
      text:'',
      isPinned:false,
    };
    this.notesEditInfo={
      id:0,
      title:'',
      text:'',
      isPinned:false,
    }
  }

  AddNotesRecord(event) {
    this.notesCreated.emit(this.notesAddInfo);
    this.clearNotesInfo();
  };

  UpdateNotesRecord(event) {
    console.log('updte REcord');
    this.notesEdited.emit(this.notesEditInfo);
    this.clearNotesInfo();
  };
}

