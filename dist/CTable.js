import React from 'react';
import './CTable.css';
import PropTypes from 'prop-types';

function CTableHeader(props) {
  const HEADERS = Object.keys(props.data[0]);
  return /*#__PURE__*/React.createElement("thead", {
    style: {
      backgroundColor: props.headerColor
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

function CTableRow({
  data
}) {
  const HEADERS = Object.keys(data[0]);
  return data.map((r, i) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, HEADERS.map((h, j) => {
      return /*#__PURE__*/React.createElement("td", {
        key: j,
        "data-label": h
      }, data[i][h]);
    }));
  });
}

export default function CTable(props) {
  return /*#__PURE__*/React.createElement("table", {
    className: "cTable"
  }, /*#__PURE__*/React.createElement("caption", null, props.caption), /*#__PURE__*/React.createElement(CTableHeader, props), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(CTableRow, props)));
}
CTable.propTypes = {
  caption: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerColor: PropTypes.string,
  headerTextColor: PropTypes.string
};