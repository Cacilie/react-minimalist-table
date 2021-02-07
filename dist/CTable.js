import React from 'react';
import './CTable.css';
import PropTypes from 'prop-types';
import CTableHeader from './CTableHeader';
import CTableRow from './CTableRow';
export default function CTable(props) {
  return /*#__PURE__*/React.createElement("table", {
    className: "cTable"
  }, /*#__PURE__*/React.createElement("caption", null, props.caption), /*#__PURE__*/React.createElement(CTableHeader, props), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(CTableRow, props)));
}
CTable.propTypes = {
  caption: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  cellTextColor: PropTypes.string,
  conditionalCellStyle: PropTypes.arrayOf(PropTypes.exact({
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    styleTrue: PropTypes.object.isRequired,
    styleFalse: PropTypes.object.isRequired,
    validation: PropTypes.func.isRequired,
    defaultStyle: PropTypes.object.isRequired
  }))
};