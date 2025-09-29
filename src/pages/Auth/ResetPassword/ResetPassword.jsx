import { Card, Form } from "antd";
import { LockOutlined } from "@ant-design/icons";
import DynamicForm from "../../../components/Common/AuthForm/AuthForm";
import style from "./ResetPassword.module.css";
import { Link } from "react-router-dom";

const formFields = [
  {
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    rules: [{ required: true, message: "Please enter your email" }],
    type: "email",
    icon: <LockOutlined />,
    showLabel: true,
  },
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
    name: "reset-password-btn",
    type: "button",
    label: "Reset Password",
    className: ["primary-btn", style["save-btn"]],
    htmlType: "submit",
    block: true,
  },
];

const ResetPassword = () => {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className={style["main-form"]}>
      <Card className={style["card"]}>
        <div className={style["logo"]}>
          <img src="../../../../public/images/logo.png" />
        </div>
        <div className={style["text"]}>
          <h4>Reset Password</h4>
          <p>Enter your password here!</p>
        </div>
        <Form className="login-form" layout="vertical" onFinish={onFinish}>
          <DynamicForm fields={formFields} />
        </Form>
        <div className={style["link"]}>
          <Link to="/forget-password" className={style["link-a"]}>
            Back to Forget Password
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ResetPassword;
