import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// Semantic UI just needs to import the components you are trying to use, and their css

const SemanticComponent = () => {
    return (
        <div>
            <Card>
                <Image src='https://media-exp1.licdn.com/dms/image/C4E03AQEeqsA2qqu7MQ/profile-displayphoto-shrink_800_800/0/1599877968870?e=1629936000&v=beta&t=5A9XMdWkip-JaCTrj8ruWwW8TvIsNGM135M-SksK2Lc' wrapped ui={false} />
                <Card.Content>Angelo</Card.Content>
                <Card.Content extra>
                <a>
                    A chill dude.
                </a>
                </Card.Content>
            </Card>
        </div>
    )
}

export default SemanticComponent
