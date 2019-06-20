import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadWordService {

  leoProfanity = require('leo-profanity');
  frenchBadwordsList = require('french-badwords-list');

  constructor() { }

  replaceWord(word) {
    this.leoProfanity.clearList();
    this.leoProfanity.add(this.frenchBadwordsList.array);

    console.log(this.leoProfanity.clean(word));
  }
}
