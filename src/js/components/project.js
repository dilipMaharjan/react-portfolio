import React from 'react'
import { Container, Card, Icon, Image } from 'semantic-ui-react'

const Project = () => (
  <Container>
    <a href="https://dilipmaharjan.herokuapp.com/" target="__blank"><Card fluid>
      <Card.Content>
        <Card.Header>
          Portfolio
      </Card.Header>
        <Card.Description>
          It is a perosnal Portfolio web app created using react js.
      </Card.Description>
      </Card.Content>
    </Card>
    </a>
    <a href="http://ncap.herokuapp.com/" target="__blank">
      <Card fluid>
        <Card.Content>
          <Card.Header>
            Chat App
      </Card.Header>
          <Card.Description>
            It is a chat application created using express js.
      </Card.Description>
        </Card.Content>
      </Card>
    </a>
    <a href="http://ctkhealthcare.com/" target="__blank">
      <Card fluid>
        <Card.Content>
          <Card.Header>
            Healthcare & Career
      </Card.Header>
          <Card.Description>
            It is a website which provides information on Healthcare and Career.
      </Card.Description>
        </Card.Content>
      </Card>
    </a>
  </Container>
)

export default Project;