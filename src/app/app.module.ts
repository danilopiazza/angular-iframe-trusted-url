import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackBarErrorHandlerService } from './error-handler/snack-bar-error-handler.service';
import { TrustedUrlComponent } from './trusted-url/trusted-url.component';
import { UntrustedUrlComponent } from './untrusted-url/untrusted-url.component';
import { UrlFormComponent } from './url-form/url-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TrustedUrlComponent,
    UntrustedUrlComponent,
    UrlFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: SnackBarErrorHandlerService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
