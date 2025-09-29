import { Form, Card } from "antd";
import style from "./EditProfile.module.css";
import DynamicForm from "../../../components/Common/AuthForm/AuthForm";
import { Link } from "react-router-dom";
import PageMeta from "../../../components/Common/PageMeta";

const formFields = [
  {
    label: "Name",
    name: "name",
    placeholder: "Name",
    rules: [{ required: true, message: "Please enter your name" }],
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    rules: [{ required: true, message: "Please enter your email" }],
    type: "email",
  },
  {
    name: "edit-profile-btn",
    type: "button",
    label: "Save Changes",
    className: ["primary-btn", style["save-btn"]],
    htmlType: "submit",
    block: true,
  },
];

const EditProfile = () => {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <>
      <PageMeta title="Users Management" description="..." />
      <h2>Edit Profile</h2>

      <div className={style["main-form"]}>
        <Card className={style["card"]}>
          <Form onFinish={onFinish}>
            <DynamicForm fields={formFields} />
          </Form>
        </Card>
      </div>
    </>
  );
};

export default EditProfile;
