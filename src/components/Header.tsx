import React from "react";
import styled from "@emotion/styled";
import { BiSearchAlt2 } from "react-icons/bi";

const Base = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  text-align: center;
  box-shadow: rgb(0 0 0 / 0%) 0px 1px 0px;
  width: 100%;
  height: 62px;
  z-index: 10;
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`;

const MenuListWrapper = styled.div`
  lien-height: 62px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: hidden;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  &:not(:first-of-type) {
    margin-left: 24px;
  }
`;

const MenuButton = styled.button`
  font-size: 15px;
  color: rgb(126, 126, 126);
  cursor: pointer;
  border: none;
  background: none;
  margin-left: 25px;
`;

const SearchMenu = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  height: 62px;
  flex-shirnk: 1;
  margin: 2px 0 0 auto;
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;
`;

const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  > span[class="primary"] {
    color: #990011;
  }
  > span:not(.primary) {
    color: #222;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label`
  background: rgb(245, 245, 247);
  display: felx;
  align-items: center;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-radius: 2px;
  padding: 7px 8px;
`;

const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  background: transparent;
  width: 80%;
  padding: 0 0 0 8px;
  border: 0;
  overflow: hidden;
  caret-color: rgb(53, 53, 53);
  line-height: 23px;
`;

const SignIn = styled.button`
  background: transparent;
  color: rgb(116, 116, 123);
  font-size: 14px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin-left: 30px;
`;
const SignUp = styled.button`
  border-radius: 6px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 14px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
`;

const Header: React.FC = () => {
  const searchPoll = () => {
    // 폴 검색 함수 예정
  };

  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link href="/">
                <TextLogo>
                  <span className="primary">Poll</span>
                  <span> Project</span>
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link href="/poll">
                <MenuButton>Poll</MenuButton>
              </Link>
              <Link href="/poll">
                <MenuButton>Statics</MenuButton>
              </Link>
              <Link href="/poll">
                <MenuButton>Curiosity</MenuButton>
              </Link>
            </Menu>
            <SearchMenu>
              <SearchContainer>
                <SearchFormWrapper>
                  <SearchForm>
                    <SearchLabel>
                      <BiSearchAlt2 />
                      <SearchInput
                        placeholder="궁금한 투표를 검색해 보세요."
                        onChange={searchPoll}
                      />
                    </SearchLabel>
                  </SearchForm>
                </SearchFormWrapper>
              </SearchContainer>
            </SearchMenu>
            <Menu>
              <SignIn>로그인</SignIn>
            </Menu>
            <Menu>
              <SignUp>회원 가입</SignUp>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
};

export default Header;
