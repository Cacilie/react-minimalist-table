---
description: List of all the existing props.
---

# All props



<table>
  <thead>
    <tr>
      <th style="text-align:left">PropName</th>
      <th style="text-align:left">type</th>
      <th style="text-align:left">Expected</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>caption</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Title to be displayed upon the table</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>data</code>
      </td>
      <td style="text-align:left"><code>arrayOf(object)</code>
      </td>
      <td style="text-align:left">JSON-array of the data to be displayed</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>headerColor</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Background color to be applied to the header of the table</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>headerTextColor</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Text color to be applied do the header cells of the table</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>primaryColor</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Background color for even rows</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>secondaryColor</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Background color for odd rows</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>conditionalCellStyle</code>
      </td>
      <td style="text-align:left">arrayOf(object)</td>
      <td style="text-align:left">
        <p>An array of rules in order to apply conditional Cell Styling. The object
          must include:</p>
        <p>&#x1F604; <code>columns</code>: array of columns in which the conditional
          style will be applied.</p>
        <p>&#x1F604;<code>styleTrue</code>: style if validation returns true</p>
        <p>&#x1F604;<code>styleFalse</code>: style if validation returns false</p>
        <p>&#x1F604;<code>defaultStyle</code>: style if validation neither returns
          true nor false</p>
        <p>&#x1F604;<code>validation</code>: a function that should return either
          true of false in order to apply a style</p>
        <p></p>
      </td>
    </tr>
  </tbody>
</table>



