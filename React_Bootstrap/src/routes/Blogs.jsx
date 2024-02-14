/* eslint-disable react/no-unescaped-entities */
// Import the Accordion and Card components from react-bootstrap
import { Accordion, Card } from 'react-bootstrap'

// Blogs page component
const Blogs = () => {
  const boldStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
  }

  return (
    <div>
      <Card className="mt-4">
        <Card.Header style={boldStyle}>Blogs</Card.Header>
        <Card.Body>
          <Card.Title style={boldStyle}>Blogs Articles</Card.Title>
          <Card.Text>Find the latest blogs articles here.</Card.Text>
        </Card.Body>
      </Card>

      <Accordion className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Header>Card Header #1</Card.Header>
              <Card.Body>
                <Card.Text>
                  Here's some content for the first blog article...
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Header>Card Header #2</Card.Header>
              <Card.Body>
                <Card.Text>
                  Here's some content for the second blog article...
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Header>Card Header #3</Card.Header>
              <Card.Body>
                <Card.Text>
                  Here's some content for the third blog article...
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Blogs
