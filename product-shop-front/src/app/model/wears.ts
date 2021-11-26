import { wearType } from "./wearType";

export interface wear {
    Id: Number,
    Name: String,
    Type: wearType,
    Price: Number,
    Size: String,
    Available: Boolean,
    Img: String,
    Info: String,
}