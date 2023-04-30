import { Button, Card, Container, Input, Spacer } from "@nextui-org/react";
import { useState } from "react";
import FormInput from "./FormInput";

type SelectProps = {
  data: string[];
} & React.ComponentProps<typeof Input>;

const Select = (props: SelectProps) => {
  const [filteredData, setFilteredData] = useState<string[]>([
    ...props.data.slice(0, 5),
  ]);
  const [currentValue, setCurrentValue] = useState<string>("");

  const handleChange = (e: { target: { value: string } }) => {
    setCurrentValue(e.target.value);
    const dataList = document.getElementById("data-list");
    //@ts-ignore
    dataList.style.visibility = "visible";
    const _filteredData = props.data
      .filter((country) =>
        country.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
      .slice(0, 5);
    setFilteredData(_filteredData);
  };

  const handleFocus = (e: { target: { select: () => void; value: any } }) => {
    e.target.select();
    const dataList = document.getElementById("data-list");
    //@ts-ignore
    dataList.style.visibility = "visible";
  };

  const handleClick = (e: any) => {
    setCurrentValue(e.target.innerText);
  };

  const handleBlur = async () => {
    const dataList = document.getElementById("data-list");
    setTimeout(() => {
      //@ts-ignore
      dataList.style.visibility = "hidden";
    }, 200);
  };

  return (
    <Container
      responsive={false}
      fluid
      css={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "auto",
        padding: "0",
      }}
    >
      <FormInput
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={currentValue}
      />
      <Card
        id="data-list"
        variant="bordered"
        style={{
          display: "flex",
          position: "absolute",
          visibility: "hidden",
          top: "calc(100% + 20px)",
          zIndex: 100,
          overflow: "hidden",
        }}
      >
        {filteredData.map((label, index) => (
          <Button
            light
            auto
            css={{
              width: "100%",

              "&:hover": {
                backgroundColor: "hsl(0, 0%, 95%)",
              },
            }}
            key={index}
            onClick={handleClick}
          >
            {label}
          </Button>
        ))}
      </Card>
    </Container>
  );
};

export default Select;
