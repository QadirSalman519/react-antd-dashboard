import { Card, Form } from "antd";
import { LockOutlined } from "@ant-design/icons";
import DynamicForm from "../../../components/Common/AuthForm/AuthForm";
import style from "./ForgetPassword.module.css";
import { Link } from "react-router-dom";

const formFields = [
  {
    name: "email",
    placeholder: "Enter your email",
    rules: [{ required: true, message: "Please enter your email" }],
    type: "email",
    icon: <LockOutlined />,
  },
  {
    name: "forget-password-btn",
    type: "button",
    label: "Forget Password",
    className: "primary-btn",
    htmlType: "submit",
    block: true,
  },
];

const ForgetPassword = () => {
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
          <h4>Forget Password</h4>
          <p>Enter the email to reset your password.</p>
        </div>
        <Form onFinish={onFinish}>
          <DynamicForm fields={formFields} />
        </Form>
        <div className={style["link"]}>
            <Link to="/login" className={style["link-a"]}>Back to Login</Link>
        </div>
      </Card>
    </div>
  );
};

export default ForgetPassword;
