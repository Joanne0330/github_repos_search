import React, { useState } from 'react';
import axios from 'axios';
import Repo from './Repo';
// styling
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// API keys
const token = process.env.REACT_APP_GITHUB_TOKEN;




export const Search = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    console.log(query)


    const searchRepos = async (query) => {
        const options = {
            "headers": {
              "Authorization": `token ${token}`,
              "Accept": "application/vnd.github.v3+json"
            }
          };
        const res = await axios(`https://api.github.com/search/repositories?q=${query}`, options);
        console.log(res.data);

        setData(res.data.items);
        setQuery("");
    }
    

    return (
        <div className="div-style">
            <Form className="input-style">
                <Form.Group controlId="githubInput">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name of the repo" 
                        value={query}
                        onChange={event => {
                            event.preventDefault();
                            setQuery(event.target.value)}
                        }
                    />
                </Form.Group>
                <Button 
                    variant="dark" 
                    onClick={() => searchRepos(query)}
                >
                    Search repos
                </Button>
            </Form>
            {data.map(item => (
                <Repo item={item}/>
            ))}
        </div>
    )
}

export default Search;
