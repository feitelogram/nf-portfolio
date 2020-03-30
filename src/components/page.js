import React, { Fragment } from 'react'
import { Header, Container, Grid, Menu, Divider, Image} from 'semantic-ui-react'
import Headshot from "./Headshot.jpg"
import Coding from "./Coding.png"
import Weather from "./weatherapp.png"
import styled from "styled-components"




const Page = props => {

    return (
        <div>
        <Fragment>
            <Menu fixed="top" fluid color="green" inverted widths={5}>
                <Menu.Item content = "Portfolio"/>
                <Menu.Item as="a" href="mailto:nicholas.feitel@gmail.com" content= "Contact Nic"
                target="_blank" rel="noopener noreferrer"
                />
                <Menu.Item as="a" href="http://linkedin.com/in/nicholasfeitel" content= "LinkedIn"
                target="_blank" rel="noopener noreferrer"
                />
                <Menu.Item as="a" href="http://github.com/feitelogram" content= "Github"
                target="_blank" rel="noopener noreferrer"
                />
                <Menu.Item as="a" href="https://medium.com/@nicholas.feitel/" content= "Medium"
                target="_blank" rel="noopener noreferrer"
                />
            </Menu>
            <Grid>
            <Grid.Row>
                <Container inverted text dividing style= {{padding: "1rem"}}>
                    <Header as="h1" textAlign="center" className="top" content="Nicholas Feitel: Fullstack Developer"/>
                    <Image bordered rounded src={Headshot} alt="headshot" width="500" height="400" style={{margin: "auto"}} />
                    <p
                    style= {{
                        textAlign: "center",
                        fontFamily: 'Roboto Mono',
                        padding: ".5em"
                      }}
                    >Available for full-time, part-time and contract technical projects.</p>
                    <Divider/>
                    <Header as="h2" textAlign="center" content="About Me:"/>
                    <p className="about"
                    style= {{
                        textAlign: "center",
                        fontFamily: 'Roboto Mono'
                      }}
                    
                    >Nicholas Feitel is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python, CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on.
                        Before coming to tech, he was a modern-dance critic, an animal-shelter volunteer, the artistic director of a comedy theater and, briefly, a reality televison personality. 
                        He is a proud graduate of the Flatiron School/Access Labs program and NYU's Kanbar Institute of Film/TV. He has not met your dog yet, but is sure that he will love them.
                    </p>
                </Container>
            </Grid.Row>
            <Divider>
            <Header as="h1" textAlign="center" content= "PROJECTS" style={{fontSize: "3.5rem", textDecoration: "underline", padding: "2rem"}}/>
            </Divider>
            <Divider style={{padding: "3rem"}}></Divider>
            <Grid.Row dividing>
            <Container dividing style= {{padding: "2rem"}}>
                <Header as="h2" textAlign="center" content= "getBetter: an app for finding sliding-scale mental health and wellness resources in NYC."/>
                <div className="link"><Header as="a" textAlign="center" target="_blank" rel="noopener noreferrer" href="https://flamboyant-jones-6098d9.netlify.com/" content="click here for a functional demo"/></div>
                <Header as="h4" textAlign="center" content= "React, Redux, Hooks, Rails, Google Maps, Semantic, IBM Watson"/>
                <div className="youtube-responsive-container">
                <iframe title ="getBetter" width="1100" height="650" src="https://www.youtube.com/embed/AwW8sv5kK6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </div>
            </Container>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
            <Container dividing style= {{padding: "2rem"}}>
                <Header as="h2" textAlign="center" content= "Calm With Woofers: a relaxing app for rating and loving, floofy, borking and pattable dogs."/>
                <Header as="h4" textAlign="center" content= "React, Hooks, Rails, Dog.ceo, Custom CSS"/>
                <div className="youtube-responsive-container">
                <iframe title="calmwithwoofers" width="1100" height="650" src="https://www.youtube.com/embed/bWAReQspa5Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                </div>          
                </Container>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
            <Container dividing style= {{padding: "2rem"}}>
                <Header as="h2" textAlign="center" content= "Coding Meetups This Week: a CMS-updatable list of Coding Meetups the author is attending this week."/>
                <Header as="h4" textAlign="center" content= "Gatsby.js, React, SaSS, CSS Modules, graphQl, Contentful"/>
                <div className="youtube-responsive-container">
                <Image as="a" href="https://zen-jennings-88f7da.netlify.com/" bordered rounded alt="coding" width="1100" height="650" style={{display: "grid", alignItems: "center"}} src={Coding} target="_blank" rel="noopener noreferrer" />  
                </div>          
                </Container>
            </Grid.Row>
            <Divider/>
            <Divider/>
            <Grid.Row>
            <Container dividing style= {{padding: "2rem"}}>
                <Header as="h2" textAlign="center" content= "What's The Weather Like In The Scary Outside World: A simple weather searching app utilizing Node."/>
                <Header as="h4" textAlign="center" content= "Node.js, Express.js, CSS, DarkSky, Mapbox"/>
                <div className="youtube-responsive-container">
                <Image as="a" href="https://scary-outside.herokuapp.com/" bordered rounded alt="coding" width="1100" height="650" style={{display: "grid", alignItems: "center"}} src={Weather} target="_blank" rel="noopener noreferrer" />  
                </div>          
                </Container>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
                <Container dividing style= {{padding: "2rem"}}>
                <Header as="h2" textAlign="center" content= "Learn.code or Die.trying: a game where a player learns code while avoiding the burnout floor."/>
                <Header as="h4" textAlign="center" content= "Vanilla JS, p5, Rails, Custom CSS"/>
                <div className="youtube-responsive-container">
                <iframe title="learncode" width="1100" height="650" src="https://www.youtube.com/embed/N2DsRJF3Tbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                </div>             
                </Container>
            </Grid.Row>
            <Divider/>
                </Grid>
                </Fragment>
                <Header as="h4" textAlign="center" content="made by Nicholas Feitel, 2020" style={{padding: "1em"}}/>
                </div>
        
    )
}

export default Page
