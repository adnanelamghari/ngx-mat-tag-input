import {Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'lib-ngx-mat-tag-input',
  templateUrl: './ngx-mat-tag-input.component.html',
  styleUrls: ['./ngx-mat-tag-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatTagInputComponent),
      multi: true
    }
  ]
})
export class NgxMatTagInputComponent implements OnInit, ControlValueAccessor {

  @Input() appearance: MatFormFieldAppearance;
  @Input() readonly: boolean;
  @Input() items: any[] = [];
  @Input() placeholder: string;
  @Input() displayBy: string;
  @Input() isLoading: boolean;
  @Input() selectedTags: any[] = [];

  @Output() reset = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() select = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() touched = new EventEmitter();

  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;

  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public searchControl = new FormControl();
  public filteredItems: Observable<any[]>;

  constructor() {

  }

  get value(): any[] {
    return this.selectedTags;
  }

  set value(value: any[]) {
    this.selectedTags = value;
    this.onChange(value);
    this._change(value);
    this.onTouched();
  }

  ngOnInit(): void {
    this.filteredItems = this.searchControl.valueChanges.pipe(
      startWith(null),
      map((tag: any | null) => tag ? this._filter(tag) : this.items.slice()));
  }

  onChange: any = () => {
  }

  onTouched: any = () => {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
    if (obj === null) {
      this.value = [];
    }
  }

  registerOnChange(fn: any): void {
    this.change.emit(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    this.touched.emit(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.searchControl.disable();
  }

  _change(event): void {
    this.change.emit(event);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.selectedTags.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    this.searchControl.setValue(null);
    this._change(this.selectedTags);
  }

  remove(fruit: any): void {
    const index = this.selectedTags.indexOf(fruit);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    }
    this._change(this.selectedTags);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.pushTag(event.option.value);
    this.tagsInput.nativeElement.value = '';
    this.searchControl.setValue(null);
    this._change(this.selectedTags);
  }

  clear(): void {
    this.selectedTags = [];
  }

  pushTag(tag: any): void {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
      this._change(this.selectedTags);
    }
  }

  private _filter(value: any): string[] {
    const filterValue = (this.displayBy && value[this.displayBy] ? value[this.displayBy] : value).toLowerCase();
    if (this.displayBy) {
      return this.items.filter(option => option[this.displayBy].toLowerCase().includes(filterValue));
    } else {
      return this.items.filter(option => option.toLowerCase().includes(filterValue));
    }
  }


}
