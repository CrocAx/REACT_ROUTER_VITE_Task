// Import react-bootstrap components
import { Card, Button } from 'react-bootstrap'

// Contact page component
const Contact = () => {
  const boldStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
  }

  return (
    <div>
      <Card className="mt-4">
        <Card.Header style={boldStyle}>Contact Me</Card.Header>
        <Card.Body>
          <Card.Text>
            For any questions or concerns, please choose category below:
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header style={boldStyle}>General inquiry</Card.Header>
        <Card.Body>
          <Card.Text>
            For any general inquiries, please email us at:
            <div>
              <Button className="mt-4" variant="info">
                general@example.com
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header style={boldStyle}>Feedback</Card.Header>
        <Card.Body>
          <Card.Text>
            We value your feedback. Please share your thoughts at:
            <div>
              <Button className="mt-4" variant="warning">
                feedback@example.com
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header style={boldStyle}>Support</Card.Header>
        <Card.Body>
          <Card.Text>
            Need assistance? Contact our support team at:
            <div>
              <Button className="mt-4" variant="dark">
                support@example.com
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Contact
