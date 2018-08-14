import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodersPage } from './coders';

@NgModule({
  declarations: [
    CodersPage,
  ],
  imports: [
    IonicPageModule.forChild(CodersPage),
  ],
})
export class CodersPageModule {}
