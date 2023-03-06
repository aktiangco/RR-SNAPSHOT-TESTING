import Card from 'react-bootstrap/Card'
import silly from './images/silly-dog.jpeg'

const GitHubCard = () => {
    <div>
        <Card>
            <Card.Img src={silly} alt="silly" />
            <Card.Body>
                <Card.Title>Silly Me</Card.Title>
                <Card.Text>
                    Hello World, It's me just being silly.                
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}

export default GitHubCard