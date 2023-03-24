package com.sistemas.senior.stockcontrol.controller;

import com.sistemas.senior.stockcontrol.service.ProductService;
import com.sistemas.senior.stockcontrol.service.dto.ProductDtoIncoming;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/")
    @Operation(summary = "Get all products",description = "Get all products")
    public ResponseEntity getProducts() {
        return ResponseEntity.ok(service.getAllItems());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a product by id",description = "Get a product by id")
    public ResponseEntity getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getProductById(id));
    }

    @PostMapping(value = "/")
    @Operation(summary = "Register a product",description = "Register a product")
    public ResponseEntity saveProduct(@Valid @RequestBody ProductDtoIncoming productDtoIncoming) {
        service.validateMeasureUnit(productDtoIncoming);
//        service.validateMeasureUnit(productDtoIncoming)
        service.saveProduct(productDtoIncoming);
        return new ResponseEntity<>("Product created with success", HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    @Operation(summary = "Update a product",description = "Update a student")
    public ResponseEntity updateProduct(@PathVariable Long id, @Valid @RequestBody ProductDtoIncoming productDtoIncoming) {
        service.validateMeasureUnit(productDtoIncoming);
        service.updateProduct(productDtoIncoming, id);
        return new ResponseEntity<>("Product updated with success", HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a product by id",description = "Delete a product by id")
    public ResponseEntity deleteProductById(@PathVariable Long id) {
        service.deleteProduct(id);
        return ResponseEntity.ok(("Product deleted successfully"));
    }

}
