// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#2c2c2b',
    secondary: '#FFF',
    third: '#03A9FC',
    tertiary: '#95c11e',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Commerce code.talks 2018
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            https://commerce.codetalks.de
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Teilnehmer
          </Heading>
          <Heading size={1} textColor="secondary">
            CHL
          </Heading>
          <Heading size={2} textColor="secondary">
            PAS
          </Heading>
          {/*<Text size={6} textColor="secondary">*/}
            {/*Standard text*/}
          {/*</Text>*/}
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
              Alles anders: Wie Machine Learning das Einkaufsverhalten in Onlineshops revolutioniert (FACT-Finder)
          </Heading>
          <List>
            <ListItem>untersch. Marketing Strategien</ListItem>
            <ListItem>Voice Commerce</ListItem>
            <ListItem>Chat Commerce</ListItem>
            <ListItem>Predictive Basket</ListItem>
            <ListItem>Adaptive Pricing</ListItem>
            <ListItem>Semantic Recommendations</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
              ABOUT YOU CLOUD: Die eigene E-Commerce-Infrastruktur als API-Lösung
          </Heading>
          <List>
            <ListItem>Start wachsendes online Unternehmen</ListItem>
            <ListItem>Eigenentwicklung App BACKBONE</ListItem>
            <ListItem>BACKBONE ist headless</ListItem>
            <ListItem>Stellt für alle Shops eine API bereit</ListItem>
          </List>
      </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  Code quality as an enigne of your IT business
              </Heading>
              <List>
                  <ListItem>Spryker hat eine hohe Code Qualität</ListItem>
                  <ListItem>Reduziert die on boarding time</ListItem>
                  <ListItem>Erhöht die Software Lifetime</ListItem>
                  <ListItem>Eine gute Architektur zwingt zu guten Code</ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  Your e-commerce bot
              </Heading>
              <List>
                  <ListItem>Performance sehr wichtig</ListItem>
                  <ListItem>Kurze Antwortzeiten</ListItem>
                  <ListItem>Chat vs Voice</ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  Spryker Hackathon
              </Heading>
              <List>
                  <ListItem><a target="_blank" rel="noopener noreferrer" href="https://spryker.com/video/spryker-voice-hackathon-code-talks-commerce-special/">Popcorn or Nachos</a></ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  IT Landscape - control vs. scaling
              </Heading>
              <List>
                  <ListItem>Kommunikations innerhalb einer Firma ist wichtig</ListItem>
                  <ListItem>Bestehende Services nutzen und nicht neue implementieren</ListItem>
                  <ListItem>Probleme ansprechen und nicht verschweigen</ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  Performance Testing 101: e-Commerce
              </Heading>
              <List>
                  <ListItem>Systeme müssen skalierbar sein</ListItem>
                  <ListItem>Skalierbarkeit sollte von Begin an gegeben sein</ListItem>
                  <ListItem>Regelmäßige Performance Analysen</ListItem>
                  <ListItem>Vorallem vor Aktionen wie Sales oder Marketing</ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  A modern greenfield Omnichannel IT architecture for a 30-year-old company with a billion in revenues
              </Heading>
              <List>
                  <ListItem>Umstrukturierung eines Monolithen</ListItem>
                  <ListItem>Kubernetes</ListItem>
                  <ListItem>Managed Hosting</ListItem>
                  <ListItem>Microservices</ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  Site performance at Mister Spex - Lessions learned
              </Heading>
              <List>
                  <ListItem>Critical Path im Blick halten</ListItem>
                  <ListItem>Als Kennzahl zur Performance Messung nur direkten Kundenkennzahlen nutzen</ListItem>
                  <ListItem>Bildkomprimierung</ListItem>
                  <ListItem>Buildprozesse</ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  Reactive Anwendungen mit rxjava / Spring Reactor
              </Heading>
              <List>
                  <ListItem>Idealo als Preise Plattform</ListItem>
                  <ListItem>Als parallele Streams aufgebaut</ListItem>
                  <ListItem>Chainen der Streams durch Transformatoren</ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  From 5 to 100 in Product Development team in just 5 years
              </Heading>
              <List>
                  <ListItem>1/2 Remote && 1/2 in München</ListItem>
                  <ListItem>Remote und stationäre Teams gemischt</ListItem>
                  <ListItem>Kein Problem mit den richtigen Tools</ListItem>
                  <ListItem>z.B. <a href="https://zoom.us">zoom.us</a></ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  Full-Text Search Internals with Elasticsearch
              </Heading>
              <List>
                  <ListItem>Apache Lucene als full-featured text search engine</ListItem>
                  <ListItem>Demo Elesticsearch in Kibana</ListItem>
                  <ListItem>Scoring in Elasticsearch anhand eines Beispiels (Starwars)</ListItem>
              </List>
          </Slide>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
              <Heading size={6} textColor="secondary">
                  From GUIs to VUIs - How to design and create a chatbot
              </Heading>
              <List>
                  <ListItem>IBM Watson Slack</ListItem>
                  <ListItem>Watson als Content hub (Voice Bot für File Zugriff und Suchen)</ListItem>
                  <ListItem>Sehr teuer $$</ListItem>
              </List>
          </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Records</Quote>
            <Cite>Videos: https://www.youtube.com/channel/UCfuj1MM5p37CRzWYPv_PsWA/videos</Cite>
            <Cite>Wiki: https://nexus-netsoft.atlassian.net/wiki/spaces/NXS/pages/278036492/2018</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
