import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Sound } from '@master-detail-view01/core-data';

@Component({
  selector: 'master-detail-view01-sounds-details',
  templateUrl: './sounds-details.component.html',
  styleUrls: ['./sounds-details.component.css'],
})
export class SoundsDetailsComponent implements OnInit {
  currentSound: Sound;
  orginalTitle: string;

  @Input() set selectedSound(sound: Sound) {
    if (sound) this.orginalTitle = sound.title;
    this.currentSound = Object.assign({}, sound);
  }
  @Output() saveSound = new EventEmitter();
  @Output() cancelSound = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  get soundTitle() {
    return !this.orginalTitle ? 'Create a Sound!' : this.orginalTitle;
  }

  get submitButton() {
    return !this.orginalTitle ? 'Create' : 'Save';
  }

  save(sound: Sound) {
    this.saveSound.emit(sound);
  }

  cancel() {
    this.cancelSound.emit();
  }
}
