import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
import style from "./Navbar.module.css";

const Navbar = ({ collapsed, onCollapse }) => {
  const items = [
    { key: "1", icon: <DashboardOutlined />, label: "Dashboard", path: "/dashboard" },
    { key: "2", icon: <UserOutlined />, label: "Users", path: "/dashboard/users" },
    {
      key: "3",
      icon: <SettingOutlined />,
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className={style["sidebar"]}>
      <div className={style["logo"]}>
        {collapsed ? (
          <img className={style["fav-img"]} src="/images/favicon.png" />
        ) : (
          <img className={style["logo-img"]} src="/images/logo.png" />
        )}
      </div>
      <Menu defaultSelectedKeys={["1"]} className={style['menu']}>
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path} className={style['menu-li']}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Navbar;
