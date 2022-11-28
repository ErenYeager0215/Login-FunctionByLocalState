import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();

  //Steteにあるhistoryオブジェクトに遷移先プッシュして遷移先を指定指定
  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });

  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });

  return (
    <SContainer>
      <h2>TOPトップページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
