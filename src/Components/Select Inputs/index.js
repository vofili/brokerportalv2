import Select from "react-select";

export default function UsageSelect({ label, placeholder, value, width }) {
  return (
    <>
      <Select
        className="w-[40%] rounded "
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            color: "#ccccc",
            fontSize: "14px",
            height: "52px",
            outline: "none",
          }),
        }}
        width={width}
        value={value}
        options={label}
        placeholder={placeholder}
      />
    </>
  );
}
