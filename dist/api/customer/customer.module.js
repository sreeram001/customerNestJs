"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const customer_controller_1 = require("./customer.controller");
const customer_entity_1 = require("./entities/customer.entity");
const mongoose_1 = require("@nestjs/mongoose");
let CustomerModule = CustomerModule_1 = class CustomerModule {
};
CustomerModule = CustomerModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'customer', schema: customer_entity_1.CustomerSchema }]),
            CustomerModule_1,
        ],
        controllers: [customer_controller_1.CustomerController],
        providers: [customer_service_1.CustomerService],
        exports: [customer_service_1.CustomerService]
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.module.js.map