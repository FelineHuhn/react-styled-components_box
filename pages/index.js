import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <BoxContaier>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </BoxContaier>
  );
}

const BoxContaier = styled.div`
  display: flex;
`;
