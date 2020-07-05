import { Menu } from "antd";
import * as _ from "lodash";
import { Field } from "formik";
import { Select } from "formik-antd";

const Option = Select.Option;

type MenuListProps = {
  iterableList: string[];
  name: string;
  value?: string;
  handleDropdownChange: (event: any, name: any) => void;
  handleBlur?: (event: any) => void;
};

type ObjMenuListProps = {
  iterableList: object[];
  name: string;
  value?: any;
  handleDropdownChange: (event: any, name: any) => void;
  handleBlur?: (event: any) => void;
};

export const MenuList = ({
  iterableList,
  name,
  handleDropdownChange,
  value,
  handleBlur,
}: MenuListProps) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <Select
          {...field}
          onChange={(e) => handleDropdownChange(e, name)}
          onBlur={handleBlur}
          value={value ? value : "Select"}
        >
          {iterableList.map((item: string) => (
            <Option key={`${item}`} value={`${item}`}>
              {item}
            </Option>
          ))}
        </Select>
      )}
    </Field>
  );
};

export const ObjectMenuList = ({
  iterableList,
  name,
  handleDropdownChange,
  value,
  handleBlur,
}: ObjMenuListProps) => (
  <Field name={name}>
    {({ field }) => (
      <Select
        {...field}
        onChange={(e) => {
          return handleDropdownChange(e, name);
        }}
        onBlur={handleBlur}
        value={value}
        defaultValue={{ key: "0", label: "Select", value: "0" }}
        labelInValue
      >
        {iterableList.map((item: any) => {
          return (
            <Option key={`${item.id}`} value={`${item.id}`}>
              {item.name}
            </Option>
          );
        })}
      </Select>
    )}
  </Field>
);
