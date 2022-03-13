import React from "react";
import { Container } from "../../styles";
import { HeaderSearch, HeaderWrap } from "../List/style";
import { Activity, NumberResult, Result } from "./styles";

export default function NoResult() {
  return (
    <>
      <HeaderWrap>
        <Container>
          <HeaderSearch>
            <img src="/img/icons/search.svg" alt="" />
            <img src="/img/icons/logo-cat.svg" alt="" />
            <img src="/img/icons/user.svg" alt="" />
          </HeaderSearch>
        </Container>
      </HeaderWrap>
      <Container style={{ background: "#FAF9FC" }}>
        <Result>
          <NumberResult>
            <h3>0 Result</h3>
            <div className="btn-clear">CLEAR SEARCH</div>
          </NumberResult>
          <p>Searched for Channel 3 Activities from 20/06 to 24/06 </p>
        </Result>
      </Container>
      <Container>
        <Activity>
          <img src="./img/icons/no-activity.svg" alt="" />
          <p>No activity found</p>
        </Activity>
      </Container>
    </>
  );
}
