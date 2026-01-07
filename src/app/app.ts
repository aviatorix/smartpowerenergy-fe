import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatFormField],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('smartpowerenergy');
}
