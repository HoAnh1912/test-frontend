import React from "react";
import { Container } from "../../../../styles";
import {
  Check,
  DateTime,
  Des,
  ItemListTitle,
  Status,
  Tile,
  TileName,
} from "./styles";

export default function ItemList({ btnChannel, title, des }) {
  return (
    <>
      <Container>
        <div className="item-list">
          <ItemListTitle>
            <TileName>
              <img src="/img/icons/user.svg" alt="" />
              <p>Username</p>
            </TileName>
            <a href="#">{btnChannel}</a>
          </ItemListTitle>
          <Tile>
            <h3>{title}</h3>
          </Tile>
          <DateTime>
            <img src="/img/icons/time.svg" alt="" />
            <p>14 May 2016 12:22 - 14 May 2016 18:00</p>
          </DateTime>
          <Des>{des}</Des>
          <Status>
            <Check>
              <img src="/img/icons/check.svg" alt="" />
              <p>I am going!</p>
            </Check>
            <Check>
              <img className="like" src="/img/icons/like.svg" alt="" />
              <p>I like it</p>
            </Check>
          </Status>
        </div>
        <hr />
      </Container>
    </>
  );
}
