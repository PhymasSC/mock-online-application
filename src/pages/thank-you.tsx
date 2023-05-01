import Logo from "@/components/Logo";
import { Card, Container, Grid, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

const ThankYou = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Container
      fluid
      css={{
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Card variant="bordered" color="primary">
        <Card.Header
          css={{
            width: "100%",
          }}
        >
          <Text
            h1
            size="$4xl"
            css={{
              textAlign: "center",
              width: "100%",
            }}
          >
            {" "}
            We had received your application!
          </Text>
        </Card.Header>
        <Card.Body>
          <Grid.Container justify="center" alignItems="center">
            <Text h2>
              Thank you{" "}
              <Text
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
                span
              >
                {name}
              </Text>{" "}
              for your submission!
            </Text>
            <Container>
              <Card
                variant="bordered"
                css={{
                  padding: "1.5rem",
                }}
              >
                <Text
                  weight="medium"
                  css={{
                    textAlign: "justify",
                  }}
                >
                  Thank you for applying to join our cabin crew team! We
                  appreciate your interest in working with us and taking the
                  time to submit your application. We have received your
                  application, and our recruitment team is currently reviewing
                  your qualifications and experience. If your skills match what
                  we are looking for, we will be in touch with you shortly to
                  schedule an interview. We understand that the recruitment
                  process can be a bit nerve-wracking, but we will try to keep
                  you updated on its status as much as possible. In the
                  meantime, we thank you for your patience and understanding,
                  and we look forward to the possibility of having you on our
                  team.
                </Text>
                <Text h3>Best regards,</Text>
                <Logo size={0.25} />
                <Text h3 weight="light">
                  AirAsia Cabin Crew Recruitment Team
                </Text>
              </Card>
            </Container>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ThankYou;
