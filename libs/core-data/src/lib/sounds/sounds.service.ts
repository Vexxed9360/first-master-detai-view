import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sound } from './sound';

const BASEURL = 'https://master-detail-view-db01.herokuapp.com/sounds';

@Injectable({
  providedIn: 'root',
})
export class SoundsService {
  constructor(private hc: HttpClient) {}

  getAll() {
    return this.hc.get(BASEURL);
  }

  create(sound: Sound) {
    return this.hc.post(BASEURL, sound);
  }

  update(sound: Sound) {
    return this.hc.put(this.getUrlForId(sound.id), sound);
  }

  getUrlForId(id: string) {
    return `${BASEURL}/${id}`;
  }

  delete(soundId: string) {
    return this.hc.delete(this.getUrlForId(soundId));
  }
}
