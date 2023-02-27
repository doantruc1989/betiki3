import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import SaveOrderdto from './dto/saveOrder.dto';
import { SearchCartDto } from './dto/searchCart.dto';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post('orderitem')
  async saveOrderItem(@Body() saveOrderdto: SaveOrderdto) {
    return this.cartService.saveOrder(saveOrderdto);
  }

  @Get('admin/listorder')
  async listorder(@Query('page') page: number) {
    return this.cartService.getListOrder(page);
  }

  @Get('admin/listorder/search')
  querySearch(@Query() searchCartDto:SearchCartDto) {
    return this.cartService.querySearchOrder(searchCartDto)
  }

  @Get('admin/listorder/:id')
  async getOrderById(@Param('id') id: number) {
    return this.cartService.getorderByid(id);
  }

  @Patch('admin/listorder/:id')
  async updateOrder(@Param('id') id: number, @Body() saveOrderdto: SaveOrderdto) {
    return this.cartService.updateOrderByid(id, saveOrderdto);
  }

  @Delete('admin/listorder/:id')
  async deleteById(@Param('id') id: number) {
    return this.cartService.deletebyId(id);
  }

  @Get('admin/order/:id')
  async listorderbyId(@Param('id') id: number) {
    const result = await this.cartService.getListOrderbyId(id);
    return result;
  }

  @Get('admin/day')
  async getSaleRevenueDay() {
    return this.cartService.adminGetDay();
  }

  @Get('admin/week')
  async getSaleRevenueWeek() {
    return this.cartService.adminGetWeek();
  }

  @Get('admin/month')
  async getSaleRevenueMonth() {
    return this.cartService.adminGetMonth();
  }

//   @Get('admin/countorders/:field')
//   async getTotalOrder(@Param('field') field: number) {
//     return this.cartService.adminTotalOrder(field);
//   }

  @Get('admin/checkstatus')
  async checkStatus() {
    return this.cartService.checkStatusOrder();
  }

  @Get('/total')
  getcountUser() {
    return this.cartService.getCountOrder();
  }
}
