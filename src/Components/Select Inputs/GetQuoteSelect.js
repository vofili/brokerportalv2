import Select from "react-select";

function GetQuoteSelect({ label, placeholder }) {
  return (
    <>
      <Select
        options={label}
        placeholder={placeholder}
        styles={{
          option: (base) => ({
            ...base,
            width: "250px",
          }),
          active: (baseStyles) => ({
            ...baseStyles,
            outline: "none",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            color: "#ccccc",
            fontSize: "14px",
            outline: "none",
            border: "0.5px solid #9C9898",
            width: "250px",
            height: "60px",
          }),
        }}
      />
    </>
  );
}

export default GetQuoteSelect;
