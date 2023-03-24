package com.sistemas.senior.stockcontrol.model.enums;

import com.sistemas.senior.stockcontrol.exception.NotFoundException;

public enum MeasureUnit {
    LITRO ("lt"),
    QUILOGRAMA ("kg"),
    UNIDADE ("un");

    private String abbreviation;

    MeasureUnit(String abbreviation) {
        this.abbreviation=abbreviation;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

//    public static MeasureUnit validate(String measureUnit) {
//        for (MeasureUnit measure : MeasureUnit.values()) {
//            if(measure.toString().equalsIgnoreCase(measureUnit)) {
//                return measure;
//            }
//        } throw new NotFoundException("not one of the values accepted for Enum class: [QUILOGRAMA, LITRO, UNIDADE] ");
//    }
}
