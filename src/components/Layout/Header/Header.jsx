import { Layout } from "antd";
import style from "./Header.module.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  SettingOutlined,
  LogoutOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = ({ collapsed, setCollapsed }) => {
  const items = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <Link to="/dashboard/edit-profile">Edit Profile</Link>,
      icon: <SettingOutlined />,
    },
    {
      key: "3",
      label: <Link to="/dashboard/change-password">Change Password</Link>,
      icon: <EditOutlined />,
    },
    {
      key: "4",
      label: <Link to="/login">Logout</Link>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Header className={style["header"]}>
      {collapsed ? (
        <MenuUnfoldOutlined
          className={style["header-menu"]}
          onClick={() => setCollapsed(false)}
        />
      ) : (
        <MenuFoldOutlined
          className={style["header-menu"]}
          onClick={() => setCollapsed(true)}
        />
      )}
      <Dropdown menu={{ items }}>
        <a
          className={style["header-dropdown-a"]}
          onClick={(e) => e.preventDefault()}
        >
          <Space>
            Welcome, Qadir Salman
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Header>
  );
};

export default AppHeader;
