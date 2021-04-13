import React, {useState} from "react"

const Search = () => {
    const [value, setValue] = useState("")
    const onSubmit = (e) => {
        if (e.key !== "Enter") {
            return
        }
        if(value.trim()) {
            console.log("Make request with: ", value)
        }else(
            console.log("Enter your search request!")
        )
    }

    return <input
        type="text"
        name="search"
        placeholder="Search..."
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={onSubmit}
    />
}

export default Search