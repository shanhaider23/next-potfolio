import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>Shan-e-Haider Bukhari</SectionTitle>
      <SectionText>Full Stack Developer</SectionText>
      <SectionText>
        Possesses the ability to work in a team environment as well as using own
        initiative. Good understanding of React, Next.js, TypeScript,
        JavaScript, Nodejs, Expressjs, Knex.js, HTML/SCSS, MySQL, MongoDB, AWS
        and Git.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/shanhaider23")}
      >
        {" "}
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
