import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomBtnType{
    title : string,
    style ?: string,
    eventHandler ?: MouseEventHandler<HTMLButtonElement>,
    type ?: "button" | "submit"
}



export interface SearchManufacturerType{
    manufacturer : string
    setManufacturer : Dispatch<SetStateAction<string>>;
}