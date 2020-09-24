import React from "react";
import {
  Container,
  Input,
  SearchIconContainer,
} from "./SearchInput.styles";

import SearchImage from "../../assets/icons/search.png";
import { Image, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

interface SearchInputProps {
  onChange(event: NativeSyntheticEvent<TextInputChangeEventData>): void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  return (
    <Container>
      <SearchIconContainer>
        <Image source={SearchImage} />
      </SearchIconContainer>
      <Input onChange={onChange} />
    </Container>
  );
};

export default SearchInput;
