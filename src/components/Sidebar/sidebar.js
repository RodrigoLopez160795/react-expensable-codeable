import * as S from "./styles";
import { ReactComponent as Logo } from "../../assets/expensable-logo.svg";
import SidebarNav from "../SidebarNav";

function Sidebar() {
  return (
    <S.Wrapper>
      <Logo />
      <SidebarNav />
    </S.Wrapper>
  );
}

export default Sidebar;
