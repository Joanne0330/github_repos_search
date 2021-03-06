import React from 'react';
import moment from 'moment';
// styling
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

export const Repo = (item) => {
    const repo = item.item;
    console.log(repo)
    const owner = repo.owner.login;
    const repoName = repo.name;
    console.log(owner)
    console.log(repoName)
    
    return (
        <div style={{padding: "2rem"}} key={repo.id}>
            <Card className="text-center">
                <Card.Header>
                    <Card.Link href={repo.html_url} target="_blank">Link to this repo</Card.Link>
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle style={{color: 'grey'}}>Created at: {moment(repo.created_at).format('MMMM do YYYY')}</Card.Subtitle>
                    <br></br>
                    <Card.Title>{repo.name}</Card.Title>
                    <br></br>
                    <Card.Subtitle style={{color: 'grey'}}>Language: {repo.language}</Card.Subtitle>
                    <br></br>
                    <Card.Text>{repo.description}</Card.Text>
                </Card.Body>
                <ListGroup>
                    <ListGroup.Item>hi</ListGroup.Item>
                </ListGroup>
                <Card.Footer style={{color: 'grey'}}>Stars: {repo.stargazers_count}  ||  Open issues: {repo.open_issues_count}  ||  Forks: {repo.forks_count}  ||  Watchers: {repo.watchers_count}</Card.Footer>
            </Card>

        </div>
    )
}

export default Repo;
