
import React from 'react';
import { Image, Container, Header, Table, Icon } from 'semantic-ui-react';
import author from '../../images/author.jpg';

const Author = () => (
  <Container fluid centered>
    <Image src={author} alt="Image not found" size='medium' shape='circular' centered />
    <Header as='h1' size='huge' color='blue'>Dilip Maharjan</Header>
    <Table basic='very' centered>
      <Table.Row className='software'>
        <Table.HeaderCell>
          <Header as='h2' size='huge' color='blue'>Software Developer</Header></Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' size='large' color='blue'>Mobile Application Developer</Header>
        </Table.Cell>
        <Table.Cell>
          <Header as='h2' size='large' color='blue'>Web Application Developer</Header>
        </Table.Cell>
      </Table.Row>
    </Table>
    <Container>
      <Header size='huge' color='blue'>Find me <Icon name='at' /></Header>
      <Icon size='huge' color='blue' name='linkedin' />
      <Icon size='huge' color='blue' name='github' />
    </Container>
    {/* <Container textAlign='center'>
      <Header><Icon color='blue' name='copyright' />{new Date().getFullYear()}</Header>
    </Container> */}
  </Container>
)
export default Author;
