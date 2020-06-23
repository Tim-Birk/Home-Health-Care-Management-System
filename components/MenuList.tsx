import { Menu, Select, Dropdown } from "antd";
import * as _ from "lodash";
import Icon from "@ant-design/icons";
import { useState } from "react";

type MenuListProps = {
  iterableList: string[];
  name: string;
  handleDropdownChange: (event: any) => void;
  handleMenuClick: (event: any) => void;
};

type ObjMenuListProps = {
  iterableList: object[];
  name: string;
  handleDropdownChange: (event: any) => void;
  handleMenuClick: (event: any) => void;
};

export const MenuList = ({
  iterableList,
  name,
  handleDropdownChange,
  handleMenuClick
}: MenuListProps) => {
  
  return (
    <Menu style={{ maxHeight: "250px", overflowY: "scroll" }} onClick={handleMenuClick}>
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
};
// export const MenuList = ({
//   iterableList,
//   name,
//   handleDropdownChange,
// }: MenuListProps) => {

//   const menu = (
//     <Menu>
//       {iterableList.map((item: string) => (
//         <Menu.Item
//           key={`${item}`}
//           title={`${name}`}
//           onClick={handleDropdownChange}
//         >
//           {item}
//         </Menu.Item>
//       ))}
//     </Menu>
//   );

//   return (
//     <Dropdown overlay={menu} trigger={['click']}>
//       <a className="ant-dropdown-link" href="#">
//         Hover me <Icon type="down" />
//       </a>
//     </Dropdown>
//   );
// };

export const ObjectMenuList = ({
  iterableList,
  name,
  handleDropdownChange,
  handleMenuClick
}: ObjMenuListProps) => (
  <Menu style={{ height: "200px", overflowY: "scroll" }} onClick={handleMenuClick}>
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
