import { Input } from "@nextui-org/react";

type FormInputProps = {} & React.ComponentProps<typeof Input>;

const FormInput = (props: FormInputProps) => {
  return (
    <Input
      bordered
      aria-label={props.label}
      css={{
        width: "100%",
        "& label::after": {
          content: `${props.required ? "" : " (optional)"}`,
          fontStyle: "italic",
          color: "hsl(0, 0%, 60%)",
        },
      }}
      {...props}
    />
  );
};

export default FormInput;
