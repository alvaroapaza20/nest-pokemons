import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    //console.log({value, metadata});
    
    if(!isValidObjectId(value)){
      throw new BadRequestException(`${value} in snot valid in MongoDB`)
    }

    return value.toUpperCase();
  }
}
