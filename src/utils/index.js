export const muiTable = {
  styles: {
    // borderRadius: "5px",
    padding: "0 0 1rem 0",
    // boxShadow: "#8c80803d 0px 2px 6px 0px",
  },
  options: () => ({
    exportAllData: false,
    selection: false,
    actionsColumnIndex: -1,
    addRowPosition: "start",
    detailPanelColumnAlignment: "center",
    headerStyle: {
      backgroundColor: "#000000",
      hover: "none",
      color: "#666769",
      padding: "0.8rem",
      fontWeight: "600",
      fontSize: "1rem",
      rowStyle: {
        borderBottom: "",
      },
    },
  }),
};
