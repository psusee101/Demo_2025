import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  title = 'Product Component';
  pid = 10011;
  pname = 'Mobiles';
  price = 35000;
  message: string = 'Click the button to see magic!';
  imgURl = "https://ts1.mm.bing.net/th?id=OIP.2a75DQlqZR_oK23Y-QMtXAHaF7&pid=15.1";
  userName = "Anu";

  showMessage() {
    this.message = 'You clicked the button!';
  }
}
