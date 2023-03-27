import {Component} from '@angular/core';
import {Product} from "../model/product";
import {ProductsService} from "../services/products.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$: Observable<Product[]>;
  displayedColumns = ['id', 'name', 'quantity', 'price', 'expirationDate', 'manufacturingDate', 'perishable', 'actions'];
  // private dialog: any;

  constructor(private dialog: MatDialog, private productService: ProductsService) {
    this.products$ = this.productService.list()
      .pipe(
        catchError(error => {
          this.onError('Error loading products')
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

}
