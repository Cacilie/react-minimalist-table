---
description: 'In order to add conditional cell styles, follow this guide.'
---

# Conditional Cell Styling

Like in excel, it is possible to add conditional cell styling to your table. This is an awesome feature that may help you a lot.

For example, imagine you have a table with the grades on some students. If the grade is bigger than 70, you want to apply a custom style to the cell \(e.g. a green background\) and if not, another custom style \(e.g. red background\)

In order to have a table with conditional cell styles, apply this code.

```text
import "./styles.css";
import { CTable } from "react-minimalist-table";

const data = [
  {
    Student: "Cecilia Ovalle",
    Grade: 100
  },
  {
    Student: "Edgar Arroyo",
    Grade: 50
  }
];

export default function App() {
  return (
    <div className="App">
      <CTable
        data={data}
        conditionalCellStyle={[
          {
            columns: ["Grade"],
            validation: (value) => value > 70,
            styleTrue: {
              color: "white",
              background: "#7BCC70"
            },
            styleFalse: {
              color: "white",
              background: "#b43757"
            },
            defaultStyle: {
              color: "black"
            }
          }
        ]}
      />
    </div>
  );
}

```

#### Conditional Cell Style Props.

| `conditionalCellStyle` | objects array |
| :--- | :--- |
| `columns` | array of the columns in which this conditional style will be applied. |
| `styleTrue` | Style if validation returns true |
| `styleFalse` | Style if validation returns false |
| `validation` | Function that must return true or false in order to apply a style. Is the parameter as the current cell value in order to define the styling rule. |
| `defaultStyle` | Style if validations do not return true nor false |



