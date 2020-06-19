import { Row, Col, Form, Input, Dropdown, Button, DatePicker, Checkbox } from "antd";
import * as _ from "lodash";
import { MenuList, ObjectMenuList } from "./MenuList";
import moment from "moment";
import { getDateFormat, formatSS } from "../utils/format";

type objListItem = {
  id: string;
  name: string;
};

type InputType = {
  name: string;
  value?: string;
  span: number;
  maxLength?: number;
  list?: string[];
  objList?: objListItem[];
  rules?: any;
  checked?: boolean;
  handleInputChange?: (event: any) => void;
  handleDropdownChange?: (event: any) => void;
  handleDateChange?: (date: any, dateString: string, id: string) => void;
};

const defaultOffset = 1;

export const GenerateInput = ({
  name,
  value,
  handleInputChange,
  span,
  rules,
  maxLength
}: InputType) => (
  <Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
        name={name}
        valuePropName={name.toLowerCase()}
        initialValue={value}
        rules={rules}
      >
        <Input
          placeholder={`${_.upperFirst(
            name.replace(/([a-z])([A-Z])/g, "$1 $2")
          )}`}
          name={`${name}`}
          value={value}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
      </Form.Item>
    </Col>
  </Row>
);

export const GeneratePasswordInput = ({
  name,
  value,
  handleInputChange,
  span,
  rules,
  maxLength
}: InputType) => {
  return (<Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
        name={name}
        valuePropName={name.toLowerCase()}
        initialValue={value}
        rules={rules}
      >
        <Input.Password
          placeholder={`${_.upperFirst(
            name.replace(/([a-z])([A-Z])/g, "$1 $2")
          )}`}
          name={`${name}`}
          value={value}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
      </Form.Item>
    </Col>
  </Row>
)};

const dateFormat = "MM/DD/YYYY";

export const GenerateDateInput = ({
  name,
  value,
  handleDateChange,
  span,
  rules,
}: InputType) => (
  <Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
        name={name}
        initialValue={getDateFormat(value)}
        rules={rules}
      >
        <DatePicker
          placeholder={"mm/dd/yyyy"}
          name={`${name}`}
          value={getDateFormat(value)}
          format={dateFormat}
          onChange={(date, dateString) =>
          handleDateChange(date, dateString, name)
          }
        />
      </Form.Item>
    </Col>
  </Row>
);


export const GenerateCheckbox = ({
  name,
  value,
  handleInputChange,
  span,
  rules,
  checked,
}: InputType) => (
  <Row>
    <Col span={span} offset={defaultOffset}>
      <Form.Item
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
        name={name}
        valuePropName={name.toLowerCase()}
        initialValue={value}
        rules={rules}
      >
        <Checkbox
          name={`${name}`}
          checked={checked}
          onChange={handleInputChange}
        />
      </Form.Item>
    </Col>
  </Row>
);

export const GenerateTextInput = ({
  name,
  value,
  handleInputChange,
}: InputType) => (
  <Row>
    <Col span={12} offset={defaultOffset}>
      <Form.Item label={`${name}`}>
        <Input.TextArea
          placeholder={`${name}`}
          name={`${name}`}
          value={value}
          onChange={handleInputChange}
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
  rules,
}: InputType) => (
  <Row>
    <Col span={12} offset={defaultOffset}>
      <Form.Item
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
        name={name}
        rules={rules}
        initialValue={value}
      >
        <Dropdown
          overlay={
            <MenuList
              iterableList={list}
              name={name}
              handleDropdownChange={handleDropdownChange}
            />
          }
          placement="bottomLeft"
        >
          <Button>{value}</Button>
        </Dropdown>
      </Form.Item>
    </Col>
  </Row>
);

export const GenerateObjectDropdown = ({
  name,
  value,
  objList,
  handleDropdownChange,
  rules,
}: InputType) => (
  <Row>
    <Col span={12} offset={defaultOffset}>
      <Form.Item
        label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
        name={name}
        rules={rules}
        initialValue={value}
      >
        <Dropdown
          overlay={
            <ObjectMenuList
              iterableList={objList}
              name={name}
              handleDropdownChange={handleDropdownChange}
            />
          }
          placement="bottomLeft"
        >
          <Button>{value}</Button>
        </Dropdown>
      </Form.Item>
    </Col>
  </Row>
);
