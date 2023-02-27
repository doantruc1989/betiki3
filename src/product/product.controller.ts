import {
  Body,
  ConsoleLogger,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import EditCategoryDto from './dto/editCategory.tdo';
import EditProductDto from './dto/editProduct.dto';
import NewCategoryDto from './dto/newCategory.dto';
import NewProductDto from './dto/newProduct.dto';
import SearchProductDto from './dto/searchProduct.dto';
import { ProductService } from './product.service';

@Controller()
@ApiTags('Product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('product')
  async getAllProduct(@Query('page') page: number) {
    return this.productService.listProduct(page);
  }

  @Get('product/all')
  async getProductwithCat(@Query() searchProductDto: SearchProductDto) {
    return this.productService.getProductbyCat(searchProductDto);
  }

  @Post('product/createNewProduct')
  async createNewProduct(@Body() newProductDto: NewProductDto) {
    return this.productService.createProduct(newProductDto);
  }

  @Get('product/:id')
  async getProduct(@Param('id') id: any) {
    return this.productService.getProductById(id);
  }

  @Get('category/:id')
  async getProductByCategory(@Param('id') id: number) {
    return this.productService.getByCategory(id);
  }

  @Get('listcategory')
  async listCategory() {
    return this.productService.listAllCategory();
  }

  @Post('category/:id')
  async editCategory(
    @Param('id') id: number,
    @Body() editCategory: EditCategoryDto,
  ) {
    return this.productService.adminEditCategory(id, editCategory);
  }

  @Delete('category/:id')
  async deleteCategory(@Param('id') id: number) {
    return this.productService.adminDeleteCategory(id);
  }

  @Post('newcategory')
  async newCategory(@Body() newCategory: NewCategoryDto) {
    return this.productService.adminNewCategory(newCategory);
  }

  @Get('getSixproduct')
  async get6Product() {
    return this.productService.list6Product();
  }

  @Post('product/:id')
  async editProduct(
    @Param('id') id: number,
    @Body() editProductDto: EditProductDto,
  ) {
    return this.productService.editProduct(id, editProductDto);
  }

  @Delete('product/:id')
  async deleteProduct(@Param('id') id: number) {
    return this.productService.deleteThisProduct(id);
  }

  @Get('lowquantity')
  async checkQty() {
    return this.productService.adminCheckQty();
  }
}
