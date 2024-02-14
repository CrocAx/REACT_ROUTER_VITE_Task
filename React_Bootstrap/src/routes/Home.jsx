// Import necessary libraries and react-bootstrap components
import { Card, Form, Button, Alert, FormLabel, FormText } from 'react-bootstrap'
import { useState } from 'react'

// Home page component
const Home = () => {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const boldStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
  }

  return (
    <div>
      <Card className="mt-4">
        <Card.Header style={boldStyle}>Welcome</Card.Header>
        <Card.Body>
          <Card.Text>
            <h4>Home Page</h4>
            This is the homepage of the React Routing application. Feel free to
            navigate to the other pages using the navigation bar above.
          </Card.Text>
        </Card.Body>
      </Card>

      <Form className="mt-4" onSubmit={handleSubmit}>
        <FormLabel>Email address</FormLabel>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
        />
        <FormText className="text-muted">
          Subscribe to our newsletter to get the latest updates.
        </FormText>
        <div>
          <Button className="mt-3" variant="primary" type="submit">
            Subscribe
          </Button>
        </div>
      </Form>
      {showSuccess && (
        <Alert
          className="mt-4"
          variant="success"
          onClose={() => setShowSuccess(false)}
          dismissible
        >
          Successfully subscribed with email: {email}
        </Alert>
      )}
    </div>
  )
}

export default Home
