import { Form, Card } from "antd";
import style from "./ChangePassword.module.css";
import DynamicForm from "../../../components/Common/AuthForm/AuthForm";
import PageMeta from "../../../components/Common/PageMeta";
import { LockOutlined } from "@ant-design/icons";

const formFields = [
  {
    label: "Password",
    name: "password",
    placeholder: "Enter your Password",
    rules: [{ required: true, message: "Please enter your password" }],
    type: "password",
    icon: <LockOutlined />,
    showLabel: true,
  },
  {
    label: "Confirm Password",
    name: "confirm-password",
    placeholder: "Enter your Password",
    rules: [{ required: true, message: "Please enter your password" }],
    type: "password",
    icon: <LockOutlined />,
    showLabel: true,
  },
  {
    name: "change-password-btn",
    type: "button",
    label: "Save Changes",
    className: ["primary-btn", style["save-btn"]],
    htmlType: "submit",
    block: true,
  },
];

const ChangePassword = () => {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <>
      <PageMeta title="Change Password" description="..." />
      <h2>Change Password</h2>

      <div className={style["main-form"]}>
        <Card className={style["card"]}>
          <Form layout="vertical" onFinish={onFinish}>
            <DynamicForm fields={formFields} />
          </Form>
        </Card>
      </div>
    </>
  );
};

export default ChangePassword;
