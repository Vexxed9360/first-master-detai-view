import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from '@master-detail-view01/core-data';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'master-detail-view01-sounds-list',
  templateUrl: './sounds-list.component.html',
  styleUrls: ['./sounds-list.component.css'],
})
export class SoundsListComponent implements OnInit {
  @Input() sounds: Sound[];
  @Output() selectedSound = new EventEmitter();
  @Output() deleteSound = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.sounds);
  }

  select(sound: Sound) {
    this.selectedSound.emit(sound);
  }

  delete(sound: Sound) {
    this.deleteSound.emit(sound);
  }
}
