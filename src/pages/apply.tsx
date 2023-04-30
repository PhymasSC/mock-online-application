import FormInput from "@/components/FormInput";
import Select from "@/components/Select";
import { Text, Grid, Container, Card, Button, Radio } from "@nextui-org/react";
import countries from "./../constant/countries.json";

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
          position: "relative",
        }}
      >
        <Card.Header>
          <Text h2>PART 1: Personal Information</Text>
        </Card.Header>
        <Card.Body
          css={{
            overflow: "hidden",
          }}
        >
          <form action="/api/online-application" method="post">
            <Grid.Container gap={2}>
              <Grid xs={12} md={6}>
                <FormInput
                  type="text"
                  name="fName"
                  label="First Name"
                  required
                />
              </Grid>
              <Grid xs={12} md={6}>
                <FormInput
                  type="text"
                  name="lName"
                  label="Last Name"
                  required
                />
              </Grid>
              <Grid xs={12} md={6}>
                <FormInput
                  type="tel"
                  name="phoneNumber"
                  label="Phone Number"
                  required
                />
              </Grid>
              <Grid xs={12} md={6}>
                <FormInput
                  type="email"
                  name="emailAddress"
                  label="Email address"
                  required
                />
              </Grid>
              <Grid xs={12} md={6}>
                <FormInput
                  type="text"
                  name="emailAddress"
                  label="Linked In Profile Link"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Select
                  label="Countries"
                  data={countries.map((country) => country.name)}
                  required
                />
              </Grid>
            </Grid.Container>
            <Text h2>PART 2: Questionnaire</Text>

            <Grid.Container gap={2}>
              <Grid xs={12}>
                <Radio.Group
                  label="The eligibility for this role is to be 18 years old or above. Please confirm that you are 18 years old or older."
                  name="ageAboveEighteen"
                  defaultValue="y"
                  css={{
                    "& label": {
                      color: "$black",
                      fontSize: "$sm",
                    },
                  }}
                >
                  <Radio value="y" size="xs">
                    Yes, I am 18 years old or older
                  </Radio>
                  <Radio value="n" size="xs">
                    No, I am younger than 18 years old
                  </Radio>
                </Radio.Group>
              </Grid>
              <Grid xs={12}>
                <FormInput
                  type="text"
                  name="nationality"
                  label="What is your nationality"
                  required
                />
              </Grid>
              <Grid xs={12}>
                <Radio.Group
                  label="Are you fully vaccinated against COVID-19?"
                  name="vaccinated"
                  defaultValue="y"
                  css={{
                    "& label": {
                      color: "$black",
                      fontSize: "$sm",
                    },
                  }}
                >
                  <Radio value="y" size="xs">
                    Yes, I am fully vaccinated
                  </Radio>
                  <Radio value="n" size="xs">
                    No, I am not vaccinated
                  </Radio>
                </Radio.Group>
              </Grid>
              <Grid xs={12}>
                <Radio.Group
                  label="We value your health in relation to performing the essential duties of the job. Your weight must be in healthy proportion to your height and is gauged through your Body Mass Index, calculator here. Is your Body Mass Index within the following range: Female: 18.5-22 Male: 18.5-23"
                  name="bmi"
                  defaultValue="y"
                  css={{
                    "& label": {
                      color: "$black",
                      fontSize: "$sm",
                    },
                  }}
                >
                  <Radio value="y" size="xs">
                    Yes, my Body Mass Index is in this range Female: 18.5-22
                    Male: 18.5-23
                  </Radio>
                  <Radio value="n" size="xs">
                    No, my Body Mass Index is lower or higher than the range.
                  </Radio>
                </Radio.Group>
              </Grid>
              <Grid xs={12}>
                <Radio.Group
                  label="Requirements are set by the Airline following a specific set of parameters whereas the candidate’s weight must be proportionate to height. Can you confirm that your height is as per below (cm)? Female: 157 cm or above Male: 170 cm or above"
                  name="height"
                  defaultValue="y"
                  css={{
                    "& label": {
                      color: "$black",
                      fontSize: "$sm",
                    },
                  }}
                >
                  <Radio value="y" size="xs">
                    Yes, my height is as per below Female: 157 cm or above Male:
                    170 cm or above
                  </Radio>
                  <Radio value="n" size="xs">
                    No, I am shorter than this
                  </Radio>
                </Radio.Group>
              </Grid>
            </Grid.Container>

            <Button auto flat type="submit">
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Apply;
