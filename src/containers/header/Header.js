import React from "react";
import { HeaderWrapper, Nav } from "./Header.style";
import { Button, Dropdown, Icon, Search } from "semantic-ui-react";
import Jenny from "../../assets/jenny.jpg";

const trigger = (
  <span style={{ fontWeight: 400 }}>
    <img src={Jenny} alt="profile-img" className="ui avatar image" /> Hello,
    Jenny Hess
  </span>
);

const userDropdown = [
  {
    key: "Log out",
    text: "Log out",
    value: "Log out",
  },
];
export const Header = () => {
  return (
    <HeaderWrapper>
      Marketplace
      <Nav>
        <Search
          input={{ icon: "search", iconPosition: "left" }}
          placeholder="Search"
          size="small"
        />
        <Button icon>
          <Icon name="bell outline" size="large" />
        </Button>
        <Dropdown trigger={trigger} options={userDropdown} />
      </Nav>
    </HeaderWrapper>
  );
};
