import { Container, Text, Grid } from "@nextui-org/react";
import Image from "next/image";

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
            <Image
              src="/nokair-icon2.webp"
              width="200"
              height="50"
              alt={"Logo of the company"}
            />
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
      </Container>
    </Container>
  );
};

export default Footer;
