import React from "react";
import { DiFirebase, DiReact, DiNodejs } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {" "}
      I have worked with a range of technologies in the web development world.
      From back-end to front-end.
    </SectionText>
    <List>
      {" "}
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          {" "}
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            {" "}
            Experience with <br />
            React, Next.js, JavaScript, TypeScript, HTML/CSS, WordPress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem"></DiNodejs>
        <ListContainer>
          {" "}
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            {" "}
            Experience with <br />
            Node.js, Express.js, Knex.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          {" "}
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            {" "}
            Experience with <br />
          </ListParagraph>
          MySQL, MongoDB, AWS
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
