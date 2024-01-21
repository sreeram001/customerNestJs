"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const customer_dto_1 = require("./dto/customer.dto");
const uuid_1 = require("uuid");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    create(data, response) {
        data.uId = (0, uuid_1.v4)();
        try {
            this.customerService.create(data);
        }
        catch (error) {
            return response.status(common_1.HttpStatus.OK).json({
                status: "failed",
                statusCode: common_1.HttpStatus.FORBIDDEN,
                data: "Customer Data Not Inserted"
            });
        }
        return response.status(common_1.HttpStatus.OK).json({
            status: "success",
            statusCode: common_1.HttpStatus.OK,
            data: "Customer Data Inserted Successfully"
        });
    }
    findAll(req, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var filterField = {};
                var sortValue = {};
                if (req.status) {
                    filterField = Object.assign(filterField, { status: req.status });
                }
                if (req.name) {
                    filterField = Object.assign(filterField, { name: { $regex: '.*' + req.name + '.*' } });
                }
                var limit = 10;
                if (req.limit) {
                    limit = req.limit;
                }
                var page = 1;
                if (req.page) {
                    page = req.page;
                }
                if (req.sortName == "createdAt") {
                    sortValue = Object.assign(sortValue, { createdAt: req.sort });
                }
                else if (req.sortName == "updatedAt") {
                    sortValue = Object.assign(sortValue, { updatedAt: req.sort });
                }
                else {
                    sortValue = Object.assign(sortValue, { createdAt: -1 });
                }
                var count = yield this.customerService.getCustomerCount(filterField);
                var customerData = yield this.customerService.getCustomerFilter(filterField, limit, page, sortValue);
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: common_1.HttpStatus.OK,
                    count: count,
                    data: customerData
                });
            }
            catch (_a) {
                throw new common_1.InternalServerErrorException("Server error");
            }
        });
    }
    findOne(id, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield this.customerService.findOne(id);
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: common_1.HttpStatus.OK,
                    data: customer
                });
            }
            catch (_a) {
                throw new common_1.NotFoundException("customer not found");
            }
        });
    }
    update(id, updateCustomerDto, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.customerService.update(id, updateCustomerDto);
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: common_1.HttpStatus.OK,
                    data: "customer data updated successfully"
                });
            }
            catch (_a) {
                throw new common_1.InternalServerErrorException("server error");
            }
        });
    }
    remove(id, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.customerService.remove(id);
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: common_1.HttpStatus.OK,
                    data: "customer data deleted successfully"
                });
            }
            catch (_a) {
                throw new common_1.InternalServerErrorException("server error");
            }
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.customerFilterDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "remove", null);
CustomerController = __decorate([
    (0, common_1.Controller)('customer'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map