import React, { useState } from 'react';
import axios from 'axios';
import Repo from './Repo';
// styling
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// API keys
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;



export const Search = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    console.log(query)


    const searchRepos = async (query) => {
        const res = await axios(`https://api.github.com/search/repositories?q=${query}&client_id=${clientId}&client_secret=${clientSecret}`);
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
