import { Row, Col } from "antd";
import { Form, Input, DatePicker, Checkbox } from "formik-antd";
import * as _ from "lodash";
import { MenuList, ObjectMenuList, ObjectMenuListMany } from "./MenuList";
import InputMask from "react-input-mask";

type objListItem = {
  id: string;
  name: string;
};

type InputType = {
  name: string;
  span: number;
  value?: any;
  type?: string;
  maxLength?: number;
  list?: string[];
  objList?: objListItem[];
  checked?: boolean;
  mode?: string;
  handleDropdownChange?: (event: any, name: any) => void;

  handleChange?: (event: any, name: string) => void;
  handleBlur?: (event: any) => void;
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  errors?: any;
  touched?: any;
  mask?: any;
  min?: string;
  max?: string;
};

const defaultOffset = 1;

export const GenerateInput = ({
  name,
  span,
  maxLength,
  type,
  min,
  max,
}: InputType) => (
  <Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        name={name}
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
      >
        <Input
          placeholder={`${_.upperFirst(
            name.replace(/([a-z])([A-Z])/g, "$1 $2")
          )}`}
          name={`${name}`}
          maxLength={maxLength}
          type={type}
          min={min}
          max={max}
        />
      </Form.Item>
    </Col>
  </Row>
);
export const GenerateTextArea = ({
  name,
  span,
  maxLength,
}: InputType) => (
  <Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        name={name}
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
      >
        <Input.TextArea
          placeholder={`${_.upperFirst(
            name.replace(/([a-z])([A-Z])/g, "$1 $2")
          )}`}
          name={`${name}`}
          maxLength={maxLength}
        />
      </Form.Item>
    </Col>
  </Row>
);

const CustomInput = (props) => {
  return <InputMask {...props} />;
};

export const GenerateCustomInput = ({
  name,
  span,
  handleChange,
  handleBlur,
  errors,
  mask,
  value,
  type,
}: InputType) => (
  <Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        name={name}
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
      >
        <CustomInput
          mask={mask}
          name={name}
          id={name}
          placeholder={`${_.upperFirst(
            name.replace(/([a-z])([A-Z])/g, "$1 $2")
          )}`}
          onBlur={handleBlur}
          onChange={(e) => handleChange(e, name)}
          className="ant-input"
          value={value}
          error={errors}
          type={type}
        />
      </Form.Item>
    </Col>
  </Row>
);

export const GeneratePasswordInput = ({ name, span, maxLength }: InputType) => (
  <Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        name={name}
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
      >
        <Input.Password
          placeholder={`${_.upperFirst(
            name.replace(/([a-z])([A-Z])/g, "$1 $2")
          )}`}
          name={`${name}`}
          maxLength={maxLength}
        />
      </Form.Item>
    </Col>
  </Row>
);

export const GenerateDropdown = ({
  name,
  value,
  list,
  handleDropdownChange,
  span,
}: InputType) => {
  return (
    <Row>
      <Col span={span} offset={defaultOffset}>
        <Form.Item
          label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
          name={name}
        >
          <MenuList
            iterableList={list}
            name={name}
            handleDropdownChange={handleDropdownChange}
            value={value}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export const GenerateObjectDropdown = ({
  name,
  value,
  objList,
  setFieldValue,
  handleDropdownChange,
  handleBlur,
  mode
}: InputType) => {
  return (
    <Row>
      <Col span={12} offset={defaultOffset}>
        <Form.Item
          label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
          name={name}
        >
          <ObjectMenuList
            iterableList={objList}
            name={name}
            value={value}
            handleDropdownChange={handleDropdownChange}
            handleBlur={handleBlur}
            mode={mode}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export const GenerateObjectDropdownMultiple = ({
  name,
  value,
  objList,
  setFieldValue,
  handleDropdownChange,
  handleBlur,
}: InputType) => {
  return (
    <Row>
      <Col span={12} offset={defaultOffset}>
        <Form.Item
          label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
          name={name}
        >
          <ObjectMenuListMany
            iterableList={objList}
            name={name}
            value={value}
            handleDropdownChange={handleDropdownChange}
            handleBlur={handleBlur}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};


const dateFormat = "MM/DD/YYYY";

export const GenerateDateInput = ({ name, span }: InputType) => (
  <Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
        name={name}
      >
        <DatePicker
          placeholder={"mm/dd/yyyy"}
          name={`${name}`}
          format={dateFormat}
        />
      </Form.Item>
    </Col>
  </Row>
);

export const GenerateCheckbox = ({ name, span }: InputType) => (
  <Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
        name={name}
      >
        <Checkbox name={`${name}`} />
      </Form.Item>
    </Col>
  </Row>
);
