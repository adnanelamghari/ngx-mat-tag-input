import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public autoCompleteTags = ['Angular', 'React', 'VueJs'];
  public autoCompleteTagsObjects = [{name: 'Angular', id: 0}, {name: 'React', id: 1}, {name: 'VueJs', id: 2}];

  change($event) {
    console.log($event)
  }

  change1($event) {
    console.log($event)
  }

  change2($event) {
    console.log($event)
  }
}
