import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MobileComponent,
    EmployeeComponent,
    ProductComponent,
    FormsModule,
    DirectivesComponent,
    PipesComponent,FormsComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // template : `<h1> Inline Template Demo </h1>`,
  // styles : [`h1 {background-color:red;}`]
})
export class AppComponent {
  title = 'amazon';
}
