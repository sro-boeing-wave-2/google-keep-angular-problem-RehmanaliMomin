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
  public currentNote: any;
  public notesInfo : any;

  constructor (private notesService: HeroService) {
    this.currentNote = this.setInitialValuesForNotesData();
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

public createOrUpdateNotes = function(note: any) {
  this.notesService.add(note).subscribe(
        notesRecord => this.notesData.push(note)
      );
    this.currentNote = this.setInitialValuesForNotesData();
};


  public editClicked = function(record) {
    this.notesInfo = record;

  };

  public newClicked = function() {
    this.currentNote = this.setInitialValuesForNotesData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.notesData, {id: record.id});
    this.notesService.remove(record.id).subscribe(
      result => this.notesData.splice(deleteIndex, 1)
    );
  }
}


