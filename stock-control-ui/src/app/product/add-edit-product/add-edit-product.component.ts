import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  @Input() displayAddModal: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  date: Date | undefined;


  productForm = this.fb.group( {
    name: ["", Validators.required],
    quantity: [0, Validators.required],
    price: [0, Validators.required],
    expirationDate: ["", Validators.required],
    manufacturingDate: ["", Validators.required],
    perishable: ["", Validators.required]
  })
  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
  }

  closeModal() {
    this.clickClose.emit(true);
  }

  addProduct() {
    console.log(this.productForm.value)
    this.productService.saveProduct(this.productForm.value).subscribe(
      response => {
        console.log(response);
        this.productForm.reset();
        this.clickClose.emit(true);
      }
    )
  }
}
