import React, { Fragment } from 'react'
import { Header, Container, Grid, Menu, Divider, Image } from 'semantic-ui-react'
import Headshot from "./Headshot.jpg"



const page = () => {
    return (
        <div>
        <Fragment>
            <Menu fluid color="green" inverted widths={5}>
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
                </Container>
            </Grid.Row>
            <Divider></Divider>
            <Grid.Row dividing>
            <Container dividing style= {{padding: "2rem"}}>
                <Header as="h2" textAlign="center" content= "getBetter: an app for finding sliding-scale mental health and wellness resources in NYC."/>
                <Header as="h4" textAlign="center" content= "React, Redux, Hooks, Rails, Google Maps, Semantic, IBM Watson"/>
                <iframe title ="getBetter" width="1100" height="650" src="https://www.youtube.com/embed/AwW8sv5kK6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </Container>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
            <Container dividing style= {{padding: "2rem"}}>
                <Header as="h2" textAlign="center" content= "Calm With Woofers: a relaxing app for rating and loving, floofy, borking and pattable dogs."/>
                <Header as="h4" textAlign="center" content= "React, Hooks, Rails, Dog.ceo, Custom CSS"/>
                <iframe title="calmwithwoofers" width="1100" height="650" src="https://www.youtube.com/embed/bWAReQspa5Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
                </Container>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
                <Container dividing style= {{padding: "2rem"}}>
                <Header as="h2" textAlign="center" content= "Learn.code or Die.trying: a game where a player learns code while avoiding the burnout floor."/>
                <Header as="h4" textAlign="center" content= "Vanilla JS, p5, Rails, Custom CSS"/>
                <iframe title="learncode" width="1100" height="650" src="https://www.youtube.com/embed/N2DsRJF3Tbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </Container>
            </Grid.Row>
            <Divider/>
                </Grid>
                </Fragment>
                <Header as="h4" textAlign="center" content="made by Nicholas Feitel, 2020" style={{padding: "1em"}}/>
                </div>
        
    )
}

export default page