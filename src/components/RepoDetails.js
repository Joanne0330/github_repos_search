import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Buffer } from 'buffer/';
import marked from 'marked';
// styling
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export const RepoDetails = (details) => {
    const repoDetails = details.details
    console.log(repoDetails);

    const owner = repoDetails.owner.login;
    const repoName = repoDetails.name;

    const [readme, setReadme] = useState("")
    
    useEffect(() => {
        const fetchReadme = async () => {
            const res = await axios(`http://api.github.com/repos/${owner}/${repoName}/contents/README.md`)
            const buff = Buffer.from(res.data.content, 'base64').toString('utf-8');
            // console.log(buff);
            setReadme(marked(buff));

        }
        fetchReadme();
    }, [])

    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Subtitle style={{color: 'grey'}}>Updated on {moment(repoDetails.updated_on).format('MMMM do YYYY')}</Card.Subtitle>
                </Card.Body>
                <Card.Footer dangerouslySetInnerHTML={{__html: readme}}className="text-left" style={{color: 'grey'}}></Card.Footer>
            </Card>
        </div>
    )
}

export default RepoDetails;