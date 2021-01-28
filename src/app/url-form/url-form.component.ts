import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent {
  @Input() title: string = '';
  @Input() defaultUrl: string = '';
  @Output() submitted = new EventEmitter<string>();

  submit(form: NgForm) {
    this.submitted.emit(form.value.url);
  }
}
