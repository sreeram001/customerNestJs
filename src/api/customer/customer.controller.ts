import { Controller, Get, Body, Patch, Param, Delete, Query, Res, HttpStatus, Post, InternalServerErrorException, NotFoundException, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto, customerFilterDto } from './dto/customer.dto';
import { v4 as uuidv4 } from 'uuid';
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Post()
  create(@Body() data: CustomerDto, @Res() response) {
    data.uId = uuidv4()
    try {
      this.customerService.create(data);
    } catch (error) {
      return response.status(HttpStatus.OK).json({
        status: "failed",
        statusCode: HttpStatus.FORBIDDEN,
        data: "Customer Data Not Inserted"
      })
    }
    return response.status(HttpStatus.OK).json({
      status: "success",
      statusCode: HttpStatus.OK,
      data: "Customer Data Inserted Successfully"
    })
  }

  @Get()
  async findAll(@Query() req: customerFilterDto, @Res() response) {
    try {
      var filterField = {}
      var sortValue = {}

      // filter by fields
      if (req.status) {
        filterField = Object.assign(filterField, { status: req.status });
      }
      if (req.name) {
        filterField = Object.assign(filterField, { name: { $regex: '.*' + req.name + '.*' } });
      }

      // set limit
      var limit = 10
      if (req.limit) {
        limit = req.limit;
      }

      // set page
      var page = 1
      if (req.page) {
        page = req.page;
      }

      // sorting
      if (req.sortName == "createdAt") {
        sortValue = Object.assign(sortValue, { createdAt: req.sort });
      } else if (req.sortName == "updatedAt") {
        sortValue = Object.assign(sortValue, { updatedAt: req.sort });
      } else {
        sortValue = Object.assign(sortValue, { createdAt: -1 });
      }

      // get customer count based on filter
      var count = await this.customerService.getCustomerCount(filterField);

      // get all customer based on filter
      var customerData = await this.customerService.getCustomerFilter(filterField, limit, page, sortValue);

      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        count: count,
        data: customerData
      })
    } catch {
      throw new InternalServerErrorException("Server error")
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const customer = await this.customerService.findOne(id);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: customer
      })
    } catch {
      throw new NotFoundException("customer not found")
    }

  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCustomerDto: CustomerDto, @Res() response) {
    try {
      await this.customerService.update(id, updateCustomerDto);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: "customer data updated successfully"
      })
    } catch {
      throw new InternalServerErrorException("server error")
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    try {
      await this.customerService.remove(id);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: "customer data deleted successfully"
      })
    } catch {
      throw new InternalServerErrorException("server error")
    }
  }
}
