import React from 'react';
export default function CTableHeader(props) {
  const HEADERS = props.data[0] ? Object.keys(props.data[0]) : [];
  const theadStyles = {
    backgroundColor: props.headerColor || "#f8f9f5"
  };
  const trStyle = {
    color: props.headerTextColor
  };
  return /*#__PURE__*/React.createElement("thead", {
    style: theadStyles
  }, /*#__PURE__*/React.createElement("tr", {
    style: trStyle
  }, HEADERS.map((h, i) => {
    return /*#__PURE__*/React.createElement("th", {
      key: i,
      scope: "col"
    }, h);
  })));
}