import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-trusted-url',
  templateUrl: './trusted-url.component.html',
  styleUrls: ['./trusted-url.component.css']
})
export class TrustedUrlComponent {
  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) { }

  open(url: string) {
    const trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.dialog.open(DialogComponent, {
      data: {
        title: url,
        url: trustedUrl
      }
    });
  }
}
