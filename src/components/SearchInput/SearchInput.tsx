import React from "react";
import { Container, Input, SearchIcon } from "./SearchInput.styles";

import SearchImage from "../../assets/icons/search.png";

const SearchInput: React.FC = () => {
  return (
    <Container>
      <SearchIcon source={SearchImage} />
      <Input />
    </Container>
  );
};

export default SearchInput;
