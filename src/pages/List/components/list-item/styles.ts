import styled from "styled-components";

export const ItemListTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  img {
    width: 20px;
    height: 20px;
  }
  a {
    text-decoration: none;
    color: #8560a9;
    font-size: 12px;
    font-family: Source Sans Pro Regular;
    border: 1px solid #d3c1e5;
    border-radius: 10px;
    padding: 2px 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const TileName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-left: 8px;
    font-size: 12px;
    font-family: Source Sans Pro SemiBold;
    color: #67616d;
  }
`;
export const Tile = styled.div`
  font-size: 18px;
  color: #453257;
  margin: 8px 0;
  font-family: Source Sans Pro SemiBold;
  h3 {
    margin-bottom: 0;
  }
`;
export const DateTime = styled.div`
  display: flex;
  align-items: center;
  color: #8560a9;
  font-size: 12px;
  font-family: Source Sans Pro Regular;
  margin-bottom: 12px;
  img {
    height: 12px;
    width: 12px;
    margin-right: 5px;
  }
  p {
    margin-bottom: 0;
  }
`;
export const Des = styled.div`
  font-size: 14px;
  color: #67616d;
  font-family: Source Sans Pro Regular;
`;
export const Status = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 12px;
    width: 12px;
  }
`;
export const Check = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 5px;
    color: #453257;
    font-size: 12px;
    font-family: Source Sans Pro Regular;
  }
  .like {
    margin-left: 31px;
  }
`;
