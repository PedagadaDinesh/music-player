import React from "react";
import MaterialTable, { MTableToolbar } from "@material-table/core";
import { muiTable } from "../utils";

const LibrarySong = ({ songs }) => {
  console.log(songs);
  return (
    <div className="w-full">
      <MaterialTable
        // isLoading={isValidating || deleteLoading}
        data={
          songs === null
            ? []
            : songs?.map((item, i) => ({
                ...item,
                sl: i + 1,
              }))
        }
        options={{
          ...muiTable.options(),
          filtering: false,
          search: false,
          showTitle: false,
          paging: false,
          toolbar: false,
        }}
        style={{
          ...muiTable.styles,
          overflow: "hidden",
          borderBottom: "none",
        }}
        components={{
          Toolbar: (props) => (
            <div className="flex w-full items-center">
              <MTableToolbar
                {...props}
                className="w-full min-h-[4rem] h-full"
              />
            </div>
          ),
        }}
        columns={[
          {
            title: "#",
            field: "sl",
            editable: "never",
            width: "5%",
            filtering: false,
            cellStyle: {
              backgroundColor: "black",
              color: "white",
              borderBottom: "none",
            },
          },
          {
            title: "Track",
            field: "name",
            width: "40%",
            hideFilterIcon: true,
            render: ({ name, cover }) => {
              return (
                <div className="flex gap-2 items-center">
                  <img src={cover} className="h-10 w-10"></img>
                  <p className="">{name}</p>
                </div>
              );
            },
            cellStyle: {
              backgroundColor: "black",
              color: "white",
              borderBottom: "none",
            },
          },
          {
            title: "Artists",
            field: "artist",
            width: "40%",
            hideFilterIcon: true,
            render: ({ artist }) => {
              return <div className=" flex items-center gap-2">{artist}</div>;
            },
            cellStyle: {
              backgroundColor: "black",
              color: "white",
              borderBottom: "none",
            },
          },
        ]}
      />
    </div>
  );
};

export default LibrarySong;
