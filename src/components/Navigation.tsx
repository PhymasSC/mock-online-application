import {
  Dropdown,
  Image,
  Navbar,
  Spacer,
  Text,
  Modal,
  Button,
  Link,
} from "@nextui-org/react";
import { Star } from "react-iconly";
import { useState } from "react";

const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const collapseItems = [
    <Text key="1" weight="bold" color="rgba(89, 89, 89, 1)">
      Our Brands
    </Text>,
    <Text key="2" weight="bold" color="rgba(89, 89, 89, 1)">
      Hiring Process
    </Text>,
    <Text key="3" weight="bold" color="rgba(89, 89, 89, 1)">
      Students
    </Text>,
    <Text key="4" weight="bold" color="rgba(89, 89, 89, 1)">
      Search All Jobs
    </Text>,
    <Text key="5" weight="bold" color="rgba(89, 89, 89, 1)">
      Blog
    </Text>,
    <>
      <Star primaryColor="gray" />
      <Spacer inline x={0.5} />
      Saved Jobs (0)
    </>,
  ];
  return (
    <>
      <Navbar isBordered maxWidth="fluid" variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Link href="/">
          <Navbar.Brand>
            <Image
              src="/nokair-icon2.webp"
              width="50"
              height="50"
              alt="Logo of the company"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Content>
          <Navbar.Link hideIn="xs">
            <Dropdown>
              <Dropdown.Button auto light>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text weight="bold" color="rgba(89, 89, 89, 1)">
                    Our Brands
                  </Text>
                </div>
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">Capital A</Dropdown.Item>
                <Dropdown.Item key="copy">
                  <Text del>airasia</Text> Super App
                </Dropdown.Item>
                <Dropdown.Item key="edit">Teleport</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link onPress={handler} hideIn="xs">
            <Text weight="bold" color="rgba(89, 89, 89, 1)">
              Hiring Process
            </Text>
          </Navbar.Link>
          <Navbar.Link onPress={handler} hideIn="xs">
            <Text weight="bold" color="rgba(89, 89, 89, 1)">
              Students
            </Text>
          </Navbar.Link>
          <Navbar.Link onPress={handler} hideIn="xs">
            <Text weight="bold" color="rgba(89, 89, 89, 1)">
              Search All Jobs
            </Text>
          </Navbar.Link>
          <Navbar.Link onPress={handler} hideIn="xs">
            <Text weight="bold" color="rgba(89, 89, 89, 1)">
              Blog
            </Text>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link onPress={handler} hideIn="xs">
            <Star primaryColor="gray" />
            <Spacer inline x={0.5} />
            Saved Jobs (0)
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>

      <Modal
        blur
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to{" "}
            <Text b size={18}>
              Mock Online Job Application
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            Hey! Focus on the job application process. This is a mockup of the
            job application. You should go through the process and see how it
            works. You can also try to apply for a job and see how it works.
            <br />
            Credit to myself for building the web app -{" "}
            <Text
              css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
              }}
            >
              Lau Sheng Cher
            </Text>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button flat auto onPress={closeHandler}>
            Goodbye!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigation;
