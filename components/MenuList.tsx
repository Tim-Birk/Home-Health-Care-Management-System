import { Menu } from "antd";
import * as _ from "lodash";

type MenuListProps = {
  iterableList: string[];
  name: string;
  handleDropdownChange: (event: any) => void;
};

type ObjMenuListProps = {
  iterableList: object[];
  name: string;
  handleDropdownChange: (event: any) => void;
};

export const MenuList = ({
  iterableList,
  name,
  handleDropdownChange,
}: MenuListProps) => (
  <Menu style={{ height: "200px", overflowY: "scroll" }}>
    {iterableList.map((item: string) => (
      <Menu.Item
        key={`${item}`}
        title={`${name}`}
        onClick={handleDropdownChange}
      >
        {item}
      </Menu.Item>
    ))}
  </Menu>
);


export const ObjectMenuList = ({
  iterableList,
  name,
  handleDropdownChange,
}: ObjMenuListProps) => (
  <Menu style={{ height: "200px", overflowY: "scroll" }}>
    {iterableList.map((item: any) => (
      <Menu.Item
        key={`${item.id}`}
        title={`${name}`}
        onClick={handleDropdownChange}
      >
        {item.name}
        {/* {_.get("name", _.find(iterableList, {id: item.id}),{})} */}
      </Menu.Item>
    ))}
  </Menu>
);
