import React from "react";
import { Container } from "../../styles";
import ItemList from "./components/list-item";
import { HeaderSearch, HeaderWrap, ListWrap } from "./style";

export default function List() {
  var listItem = [
    {
      id: 1,
      btnChannel: "Channel name",
      title: "Activity Title Name Make it Longer May Longer than One Line",
      des: "[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti...",
    },
    {
      id: 2,
      btnChannel: "Channel name longer",
      title: "Activity Title Name Make it Longer May ",
      des: "Activity Title Name Make it Longer May ",
    },
  ];
  let element = listItem.map((item, index) => {
    return (
      <>
        <ItemList
          btnChannel={item.btnChannel}
          title={item.title}
          des={item.des}
        />
      </>
    );
  });
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
      <ListWrap>{element}</ListWrap>
    </>
  );
}
