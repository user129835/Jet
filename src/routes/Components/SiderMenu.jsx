import React, { useState } from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;
function SideMenu() {
  const [ setSelectedItem] = useState(null);
  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <Sider className="saider" width={256}>
      <img className='menu__logo' src={require('../camp-logo.png')} alt="" />
      <Menu className="mainu" mode="inline" theme='dark'>
        <Menu.Item onClick={() => handleMenuItemClick("Item 1")}><a href={`/Home`}>Sākums</a></Menu.Item>
        <Menu.Item onClick={() => handleMenuItemClick("Item 2")}><a href={`/News`}>Jaunumi</a></Menu.Item>
        {(
          <SubMenu title="Vairāk par pulciņu">
            <Menu.Item onClick={() => handleMenuItemClick("Item 3")}><a href={`/Plans`}>Plāns</a></Menu.Item>
            <Menu.Item onClick={() => handleMenuItemClick("Item 4")}><a href={`/Analysis`}>Analīze</a></Menu.Item>
            <Menu.Item onClick={() => handleMenuItemClick("Item 5")}><a href={`/List`}>Saraksts</a></Menu.Item>
            <Menu.Item onClick={() => handleMenuItemClick("Item 6")}><a href={`/History`}>Vēsture</a></Menu.Item>
          </SubMenu>
        )}
      </Menu>
    </Sider>
  );
}
export default SideMenu;