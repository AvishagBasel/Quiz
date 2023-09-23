import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const QuestionOptions = ({ options, setSelectedOptionIndex }) => {
  return (
    <RadioGroup
      onChange={(e) => {
        setSelectedOptionIndex(parseInt(e.target.value), 10);
      }}
    >
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={index}
          control={<Radio />}
          label={option}
        />
      ))}
    </RadioGroup>
  );
};

export default QuestionOptions;
