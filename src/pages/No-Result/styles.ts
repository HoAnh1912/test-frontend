import styled from "styled-components";

export const Result = styled.div`
  padding-bottom: 11px;
  p {
    font-size: 12px;
    color: #67616d;
    font-family: Source Sans Pro Regular;
  }
`;
export const NumberResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: #8560a9;
    font-size: 16px;
    font-family: Source Sans Pro SemiBold;
  }
  .btn-clear {
    font-size: 10px;
    color: #67616d;
    padding: 6px 10px;
    background: #d5ef7f;
    border-radius: 12px;
    font-family: Source Sans Pro SemiBold;
    cursor: pointer;
  }
`;
export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  img {
    width: 60px;
    height: 60px;
  }
  p {
    font-size: 14px;
    color: #bababa;
    font-family: Source Sans Pro Regular;
    text-align: center;
  }
`;
