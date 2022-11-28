import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../oganisms/user/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `エレン・イェーガー${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "1234@example.com",
    phone: "090-111-222",
    company: {
      name: "株式会社あああああ"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  //もしstateがturuなら、stateのisAdminをisAdmin変数へ格納
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <h2>ユーザページです</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
