import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proj3';
  stdList: any[] = []; //Creation of object array.

  addStudName(studName: string) {
    this.stdList.push({ id: this.stdList.length, name: studName });
  }
  //To remove name from array we are using id and filter() to re arrange the array
  removeName(stdId: number) {
    this.stdList = this.stdList.filter(val => val.id !== stdId);
  }
}
