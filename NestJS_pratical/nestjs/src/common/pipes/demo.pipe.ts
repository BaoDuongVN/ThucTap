import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable() 
export class demoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log("value: ", value);
        console.log("Metadata: ", metadata);
        return value;
    }
}