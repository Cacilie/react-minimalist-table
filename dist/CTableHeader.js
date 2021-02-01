import React from 'react';
export default function CTableHeader(props) {
  const HEADERS = props.data[0] ? Object.keys(props.data[0]) : [];
  return /*#__PURE__*/React.createElement("thead", {
    style: {
      backgroundColor: props.headerColor || "#f8f9f5"
    }
  }, /*#__PURE__*/React.createElement("tr", {
    style: {
      color: props.headerTextColor
    }
  }, HEADERS.map((h, i) => {
    return /*#__PURE__*/React.createElement("th", {
      key: i,
      scope: "col"
    }, h);
  })));
}