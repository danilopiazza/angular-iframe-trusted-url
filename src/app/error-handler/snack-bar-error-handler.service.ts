import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarErrorHandlerService {
  constructor(private snackBar: MatSnackBar) { }

  handleError(error: any) {
    this.snackBar.open(error, 'Dismiss');
  }
}
