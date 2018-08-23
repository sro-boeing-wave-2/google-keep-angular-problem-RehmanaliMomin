import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { not } from '@angular/compiler/src/output/output_ast';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public notesData: Array<any>;
  public notesAddInfo: any;
  public notesEditInfo : any;

  constructor (private notesService: HeroService) {
    this.notesAddInfo = this.setInitialValuesForNotesData();
  }

  ngOnInit() {
    this.notesService.get().subscribe((data: any) => {
      this.notesData = data
    });
  }

private setInitialValuesForNotesData () {
  return {
    id: 0,
    title: '',
    content: '',
    isPinned: false
  }
}

public createNotes(note: any) {
  this.notesService.add(note).subscribe(
        notesRecord => this.notesData.push(note)
      );
    this.notesAddInfo = this.setInitialValuesForNotesData();
};

public editNotes(note: any) {
  // console.log('Note To Be Edited', note);
  // let notesWithId;
  // notesWithId = _.find(this.notesData,(el=>el.id===note.id));
  // const updateIndex = _.findIndex(this.notesData,{id:notesWithId.id});
  note.labels = [];
  note.checklists = [];
  console.log(note);
  this.notesService.update(note).subscribe(
    updatedNote => {}
  );
  this.notesEditInfo = this.setInitialValuesForNotesData();
};

  editClicked(record) {
    this.notesEditInfo = record;
  };

  newClicked() {
    console.log('--uio--');
    this.notesAddInfo = this.setInitialValuesForNotesData();
  };

  deleteClicked(record) {
    const deleteIndex = _.findIndex(this.notesData, {id: record.id});
    this.notesService.remove(record.id).subscribe(
      result => this.notesData.splice(deleteIndex, 1)
    );
  }
}


