import styled from "styled-components";
import iconSearch from "/Search.svg";
import { useContext, useEffect, useState } from "react";
import { GithubContext } from "../../context";
import { useDebounce } from "use-debounce";
import SearchResult from "./SearchResult";

const SearchWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 484px;
  margin: 0 auto;
  max-width: 100%;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 18px;
  width: 24px;
  height: 24px;
  opacity: 0.35;
  transform: translateY(-50%);
  background: url(${iconSearch}) no-repeat center center/contain;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 56px;
  color: #ccd4df;
  border-radius: 12px;
  background-color: #20293a;
  padding: 16px 16px 16px 52px;
  border: 2px solid transparent;
  transition: 0.25s ease;
  &:focus {
    border-color: #3762e4;
  }
`;

const SearchBox = () => {
  const defaultSearchText = "github";
  const [searchValue, setSearchValue] = useState<string>(defaultSearchText);
  const [updatedSearchValue] = useDebounce(searchValue, 500);
  const { profile, fetchProfileInfo } = useContext(GithubContext);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    updatedSearchValue.length > 0
      ? fetchProfileInfo(updatedSearchValue)
      : fetchProfileInfo(defaultSearchText);
  }, [updatedSearchValue]);

  const updateFocus = (isFocus: boolean) => {
    isFocus ? setIsFocused(true) : setIsFocused(false);
  };

  return (
    <>
      <SearchWrapper>
        <SearchIcon />
        <SearchInput
          value={searchValue}
          placeholder="username"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={() => updateFocus(true)}
          onBlur={() => updateFocus(false)}
        />
        <SearchResult
          profile={profile}
          isProfileSelected={
            profile &&
            Object.keys(profile).length > 0 &&
            isFocused &&
            searchValue.length > 0
              ? true
              : false
          }
        />
      </SearchWrapper>
    </>
  );
};

export default SearchBox;
