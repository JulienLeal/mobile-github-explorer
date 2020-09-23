import React from "react";

import FinderImage from "../../assets/images/finder.png";
import SearchInput from "../SearchInput/SearchInput";

import { Container, ImageBackground, Message } from "./Search.styles";

const Search: React.FC = () => {
  return (
    <Container>
      <ImageBackground source={FinderImage} />
      <Message>Explore o melhor do mundo open-source</Message>
      <SearchInput />
    </Container>
  );
};

export default Search;
