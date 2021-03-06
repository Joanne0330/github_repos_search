import React, { useState } from 'react';
import axios from 'axios';
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

    let repos = [];

    const searchRepos = async (query) => {
        const res = await axios(`http://api.github.com/users/${query}/repos?client_id=${clientId}&client_secret=${clientSecret}`);
        console.log(res);
  
    
        repos = res.data;
        console.log(repos);

        setData(res.data);
        console.log(data)
    }
    

    return (
        <div  style={{padding: '10rem'}}>
            <Form>
                <Form.Group controlId="githubInput">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter github user" 
                        value={query}
                        onChange={event => {
                            event.preventDefault();
                            setQuery(event.target.value)
                        }

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
            {data.map(repo =>
                <h3>{repo.name}</h3>)}
        </div>
    )
}

export default Search;
