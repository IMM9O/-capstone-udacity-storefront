"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var Home_1 = __importDefault(require("./pages/Home"));
var Products_1 = __importDefault(require("./pages/Products"));
var About_1 = __importDefault(require("./pages/About"));
var Orders_1 = __importDefault(require("./pages/Orders"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
        <react_router_dom_1.Route path="/products" element={<Products_1.default />}/>
        <react_router_dom_1.Route path="/orders" element={<Orders_1.default />}/>
        <react_router_dom_1.Route path="/about" element={<About_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
//# sourceMappingURL=App.js.map