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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CustomerService = class CustomerService {
    constructor(customerModel) {
        this.customerModel = customerModel;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const review = new this.customerModel(data);
            return yield review.save();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customerModel.find().exec();
        });
    }
    getCustomerCount(customerFilterDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customerModel.count(customerFilterDto);
        });
    }
    getCustomerFilter(customerFilterDto, ratingFieldLimit, page, sortValue) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customerModel.find(customerFilterDto)
                .limit(Number(ratingFieldLimit))
                .sort(sortValue)
                .skip((page - 1) * ratingFieldLimit)
                .exec();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customerModel.findById(id).exec();
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customerModel.findByIdAndUpdate({ _id: id }, data, { new: true }).exec();
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customerModel.findByIdAndDelete(id);
        });
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('customer')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map