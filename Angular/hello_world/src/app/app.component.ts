import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./mainLayout/header/header.component";
import { FailedComponent } from "./mainLayout/failed/failed.component";
import { SucceseComponent } from "./mainLayout/succese/succese.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FailedComponent, SucceseComponent,FormsModule]
})
export class AppComponent {
  title = 'Hello World';
  subtitle = 'Dmitry Kuznets';
  celsius=0;
  currency=0;
  sizeCM=0;
  sizeM=0;
}
