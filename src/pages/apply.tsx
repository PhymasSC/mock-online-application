import { Text, Input, Spacer, Grid, Container, Card } from "@nextui-org/react";
const Apply = () => {
  return (
    <Container
      css={{
        marginTop: "$2xl",
        marginBottom: "$2xl",
      }}
    >
      <Text h1>Cabin Crew Application</Text>
      <Card
        variant="bordered"
        css={{
          padding: "1rem",
        }}
      >
        <Card.Header>
          <Text h2>Personal Information</Text>
        </Card.Header>
        <Card.Body>
          <form action="/online-application" method="post">
            <Grid.Container gap={2}>
              <Grid xs={12} md={6}>
                <Input
                  bordered
                  label="First Name"
                  css={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Input
                  bordered
                  label="Last Name"
                  css={{
                    width: "100%",
                  }}
                />
              </Grid>
            </Grid.Container>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Apply;
