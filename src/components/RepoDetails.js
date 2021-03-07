import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Buffer } from 'buffer/';
import marked from 'marked';
// styling
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export const RepoDetails = (details) => {
    const repoDetails = details.history.location.state.details;
    console.log(repoDetails);

    const owner = repoDetails.owner.login;
    const repoName = repoDetails.name;
    const [readme, setReadme] = useState("")

    useEffect(() => {
        const fetchReadme = async () => {
            const res = await axios(`http://api.github.com/repos/${owner}/${repoName}/contents/README.md`)
            console.log(res.data.content);

            const buff = Buffer.from(res.data.content, 'base64').toString('utf-8');
            console.log(buff);
            setReadme(marked(buff));

        }
        fetchReadme();
    }, [])

    return (
        <div style={{padding: "2rem"}}>
            <Card className="text-center">
                <Card.Header>
                    <Card.Link href={repoDetails.html_url} target="_blank">Link to the repo</Card.Link>
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle style={{color: 'grey'}}>Created on {moment(repoDetails.created_at).format('MMMM do YYYY')}</Card.Subtitle>
                    <br></br>
                    <Card.Subtitle style={{color: 'grey'}}>Updated on {moment(repoDetails.updated_on).format('MMMM do YYYY')}</Card.Subtitle>
                    <br></br>
                    <Card.Title as="h2">{repoDetails.name}</Card.Title>
                    <br></br>
                    <Card.Subtitle as="h5" style={{color: 'grey'}}>Owner: {repoDetails.owner.login}</Card.Subtitle>
                    <br></br>
                    <Card.Subtitle style={{color: 'grey'}}>Language: {repoDetails.language}</Card.Subtitle>
                    <br></br>
                    <Card.Text>{repoDetails.description}</Card.Text>
                </Card.Body>
                <Card.Footer style={{color: 'grey'}}>Stars: {repoDetails.stargazers_count}  ||  Open issues: {repoDetails.open_issues_count}  ||  Forks: {repoDetails.forks_count}  ||  Watchers: {repoDetails.watchers_count}</Card.Footer>

                <Card.Footer dangerouslySetInnerHTML={{__html: readme}}className="text-left" style={{color: 'grey'}}></Card.Footer>
                

            </Card>
        </div>
    )
}

export default RepoDetails;