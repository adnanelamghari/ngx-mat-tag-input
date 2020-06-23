<p align="center">
    <img src="https://github.com/maartentibau/angular-logos/blob/master/logos/angular-extensions.svg" alt="Image" width="150" />
  <img src="https://github.com/maartentibau/angular-logos/blob/master/logos/angular-material.svg" alt="Image" width="150"/>
</p>


# NgxMatTagInput
Angular tags input based on [Angular Material](https://material.angular.io) auto-complete and chips.

* Library location : `projects/ngx-mat-tag-input` directory of this repository.
* Working example location : `projects/demo` directory of this repository.

## Demo

* Working example location : `projects/demo` directory of this repository.
* [Stackblitz](https://stackblitz.com/@adnanelamghari)

## Installation

`npm i ngx-mat-tag-input`

## API

`import { NgxMatTagInputModule } from 'ngx-mat-tag-input'
`<br>
`selector: ngx-mat-tag-input`

### @Inputs()

| Input                 | Type                   | Required                 | Description                                                  |
| --------------------- | ---------------------- | ------------------------ | ------------------------------------------------------------ |
| items                 | array                  | Optional                 | Array of the auto-complete items                             | 
| selectedTags          | array                  | Optional                 | Array of the selected items bu default                       | 
| appearance            | MatFormFieldAppearance | Optional                 | The form-field appearance style.                             |
| readonly              | boolean                | Optional, default: false | Whether the element is readonly.                             |
| placeholder           | string                 | Optional                 | The placeholder for this control.                            |
| displayBy             | string                 | Optional                 | Attribute's name to display when items are Objects           |
| isLoading             | boolean                | Optional, default: false | When true, a spinner with be displayed in the suggested list |

### @Outputs()

| Output                | Description                                                      |
| ----------------      | ---------------------------------------------------------------- |
| reset                 | Emits when when the user resets a form.                          |
| ngModelChange         | Emits when when the view model updates.                          |
| change                | Emits when the contents of the input have changed.               |
| select                | Emits when the an item from the auto-complete list is selected.  |
| focus                 | Emits when the input receives focus.                             |
| touched               | Emits when the user touches the input.                           |

## Usage

1) Import the `NgxMatTagInputModule` in your app module.
 > `import { NgxMatTagInputModule } from 'ngx-mat-tag-input'`

 ```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgxMatTagInputModule} from 'ngx-mat-tag-input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMatTagInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
 ```

 2) Use the input `(NgxMatTagInput)` in your component.

```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
    template: `
      <div class="container">
        <h3>NgxMatTagInput</h3>
        <ngx-mat-tag-input #aa (change)="change($event)"
                           [items]="autoCompleteTags" [selectedTags]="selectedValues" appearance="outline"
                           placeholder="Search Javascript framework"></ngx-mat-tag-input>
      </div>
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public autoCompleteTags = ['Angular', 'React', 'VueJs', 'Meteor', 'Ember.js', 'Aurelia', 'Backbone.js'];
  public selectedValues = ['Angular'];

  change($event) {
    console.log($event)
  }
}
```

## Build

Run `ng build ngx-mat-tag-input` to build the library. The build artifacts will be stored in the `dist/ngx-mat-tag-input` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test ngx-mat-tag-input` to execute the unit tests via [Karma](https://karma-runner.github.io).

