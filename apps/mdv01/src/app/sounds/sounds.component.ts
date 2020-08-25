import { Component, OnInit } from '@angular/core';
import { SoundsService } from '@master-detail-view01/core-data';
import { observable, Observable } from 'rxjs';
import { Sound } from '@master-detail-view01/core-data';

@Component({
  selector: 'master-detail-view01-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.css'],
})
export class SoundsComponent implements OnInit {
  sounds$;

  selectedSound: Sound;

  constructor(private soundService: SoundsService) {}

  ngOnInit(): void {
    this.loadSounds();
  }

  loadSounds() {
    this.sounds$ = this.soundService.getAll();
  }

  selectSound(sound: Sound) {
    this.selectedSound = sound;
    console.log(sound);
  }

  cancelSound() {
    const emptySound: Sound = { id: null, title: '', description: '' };
    this.selectSound(emptySound);
  }

  saveSound(sound: Sound) {
    if (sound.id) {
      this.updateSound(sound);
    } else {
      this.createSound(sound);
    }
  }

  createSound(sound: Sound) {
    this.soundService.create(sound).subscribe(() => {
      this.cancelSound();
      this.loadSounds();
    });
  }

  updateSound(sound: Sound) {
    this.soundService.update(sound).subscribe(() => {
      this.cancelSound();
      this.loadSounds();
    });
  }

  deleteSound(sound: Sound) {
    this.soundService.delete(sound.id).subscribe(() => {
      this.cancelSound();
      this.loadSounds();
    });
  }
}
