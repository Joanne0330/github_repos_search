import React, { useState, Fragment } from 'react';
import moment from 'moment';
import RepoDetails from './RepoDetails';
// styling
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';

export const Repo = (item) => {
    const repo = item.item;
    console.log(repo)

    const [wantDetails, setWantDetails] = useState(false)

    
    return (
        <div style={{padding: "2rem"}} key={repo.id}>
            <Card className="text-center">
                <Card.Header>
                    <Card.Subtitle as="h5" style={{color: 'grey'}}>Owner: {repo.owner.login}</Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <br></br>
                    <Card.Title as="h3">{repo.name}</Card.Title>
                    <br></br>
                    <Card.Subtitle style={{color: 'grey'}}>Language: {repo.language}</Card.Subtitle>
                    <br></br>
                    <Card.Text>{repo.description}</Card.Text>
                </Card.Body>
                <ListGroup>
                    <ListGroup.Item>
                      <Button
                        variant='dark'
                        onClick={() => setWantDetails(!wantDetails)}
                      >Click to open / close for more details
                      </Button>
                    </ListGroup.Item>
                </ListGroup>
                {wantDetails && <Fragment>
                    <RepoDetails details={repo} />
                    </Fragment>
                }
                <Card.Footer style={{color: 'grey'}}>Stars: {repo.stargazers_count}  ||  Open issues: {repo.open_issues_count}  ||  Forks: {repo.forks_count}  ||  Watchers: {repo.watchers_count}</Card.Footer>
            </Card>

        </div>
    )
}

export default Repo;
