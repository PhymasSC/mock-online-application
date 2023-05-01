import FormInput from "@/components/FormInput";
import Select from "@/components/Select";
import {
  Text,
  Grid,
  Container,
  Card,
  Button,
  Radio,
  Checkbox,
  Textarea,
  Spacer,
} from "@nextui-org/react";
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
                  name="linkedInProfileLink"
                  label="Linked In Profile Link"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Select
                  label="Countries"
                  name="country"
                  data={countries.map((country) => country.name)}
                  required
                />
              </Grid>
            </Grid.Container>

            <Grid xs={12}>
              <Text h2>PART 2: Questionnaire</Text>
            </Grid>

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
              <Grid xs={12} md={6}>
                <FormInput type="text" name="weight" label="Weight" required />
              </Grid>
              <Grid xs={12} md={6}>
                <FormInput
                  type="text"
                  name="languages"
                  label="What languages you comfortable speaking in? (Use comma to separate if more than one)"
                  required
                />
              </Grid>
              <Grid xs={12}>
                <Radio.Group
                  label="Are you willing to be relocated to our hubs outside Kuala Lumpur when needed?"
                  name="willingRelocated"
                  defaultValue="y"
                  css={{
                    "& label": {
                      color: "$black",
                      fontSize: "$sm",
                    },
                  }}
                >
                  <Radio value="y" size="xs">
                    Yes
                  </Radio>
                  <Radio value="n" size="xs">
                    No
                  </Radio>
                </Radio.Group>
              </Grid>
              <Grid xs={12}>
                <Radio.Group
                  label="Have you worked at AirAsia before?"
                  name="workedBefore"
                  defaultValue="y"
                  css={{
                    "& label": {
                      color: "$black",
                      fontSize: "$sm",
                    },
                  }}
                >
                  <Radio value="y" size="xs">
                    Yes
                  </Radio>
                  <Radio value="n" size="xs">
                    No
                  </Radio>
                </Radio.Group>
              </Grid>
              <Grid xs={12}>
                <FormInput
                  type="text"
                  name="role"
                  label="Allstars are always on the lookout for innovative ideas to digitally transform our guests&#39; experience, both from the airline and tech! With our evolving digital portfolio, what would you say is your role as a cabin crew to the brand?"
                  required
                />
              </Grid>
              <Grid xs={12}>
                <Text h2>PART 3: Work Experience</Text>
              </Grid>
              <Grid xs={12} md={6}>
                <FormInput
                  type="text"
                  name="jobTitle"
                  label="Job Title"
                  required
                />
              </Grid>
              <Grid xs={12} md={6}>
                <FormInput
                  type="text"
                  name="company"
                  label="Company Name"
                  required
                />
              </Grid>
              <Grid xs={12} md={6}>
                <FormInput type="date" name="workFrom" label="From" required />
              </Grid>
              <Grid xs={12} md={6}>
                <FormInput type="date" name="workTo" label="To" required />
              </Grid>

              <Grid xs={12}>
                <Textarea
                  name="location"
                  label="Location"
                  placeholder="Write your company address here..."
                  bordered
                  minRows={3}
                  maxRows={10}
                  css={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <Textarea
                  name="roleDescription"
                  label="Role Description"
                  placeholder="Describe your role here..."
                  bordered
                  minRows={3}
                  maxRows={20}
                  css={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Container>
                <Checkbox
                  name="agree"
                  id="agree"
                  defaultChecked
                  defaultSelected
                  aria-checked="true"
                  size="xs"
                  value={"y"}
                  isRequired
                  css={{
                    display: "flex",
                    direction: "column",
                  }}
                >
                  <Grid.Container>
                    <Grid>
                      <Text>
                        I acknowledge that I am applying for employment with
                        AirAsia (“Company”), and hereby consents to the
                        collection, use and processing of my personal
                        information as described below for the purpose of
                        recruitment.
                      </Text>
                    </Grid>
                    <Grid>
                      <Text>
                        I understand that the Company holds certain personal
                        information including name, home address, phone number,
                        date of birth, NRIC no and nationality. The Company
                        shall not process or disclose my Sensitive Personal
                        Data, such as physical or mental health condition,
                        political opinions, religious beliefs or other beliefs
                        of a similar nature, the commission or alleged
                        commission of any offence without my explicit consent
                        and/or unless otherwise provided under respective local
                        Data Protection Act.
                      </Text>
                    </Grid>
                    <Grid>
                      <Text>
                        Equal employment opportunities are provided by the
                        Company to all applicants and employees without regard
                        to race, creed, religion, colour, age, national origin,
                        sex, disability, medical condition, sexual orientation,
                        gender identity or expression, genetic information,
                        ancestry, marital status, military discharge status
                        (excluding dishonourable discharge), veteran status,
                        citizenship status, or any other legally protected
                        status.
                      </Text>
                    </Grid>
                    <Grid>
                      <Text>
                        The information provided will be kept confidential by
                        the Company and will only be used in ways that are
                        consistent with the law.
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Checkbox>
              </Container>
            </Grid.Container>

            <Spacer y={1} />
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
