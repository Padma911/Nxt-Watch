import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
} from '../Home/styledComponents'
import ReactContext from '../../context/ReactContext'

const SearchComponents = () => (
  <ReactContext.Consumer>
    {value => {
      const {search, darkMode, changeSearchInput} = value

      const changeSearchInputValue = event => {
        changeSearchInput(event)
      }
      return (
        <SearchContainer darkMode={darkMode}>
          <SearchInput
            darkMode={darkMode}
            type="search"
            value={search}
            placeholder="Search"
            onChange={changeSearchInputValue}
          />
          <SearchButton data-testid="searchButton" darkMode={darkMode}>
            <SearchIcon darkMode={darkMode} />
          </SearchButton>
        </SearchContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default SearchComponents
