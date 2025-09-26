import { Form, Input, Select, Checkbox, DatePicker, Button } from "antd";

const { Option } = Select;

const DynamicForm = ({ fields }) => {
  return (
    <>
      {fields.map((field) => (
        <Form.Item key={field.name} name={field.name} rules={field.rules}>
          {field.type === "password" && (
            <Input.Password
              prefix={field.icon ? field.icon : ""}
              placeholder={field.placeholder}
            />
          )}

          {field.type === "text" && (
            <Input
              prefix={field.icon ? field.icon : ""}
              placeholder={field.placeholder}
            />
          )}

          {field.type === "email" && (
            <Input
              prefix={field.icon ? field.icon : ""}
              placeholder={field.placeholder}
            />
          )}

          {field.type === "select" && (
            <Select placeholder={field.placeholder}>
              {field.options?.map((opt) => (
                <Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Select>
          )}

          {field.type === "checkbox" && <Checkbox>{field.label}</Checkbox>}

          {field.type === "date" && <DatePicker style={{ width: "100%" }} />}

          {field.type === "button" && (
            <Button
              type={field.buttonType || ""}
              htmlType={field.htmlType || "button"}
              block={field.block || false}
              className={field.className ?field.className : ""}
            >
              {field.label}
            </Button>
          )}
        </Form.Item>
      ))}
    </>
  );
};

export default DynamicForm;
