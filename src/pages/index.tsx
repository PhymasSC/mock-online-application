import {
  Container,
  Spacer,
  Text,
  Collapse,
  Button,
  Row,
} from "@nextui-org/react";
import Link from "next/link";
import { ChevronRight } from "react-iconly";

const Home = () => {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        padding: "0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "80vh",
          overflow: "hidden",
          background: "url(/bgimg.webp) no-repeat center center",
          backgroundSize: "cover",
        }}
      ></div>

      <Container>
        <Text h1 color="rgba(255, 0, 0, 1)">
          Job Description
        </Text>
        <Text h2>CABIN CREW ONLINE APPLICATION</Text>
        <hr></hr>

        <Spacer y={1} />
        <Text
          size="$lg"
          css={{
            textAlign: "justify",
            lineHeight: "2",
          }}
        >
          <Text h3>
            Always wanted to travel and experience work at{" "}
            <Text em b>
              34000 ft
            </Text>
            ?
          </Text>
          <Text h4 weight="medium">
            The AirAsia Cabin Crew is an iconic brand, from our red uniform to
            our warm, bright smiles. We pride ourselves on being a breath of
            fresh air compared to other airlines&#39; conventional cabin crew.
            We&#39;re fun, hardworking, and committed to making AirAsia the best
            airline. If you&#39;ve been thinking about a career in the skies,
            here are our core requirements to fly with the{" "}
            <Text span color="rgb(255,0,0,1)">
              <Text del color="rgb(255,0,0,1)">
                {" "}
                AirAsia{" "}
              </Text>
              Cabin Crew
            </Text>
            :
          </Text>
          <Text blockquote>
            <Text h5>Great Personality </Text>
            To us personality is everything. We want fun, team players who are
            positive, outgoing, love to work and serve people. You must show
            determination, persistence, a Make It Happen attitude with an
            inexhaustible smile, boundless energy, and great love for working
            with an iconic brand. Even though we take fun seriously, hard work
            is second nature as well. In reality, you&#39;ll be on your feet for
            hours, on many sectors, working irregular hours, handling conflicts
            and issues, cleaning the cabin and toilets, and working on the
            tarmac or at the gates. Being firm when needed is very important.
            Key elements to this job include giving instructions during
            emergencies, calming a tense situation, or enforcing certain rules
            and regulations.
          </Text>
          Of course, we want it all –
          <Text blockquote>
            <Text h5>Great Looking</Text>
            we want a great personality with great looks too! But we&#39;re not
            looking for catwalk models that do not care about giving good
            service to our guests or being nice to their colleagues. AirAsia is
            not just an “employer”, because we see ourselves as “family”.
          </Text>
          <Text blockquote>
            <Text h5>Age</Text>
            Age is nothing but a number If you&#39;re 18 years and above, we
            want you!
          </Text>
          <Text blockquote>
            <Text h5>Working hours</Text>
            As a Cabin Crew, your working hours are based on productivity. The
            more shifts you take on, the better your earnings. How should I
            look?
          </Text>
          At AirAsia, we pride ourselves in giving our Cabin Crew the freedom of
          being themselves. You can style your hair as you like, as long as it
          looks presentable. Yes, good looks are important but good grooming is
          essential for an AirAsia Cabin Crew member. Here&#39;s what we look
          out for:
          <Text as="ul">
            <ChevronRight
              set="light"
              size="small"
              primaryColor="rgb(80,80,80)"
            />
            Flawless skin (without acne marks)
          </Text>
          <Text as="ul">
            <ChevronRight
              set="light"
              size="small"
              primaryColor="rgb(80,80,80)"
            />
            No visible marks on the hands and legs
          </Text>
          <Text as="ul">
            <ChevronRight
              set="light"
              size="small"
              primaryColor="rgb(80,80,80)"
            />
            No braces
          </Text>
          <Text as="ul">
            <ChevronRight
              set="light"
              size="small"
              primaryColor="rgb(80,80,80)"
            />
            Nice, healthy-looking hair (Men may have long hair, with the
            understanding that they may be required to have short hair if
            hired.)
          </Text>
          <Text as="ul">
            <ChevronRight
              set="light"
              size="small"
              primaryColor="rgb(80,80,80)"
            />
            Height: Ladies: minimum 157cm barefoot Men: minimum 170cm barefoot
            <Text span color="red">
              **
            </Text>
            Minimum arm reach of 210cm
          </Text>
          Are you ready to fly with us? Please refer to the requirements below
          to prep for your interview session. Good luck! Please bring along the
          following documents for interview preparations:
          <Text as="ul">
            <ChevronRight
              set="light"
              size="small"
              primaryColor="rgb(80,80,80)"
            />
            Updated CV Copy of educational certificate (Min SPM with 2 credits
            including English subject & pass Bahasa Malaysia subject)
            <Collapse.Group bordered>
              <Collapse title="For Malaysians">
                <Text as="ul">Copy of higher educational certificates</Text>
              </Collapse>
              <Collapse title="Fot Non-Malaysians">
                <Text as="ul">Copy of valid passport/IC</Text>
                <Text as="ul">Copy of vaccination certificate</Text>
                <Text as="ul">Head shot & full body photo</Text>
                <Text as="ul">
                  TOEIC with a min score of 650 (If SPM English is not a credit)
                </Text>
              </Collapse>
            </Collapse.Group>
          </Text>
          <Text as="ul">
            <ChevronRight
              set="light"
              size="small"
              primaryColor="rgb(80,80,80)"
            />
            Dress Code: Office Attire & female a must to come in a knee-length
            skirt and be yourself!
          </Text>
          <Text h3>GOOD LUCK & SEE YOU GUYS SOON!</Text>
          <Row justify="flex-start" align="center">
            <Text h3 color="red">
              APPLY NOW:{" "}
            </Text>
            <Spacer />
            <Link href="/apply">
              <Button flat color="default">
                Apply
              </Button>
            </Link>
          </Row>
        </Text>
      </Container>
    </Container>
  );
};

export default Home;
