import React from './node_modules/react'
import { Button, Form, Grid, Header, Image, Message, Segment } from './node_modules/semantic-ui-react'

const RegisterForm = () => (
	<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
		<Grid.Column style={{ maxWidth: 450 }}>
			<Header as='h2' color='teal' textAlign='center'>
				<Image src='/logo.png' /> sign your account up
      </Header>
			<Form size='large'>
				<Segment stacked>
					<Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
					<Form.Input
						fluid
						icon='lock'
						iconPosition='left'
						placeholder='Password'
						type='password'
					/>

					<Button color='teal' fluid size='large'>
						Sign Up
          </Button>
				</Segment>
			</Form>
			<Message>
				Have Account Already? <a href='#'>Login</a>
			</Message>
		</Grid.Column>
	</Grid>
)

export default RegisterForm