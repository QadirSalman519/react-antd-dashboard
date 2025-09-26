import {
  DeleteOutlined,
  EditOutlined,
  UserOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Table, Button, Space, Switch, Row, Col } from "antd";
import StatCard from "../../../components/Common/Card/Card";
import PageMeta from "../../../components/Common/PageMeta";

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Qadir Salman",
      email: "qadir@example.com",
      role: "Admin",
      active: true,
    },
    {
      id: 2,
      name: "Ali Khan",
      email: "ali@example.com",
      role: "Manager",
      active: false,
    },
    {
      id: 3,
      name: "Sara Ahmed",
      email: "sara@example.com",
      role: "User",
      active: true,
    },
    {
      id: 4,
      name: "Imran Ali",
      email: "imran@example.com",
      role: "User",
      active: false,
    },
    {
      id: 5,
      name: "Fatima Noor",
      email: "fatima@example.com",
      role: "User",
      active: true,
    },
    {
      id: 6,
      name: "Usman Riaz",
      email: "usman@example.com",
      role: "User",
      active: true,
    },
  ];

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.active).length;
  const inactiveUsers = totalUsers - activeUsers;

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role" },
    {
      title: "Status",
      key: "status",
      render: (record) => (
        <Switch
          checkedChildren="Active"
          unCheckedChildren="Inactive"
          defaultChecked={record.active}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space>
          <Button type="primary" size="small" icon={<EditOutlined />} />
          <Button danger size="small" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <PageMeta title="Users Management" description="..." />
      <h2>Userss Management</h2>

      <Row gutter={16} style={{ marginBottom: 20 }}>
        <Col span={8}>
          <StatCard
            title="Total Users"
            value={totalUsers}
            color="#1890ff"
            icon={<UserOutlined />}
          />
        </Col>
        <Col span={8}>
          <StatCard
            title="Active Users"
            value={activeUsers}
            color="#52c41a"
            icon={<CheckCircleOutlined />}
          />
        </Col>
        <Col span={8}>
          <StatCard
            title="Inactive Users"
            value={inactiveUsers}
            color="#ff4d4f"
            icon={<CloseCircleOutlined />}
          />
        </Col>
      </Row>

      {/* Users Table */}
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Users;
