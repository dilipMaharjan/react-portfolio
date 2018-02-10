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
          <p>
            <h3>
              It is a personal Portfolio web app created using react js.
              I am a desinger and developer of this app.
            </h3>
          </p>
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
          <p>
            <h3>
              It is a chat application created using express js.
              I am a backend and frontend developer and designer of this app.
            </h3>
          </p>
           
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
          <p>
            <h3>
              It is a website which provides information on Healthcare and Career.
              I worked as a php backend devloper of this app.
            </h3>
          </p>
            
      </Card.Description>
        </Card.Content>
      </Card>
    </a>
  </Container>
)

export default Project;