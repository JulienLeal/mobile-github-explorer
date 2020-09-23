import React from "react";
import {
  Container,
  Input,
  SearchIcon,
  SearchIconContainer,
} from "./SearchInput.styles";

import SearchImage from "../../assets/icons/search.png";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

interface SearchInputProps {
  onChange(event: NativeSyntheticEvent<TextInputChangeEventData>): void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  return (
    <Container>
      <SearchIconContainer>
        <SearchIcon source={SearchImage} />
      </SearchIconContainer>
      <Input onChange={onChange} />
    </Container>
  );
};

export default SearchInput;
