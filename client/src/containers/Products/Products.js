"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = __importDefault(require("../../components/Product"));
require("./Products.css");
function Products(props) {
    return (<div className='products-container'>
      {props.products.map(function (p) { return (<Product_1.default key={p.id} image_url={p.image_url} name={p.name} price={p.price}/>); })}
    </div>);
}
exports.default = Products;
//# sourceMappingURL=Products.js.map