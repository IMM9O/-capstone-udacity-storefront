"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var Meta = antd_1.Card.Meta;
function Product(props) {
    return (<antd_1.Card hoverable style={{ width: 240 }} cover={<img alt={props.name} src={props.image_url}/>}>
      <Meta title={props.name} description={props.price}/>
    </antd_1.Card>);
}
exports.default = Product;
//# sourceMappingURL=Product.js.map