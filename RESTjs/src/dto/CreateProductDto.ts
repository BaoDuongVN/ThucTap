// import {IsNotEmpty, IsEmail, MinLength} from 'class-validator';

// export class CreateUserDto {
//     @IsNotEmpty()
//     name!: string;

//     @IsEmail()
//     email!: string;

//     @MinLength(6)
//     password!: string;
// }
// Sử dụng ! sau tên biến, báo TS rằng biến này đảm bảo được gán giá trị

import { IsNotEmpty, IsNumber, Min } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateProductDto {
  @Expose()
  @IsNotEmpty({ message: 'Tên sản phẩm không được để trống' })
  name!: string;

  @Expose()
  @IsNumber({}, { message: 'Giá sản phẩm phải là một số' })
  @Min(0, { message: 'Giá sản phẩm không được âm' })
  price!: number;

  @Expose()
  description?: string;
}
