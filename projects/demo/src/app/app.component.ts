import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public autoCompleteTags = ['Angular', 'React', 'VueJs', 'Meteor', 'Ember.js', 'Aurelia', 'Backbone.js'];
  public autoCompleteTagsObjects = [{name: 'Angular', id: 0}, {name: 'React', id: 1}, {name: 'VueJs', id: 2}];
  public selectedValues = ['Angular'];

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
