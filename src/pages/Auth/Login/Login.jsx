import { Card, Form } from "antd";
import { LockOutlined } from "@ant-design/icons";
import DynamicForm from "../../../components/Common/AuthForm/AuthForm";
import style from "./Login.module.css";
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
    placeholder: "Password",
    rules: [{ required: true, message: "Please enter your password" }],
    type: "password",
    icon: <LockOutlined />,
    showLabel: true,
  },
  {
    name: "login-btn",
    type: "button",
    label: "Login",
    className: ["primary-btn", style["save-btn"]],
    htmlType: "submit",
    block: true,
  },
];

const Login = () => {
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
          <h4>Login into account</h4>
          <p>Use your credentials to access your account.</p>
        </div>
        <Form className="login-form" layout="vertical" onFinish={onFinish}>
          <DynamicForm fields={formFields} />
        </Form>
        <div className={style["link"]}>
          <Link to="/forget-password" className={style["link-a"]}>
            Forget Password?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
