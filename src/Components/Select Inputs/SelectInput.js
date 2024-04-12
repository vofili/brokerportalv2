import Select from "react-select";

export default function SelectInput({ label, placeholder }) {
  return (
    <>
      <Select
        options={label}
        placeholder={placeholder}
        styles={{
          option: (base) => ({
            ...base,
            width: "350px",
          }),

          control: (baseStyles) => ({
            ...baseStyles,
            color: "#cccccc",

            letterSpacing: "0.54px",
            fontSize: "16px",
            height: "52px",
            outline: "none",
            border: "0.5px solid #9C9898",
            width: "350px",
            marginTop: "10px",
          }),
        }}
      />
    </>
  );
}
