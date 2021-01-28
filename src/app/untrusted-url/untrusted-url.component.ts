import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-untrusted-url',
  templateUrl: './untrusted-url.component.html',
  styleUrls: ['./untrusted-url.component.css']
})
export class UntrustedUrlComponent {
  constructor(private dialog: MatDialog) { }

  open(url: string) {
    this.dialog.open(DialogComponent, {
      data: {
        title: url,
        url: url
      }
    });
  }
}
