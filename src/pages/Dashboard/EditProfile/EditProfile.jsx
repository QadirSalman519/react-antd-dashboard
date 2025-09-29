import { Form, Card } from "antd";
import style from "./EditProfile.module.css";
import DynamicForm from "../../../components/Common/AuthForm/AuthForm";
import PageMeta from "../../../components/Common/PageMeta";

const formFields = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your Name",
    rules: [{ required: true, message: "Please enter your name" }],
    type: "text",
    showLabel: true,
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Enter your Email",
    rules: [{ required: true, message: "Please enter your email" }],
    type: "email",
    showLabel: true,
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
      <PageMeta title="Edit Profile" description="..." />
      <h2>Edit Profile</h2>

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

export default EditProfile;
