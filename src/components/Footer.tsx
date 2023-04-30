import { Container, Text, Grid } from "@nextui-org/react";
import Image from "next/image";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "hsl(0, 100%, 60%)",
        height: "100%",
        marginTop: "1rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container
        css={{
          color: "white",
        }}
      >
        <Grid.Container>
          <Grid
            xs={12}
            md={4}
            direction="column"
            css={{
              gap: "1rem",
            }}
          >
            <Logo size={0.25} color={"#FFF"} />
            <Text h4 color="#FFF" weight="black">
              FOLLOW US KEEP UPDATED!
            </Text>
          </Grid>
          <Grid xs={12} md={4}>
            <Text color="#FFF">
              <Text h4 color="inherit" weight="black">
                More About US
              </Text>
              <Text color="inherit">About Us</Text>
              <Text color="inherit">Recruitment Privacy Notice</Text>
              <Text color="inherit">Newsroom</Text>
            </Text>
          </Grid>
          <Grid xs={12} md={4}>
            <Text color="#FFF">
              <Text h4 color="inherit" weight="black">
                EQUAL OPPORTUNITY
              </Text>
              <Text h5 color="inherit" weight="light">
                <Text span weight="bold" color="inherit">
                  We are all different{" "}
                </Text>
                - one talent to another - that is how we rely on our
                differences. At AirAsia, you will be treated fairly and given
                all chances to be your best. We are committed to creating a
                diverse work environment and are proud to be an equal
                opportunity employer.
              </Text>
              <Text h4 color="inherit" weight="black">
                RECRUITMENT AGENCIES
              </Text>
              <Text h5 color="inherit" weight="light">
                <Text span weight="bold" color="inherit">
                  Search Firm Representatives{" "}
                </Text>
                - AirAsia does not accept unsolicited assistance from search
                firms for employment opportunities. All CVs / resumes submitted
                by search firms to any employee at our company without a valid
                written search agreement in place will be deemed the sole
                property of our company. No fee will be paid in the event a
                candidate is hired by our company as a result of an agency
                referral where no pre-existing agreement is in place.
              </Text>
            </Text>
          </Grid>
        </Grid.Container>

        <Text small color="hsl(0, 100%, 90%)">
          Disclaimer: The following website is part of an educational
          initiative, and is not officially affiliated with AirAsia or its
          partners. The online job application process featured on this website
          is a simulated experience, provided solely for educational purposes,
          and does not reflect an actual job application process for AirAsia or
          any other company. Any personal information that may be provided
          during the simulation will not be collected or shared for any other
          purpose than the simulated experience. If the owner of AirAsia or its
          partners object to this website, they may contact me to request that
          it be taken down.
        </Text>
      </Container>
    </Container>
  );
};

export default Footer;
