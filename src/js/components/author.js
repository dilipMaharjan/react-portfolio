
import React from 'react';
import { Image, Container, Header, Table, Icon, Divider, Menu, Sidebar, Button } from 'semantic-ui-react';
import author from '../../images/author.jpg';
import Project from './project';

const square = { width: 175, height: 175 }

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
    <Header size='huge' color='blue'>Find me <Icon name='at' /></Header>
    <a href='https://www.linkedin.com/in/dilip-maharjan-44421b87' target="__blank"><Icon size='huge' color='blue' name='linkedin' /></a>
    <a href='https://github.com/dilipmaharjan' target="__blank"><Icon size='huge' color='blue' name='github' /></a>
    <Header as="h1">Live Projects</Header>
    <Project />
    <Divider inverted />
    <Header><Icon color='blue' name='copyright' />{new Date().getFullYear()}</Header>
  </Container>
)
export default Author;
