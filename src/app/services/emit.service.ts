import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';

@Injectable()
export class EmitService {
  guid: string;
  emitir = new EventEmitter<string>();
  static emitirId = new EventEmitter<string>();
  constructor() { 
    
  }

  getGuid(){
    const uuidv4 = require('uuid/v4');
    this.guid = uuidv4();
    return this.guid;
  }
  
}
