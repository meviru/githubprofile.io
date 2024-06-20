import styled from "styled-components";
import iconSearch from "/Search.svg";

const SearchWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 484px;
    margin: 0 auto;
    max-width: 100%;
`

const SearchIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 18px;
    width: 24px;
    height: 24px;
    opacity: 0.35;
    transform: translateY(-50%);
    background: url(${iconSearch}) no-repeat center center/contain;
`

const SearchInput = styled.input`
    width: 100%;
    height: 56px;
    color: #4A5567;
    border-radius: 12px;
    background-color: #20293A;
    padding: 16px 16px 16px 56px;
`

const SearchBox = () => {
    return <>
        <SearchWrapper>
            <SearchIcon />
            <SearchInput placeholder="username" />
        </SearchWrapper>
    </>
}

export default SearchBox;