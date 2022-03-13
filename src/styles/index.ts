import styled, { css } from "styled-components";
import { device } from "./media";

export const Container = styled.div`
  padding: 0 16px;
  ${device.tablet} {
    max-width: 960px;
    padding: 0px 24px;
  }

  ${device.desktop} {
    max-width: 1280px;
    padding: 0px 40px;
  }
`;
