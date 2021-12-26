"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
require("./Layout.css");
var Header = antd_1.Layout.Header, Sider = antd_1.Layout.Sider, Content = antd_1.Layout.Content;
function AppLayout(props) {
    var _a = (0, react_1.useState)(false), collapsed = _a[0], setCollapsed = _a[1];
    return (<antd_1.Layout className="app-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"/>
        <antd_1.Menu theme="dark" mode="inline">
          <antd_1.Menu.Item key="1" icon={<icons_1.HomeFilled />}>
            <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
          </antd_1.Menu.Item>
          <antd_1.Menu.Item key="2" icon={<icons_1.UserOutlined />}>
            <react_router_dom_1.Link to="/products">Products</react_router_dom_1.Link>
          </antd_1.Menu.Item>
          <antd_1.Menu.Item key="3" icon={<icons_1.VideoCameraOutlined />}>
            <react_router_dom_1.Link to="/orders">Orders</react_router_dom_1.Link>
          </antd_1.Menu.Item>
          <antd_1.Menu.Item key="4" icon={<icons_1.VideoCameraOutlined />}>
            <react_router_dom_1.Link to="/about">About</react_router_dom_1.Link>
          </antd_1.Menu.Item>
          <antd_1.Menu.Item key="5" icon={<icons_1.UploadOutlined />}>
            <react_router_dom_1.Link to="/signup">Signup</react_router_dom_1.Link>
          </antd_1.Menu.Item>
          <antd_1.Menu.Item key="6" icon={<icons_1.UploadOutlined />}>
            <react_router_dom_1.Link to="/login">Login</react_router_dom_1.Link>
          </antd_1.Menu.Item>
        </antd_1.Menu>
      </Sider>
      <antd_1.Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (<icons_1.MenuUnfoldOutlined className="trigger" onClick={function () { return setCollapsed(function (r) { return !r; }); }}/>) : (<icons_1.MenuFoldOutlined className="trigger" onClick={function () { return setCollapsed(function (r) { return !r; }); }}/>)}

          <h1 className='header'>Udacity Storefront</h1>
        </Header>
        <Content className="site-layout-background" style={{
            margin: '24px 16px',
            padding: 24,
        }}>
          {props.children}
        </Content>
      </antd_1.Layout>
    </antd_1.Layout>);
}
exports.default = AppLayout;
//# sourceMappingURL=Layout.js.map