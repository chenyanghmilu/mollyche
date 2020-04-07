import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility,
} from 'semantic-ui-react'
import CardPrice from './containers/Card'
import ContactMe from './containers/ContactMe'
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
	const isSSR = typeof window === 'undefined'

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
	<Container text>
		<Header
			as='h1'
			color='pink'
			content='MOLLY CHE TAX STATION'
			inverted
			style={{
				fontSize: mobile ? '2em' : '4em',
				fontWeight: 'normal',
				marginBottom: 0,
				marginTop: mobile ? '1.5em' : '3em',
			}}
		/>
		<Header
			as='h2'
			color='pink'
			content='The Tax Expert Around You.'
			inverted
			style={{
				fontSize: mobile ? '1.5em' : '1.7em',
				fontWeight: 'blod',
				marginTop: mobile ? '0.5em' : '1.5em',
			}}
		/>
		<Button primary size='huge' color='red'>
			Get Started
      <Icon name='right arrow' />
		</Button>
	</Container>
)

HomepageHeading.propTypes = {
	mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
	state = {}

	hideFixedMenu = () => this.setState({ fixed: false })
	showFixedMenu = () => this.setState({ fixed: true })

	render() {
		const { children } = this.props
		const { fixed } = this.state

		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						inverted
						textAlign='center'
						style={{ minHeight: 700, padding: '1em 0em' }}
						vertical
					>
						<Menu
							fixed={fixed ? 'top' : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size='large'
						>
							<Container>
								<Menu.Item as='a' active>Home</Menu.Item>
								<Menu.Item as='a'>Tax Items</Menu.Item>
								<Menu.Item as='a'>About Me</Menu.Item>
								<Menu.Item as='a'>Contact Me</Menu.Item>
								<Menu.Item position='right'>
									<Button as='a' inverted={!fixed}>
										Log in
                  </Button>
									<Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
										Sign Up
                  </Button>
								</Menu.Item>
							</Container>
						</Menu>
						<HomepageHeading />
					</Segment>
				</Visibility>

				{children}
			</Responsive>

		)
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node,
}

class MobileContainer extends Component {
	state = {}

	handleSidebarHide = () => this.setState({ sidebarOpened: false })

	handleToggle = () => this.setState({ sidebarOpened: true })

	render() {
		const { children } = this.props
		const { sidebarOpened } = this.state

		return (
			<Responsive
				as={Sidebar.Pushable}
				getWidth={getWidth}
				maxWidth={Responsive.onlyMobile.maxWidth}
			>
				<Sidebar
					as={Menu}
					animation='push'
					inverted
					onHide={this.handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
					<Menu.Item as='a' active>Home</Menu.Item>
					<Menu.Item as='a'>Tax Items</Menu.Item>
					<Menu.Item as='a'>About Me</Menu.Item>
					<Menu.Item as='a'>Contact Me</Menu.Item>
					<Menu.Item as='/frontend/src/components/auth/Login.js'>Log in</Menu.Item>
					<Menu.Item as='a'>Sign Up</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						inverted
						textAlign='center'
						style={{ minHeight: 350, padding: '1em 0em' }}
						vertical
					>
						<Container>
							<Menu inverted pointing secondary size='large'>
								<Menu.Item onClick={this.handleToggle}>
									<Icon name='sidebar' />
								</Menu.Item>
								<Menu.Item position='right'>
									<Button as='a' inverted>
										Log in
                  </Button>
									<Button as='a' inverted style={{ marginLeft: '0.5em' }}>
										Sign Up
                  </Button>
								</Menu.Item>
							</Menu>
						</Container>
						<HomepageHeading mobile />
					</Segment>

					{children}
				</Sidebar.Pusher>
			</Responsive>
		)
	}
}

MobileContainer.propTypes = {
	children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
	</div>
)

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
}

const HomepageLayout = () => (
	<ResponsiveContainer>
		<Segment style={{ padding: '8em 0em' }} vertical>
			<Grid container stackable verticalAlign='middle'>
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as='h3' style={{ fontSize: '2em' }}>
							We Help Companies and Companions in Tax
            </Header>
						<p style={{ fontSize: '1.33em' }}>
							We provide professional and reliable tax filling services to our community members
							Get Professional Consultation From Our Experts
            </p>
						<Header as='h3' style={{ fontSize: '2em' }}>
							Our Taxation Service
            </Header>
						<p style={{ fontSize: '1.33em' }}>
							Talent Portal provides reliable and professional taxation services to you, more importantly, it is affordable and trustworthy.
            </p>
					</Grid.Column>
					<Grid.Column floated='right' width={6}>
						<Image bordered rounded size='large' src='images/Tax-image-blog.jpg' />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign='center'>
						<Button primary size='huge'>Fill in the Service Intake Form <br /> Upload your Documents</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		<Segment style={{ padding: '0em' }} vertical>
			<Grid celled='internally' columns='equal' stackable>
				<Grid.Row textAlign='center'>
					<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
						<Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
							The Taxation Filing Procedure
            </Header>
						<p className='procedure' style={{ fontSize: '1.33em' }}>
							<br />1. Fill in the Service Intake Form
							<br />2. Check the Price List below
							<br />3. Our Tax Expert Team will review the form and contact you
							<br />&nbsp;&nbsp;&nbsp;&nbsp;(either through phone or email xxx@xxxxxx.com)
							<br />4. Payment instruction will be provided to you
							<br />5. Tax filling takes place once payment is received
							<br />6. Tax file will be prepared and the summary will be emailed to you for your consent
							<br />7. Once you review the summary and agree to it, email us back and we will e-file it
							<br />8. A confirmation email will be emailed to you that it is filed
							<br />9. You can contact us if you have any question
						</p>
					</Grid.Column>
					<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
						<Header as='h3' style={{ fontSize: '1.5em', color: 'white' }}>
							"We are a team of professional tax practitioners, cummulatively we have over 32,000 hr of professional tax fillng experience.
							We are stived to provide professional and reliable taxation services to our community at an afforable price."
            </Header>
						<p style={{ fontSize: '1.33em' }}>
							<Image size='small' avatar src='images/blackpink-lisa-nonagon-event-fanmeeting-fan-greeting-2018-82.jpg' />
							<br /><b>Molly CHE</b> <br /> Your Private Tax Expert
            </p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		<Segment style={{ padding: '8em 0em' }} vertical>
			<Container>
				<Header as='h3' style={{ fontSize: '2em' }}>
					Services Price List
        </Header>
				<CardPrice />
				<Button primary center as='a' size='huge' style={{ margin: '2em 0em', position: 'center' }}>
					Fill in the Service Intake Form <br /> Upload your Documents
        </Button>

				<Divider
					as='h4'
					className='header'
					horizontal
					style={{ margin: '3em 0em', textTransform: 'uppercase' }}
				>
					<a href='#'>Contact Me</a>
				</Divider>

				<ContactMe />

			</Container>
		</Segment>

		<Segment inverted vertical id='footer' style={{ padding: '5em 0em' }}>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={3}>
							<Header inverted as='h4' content='About' />
							<List link inverted>
								<List.Item as='a'>Sitemap</List.Item>
								<List.Item as='a'>Contact Us</List.Item>
								<List.Item as='a'>Religious Ceremonies</List.Item>
								<List.Item as='a'>Gazebo Plans</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={3}>
							<Header inverted as='h4' content='Services' />
							<List link inverted>
								<List.Item as='a'>Order</List.Item>
								<List.Item as='a'>FAQ</List.Item>
								<List.Item as='a'>How To Access</List.Item>
								<List.Item as='a'>Favorite X-Men</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={7}>
							<Header as='h4' inverted>
								copyright©molly che tax station
              </Header>
							<p>
								made by Yang.
              </p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	</ResponsiveContainer >
)

export default HomepageLayout