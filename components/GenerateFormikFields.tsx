import { Row, Col } from "antd";
import { Form, Input, DatePicker, Checkbox } from "formik-antd";
import * as _ from "lodash";
import { MenuList, ObjectMenuList } from "./MenuList";
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
  handleDropdownChange?: (event: any, name: any) => void;

  handleChange?: (event: any, name: string) => void;
  handleBlur?: (event: any) => void;
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  errors?: any;
  touched?: any;
  mask?: any;
};

const defaultOffset = 1;

export const GenerateInput = ({ name, span, maxLength }: InputType) => (
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
  type
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

// export const GenerateTextInput = ({
//   name,
//   value,
//   handleInputChange,
// }: InputType) => (
//   <Row>
//     <Col span={12} offset={defaultOffset}>
//       <Form.Item label={`${name}`}>
//         <Input.TextArea
//           placeholder={`${name}`}
//           name={`${name}`}
//           value={value}
//           onChange={handleInputChange}
//         />
//       </Form.Item>
//     </Col>
//   </Row>
// );

// export const GenerateDropdown = ({
//   name,
//   value,
//   list,
//   handleDropdownChange,
//   rules,
// }: InputType) => {
//   const [menuState, SetMenuState] = useState({ visible: false });
//   const onClick = ({ key }) => {
//     SetMenuState((state) => ({ ...state, visible: !state.visible }));
//   };
//   const handleVisibleChange = (flag) => {
//     SetMenuState((state) => ({ ...state, visible: flag }));
//   };
//   return (
//     <Row>
//       <Col span={12} offset={defaultOffset}>
//         <Form.Item
//           label={`${_.upperFirst(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}`}
//           name={name}
//           rules={rules}
//           initialValue={value}
//         >
//           <Dropdown
//             visible={menuState.visible}
//             onVisibleChange={handleVisibleChange}
//             overlay={
//               <MenuList
//                 iterableList={list}
//                 name={name}
//                 handleDropdownChange={handleDropdownChange}
//                 handleMenuClick={onClick}
//               />
//             }
//             placement="bottomLeft"
//           >
//             <Button>{value}</Button>
//           </Dropdown>
//         </Form.Item>
//       </Col>
//     </Row>
//   );
// };
