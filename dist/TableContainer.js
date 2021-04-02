import React from 'react';
export default function TableContainer(props) {
  const Styles = {
    TableContainer: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 15,
      border: '1px solid rgba(34, 36, 38, .1)',
      borderRadius: 10,
      width: 600,
      marginTop: 10
    },
    Container: {
      display: 'flex',
      flexDirection: 'column'
    },
    ContainerHeader: {
      display: 'flex',
      flexDirection: 'row'
    },
    HeaderTitle: {
      display: 'flex'
    },
    HeaderActions: {
      display: 'flex',
      alignSelf: 'flex-end'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: Styles.TableContainer
  }, /*#__PURE__*/React.createElement("div", {
    style: Styles.Container
  }, /*#__PURE__*/React.createElement("div", {
    style: Styles.ContainerHeader
  }, /*#__PURE__*/React.createElement("div", {
    style: Styles.HeaderTitle
  }, /*#__PURE__*/React.createElement("h2", null, "Titulo")), /*#__PURE__*/React.createElement("div", {
    style: Styles.HeaderActions
  }, /*#__PURE__*/React.createElement("h2", null, "Actions"))), /*#__PURE__*/React.createElement("div", null, props.children)));
}