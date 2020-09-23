import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

import FinderImage from "../../assets/images/finder.png";
import SearchInput from "../SearchInput/SearchInput";

import { Container, ImageBackground, Message } from "./Search.styles";

interface SearchProps {
  onChange(event: NativeSyntheticEvent<TextInputChangeEventData>): void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
  return (
    <Container>
      <ImageBackground source={FinderImage} />
      <Message>Explore o melhor do mundo open-source</Message>
      <SearchInput onChange={onChange} />
    </Container>
  );
};

export default Search;
