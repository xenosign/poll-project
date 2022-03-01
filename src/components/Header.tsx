import React from "react";
import styled from "@emotion/styled";

const Base = styled.header``;
const Navigation = styled.nav``;
const MenuListWrapper = styled.div``;
const MenuList = styled.ul``;
const Menu = styled.li``;
const MenuButton = styled.button``;
const SearchMenu = styled.li``;
const Link = styled.a``;
const TextLogo = styled.h1``;
const SearchContainer = styled.div``;
const SearchFormWrapper = styled.div``;
const SearchForm = styled.form``;
const SearchLabel = styled.label``;
const SearchInput = styled.input``;
const SignIn = styled.button``;
const SignUp = styled.button``;

const Header: React.FC = () => {
    const searchPoll = () => {
        // 폴 검색 함수 예정
    }

    return (
        <Base>
            <Navigation>
                <MenuListWrapper>
                    <Menu>
                        <Link href="/">
                            <TextLogo>
                                <span className="primary">Poll Project</span>
                            </TextLogo>
                        </Link>
                    </Menu>
                    <Menu>
                        <Link href="/poll">
                            <MenuButton>Poll</MenuButton>
                        </Link>
                    </Menu>
                    <SearchMenu>
                        <SearchContainer>
                            <SearchFormWrapper>
                                <SearchForm>
                                    <SearchLabel />
                                    <SearchInput placeholder="궁금한 투표를 검색해 보세요." onChange={searchPoll}/>
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
                </MenuListWrapper>
            </Navigation>
        </Base>
    )
}

export default Header;