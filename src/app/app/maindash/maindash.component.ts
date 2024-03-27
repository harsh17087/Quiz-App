import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule,} from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar"
@Component({
  selector: 'app-maindash',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule,MatListModule,MatIconModule,MatToolbarModule],
  templateUrl: './maindash.component.html',
  styleUrl: './maindash.component.css'
})
export class MaindashComponent {

}
