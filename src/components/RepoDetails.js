import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Buffer } from 'buffer/';
import marked from 'marked';
import axios from 'axios';
// styling
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export const RepoDetails = (details) => {
    const repoDetails = details.details
    console.log(repoDetails);

    const owner = repoDetails.owner.login;
    const repoName = repoDetails.name;

    const [readme, setReadme] = useState("")

    const formatter = (code) => {
        const buff = Buffer.from(code, 'base64').toString('utf-8');
        setReadme(marked(buff));
    }
    
    useEffect(() => {
        const fetchReadme = async () => {
            const res = await axios(`http://api.github.com/repos/${owner}/${repoName}/contents/README.md`)
            formatter(res.data.content);
        }
        fetchReadme();
    }, [])

    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Link href={repoDetails.html_url} target="_blank">Link to the repo</Card.Link>
                    <br />
                    <br />
                    <Image src={repoDetails.owner.avatar_url} rounded fluid />
                    <br />
                    <br />
                    <Card.Subtitle style={{color: 'grey'}}>Created on {moment(repoDetails.created_at).format('MMMM do YYYY')}</Card.Subtitle>
                    <br />
                    <Card.Subtitle style={{color: 'grey'}}>Last pushed on {moment(repoDetails.pushed_at).format('MMMM do YYYY')}</Card.Subtitle>
                    <br />
                    <Card.Subtitle style={{color: 'grey'}}>Size: {repoDetails.size}</Card.Subtitle>

                </Card.Body>
                <Card.Footer dangerouslySetInnerHTML={{__html: readme}} className="text-left" style={{color: 'grey'}}></Card.Footer>
            </Card>
        </div>
    )
}

export default RepoDetails;