import styled from "styled-components";

export const ScalingImages = styled.div`
  display: flex;

  @media screen and (max-width: 660px) {
    display: inline-block;
  }
`;

export const Image = styled.img`
  width: 50%;
  @media screen and (max-width: 660px) {
    width: 100vw;
  }
`;
