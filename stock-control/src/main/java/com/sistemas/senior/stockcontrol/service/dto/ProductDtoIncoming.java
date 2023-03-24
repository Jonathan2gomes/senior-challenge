package com.sistemas.senior.stockcontrol.service.dto;

import com.sistemas.senior.stockcontrol.model.enums.MeasureUnit;

import javax.validation.constraints.NotBlank;
import java.math.BigDecimal;
import java.time.LocalDate;

public class ProductDtoIncoming {

    @NotBlank
    private String name;
    private MeasureUnit measureUnit;
    @NotBlank
    private String quantity;
    @NotBlank
    private BigDecimal price;
    @NotBlank
    private Boolean isPerishable;
    private LocalDate expirationDate;
    @NotBlank
    private LocalDate manufacturingDate;
    @NotBlank

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public MeasureUnit getMeasureUnit() {
        return measureUnit;
    }

    public void setMeasureUnit(MeasureUnit measureUnit) {
        this.measureUnit = measureUnit;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Boolean getPerishable() {
        return isPerishable;
    }

    public void setPerishable(Boolean perishable) {
        isPerishable = perishable;
    }

    public LocalDate getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
    }

    public LocalDate getManufacturingDate() {
        return manufacturingDate;
    }

    public void setManufacturingDate(LocalDate manufacturingDate) {
        this.manufacturingDate = manufacturingDate;
    }
}
