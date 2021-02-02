import "./search-bar.styles.css"

//Functional component for search bar
export const SearchBox = ({placeholder, handleChange}) => (
<input 
className = "search"
type="search" 
placeholder= {placeholder}
onChange={handleChange}>
</input>
)