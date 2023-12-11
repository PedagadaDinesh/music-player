import React, { useState } from "react";
import MaterialTable, { MTableToolbar } from "@material-table/core";
import { muiTable } from "../utils";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbDownload } from "react-icons/tb";

const LibrarySong = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  const songSelectHandler = (rowData) => {
    setCurrentSong({ ...rowData });
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
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
        onRowClick={(row, newValue) => songSelectHandler(newValue)}
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
            width: "0%",
            filtering: false,
            cellStyle: {
              backgroundColor: "black",
              color: "white",
              borderBottom: "none",
            },
          },
          {
            title: "TRACK",
            field: "name",
            width: "35%",
            hideFilterIcon: true,
            render: ({ name, cover }) => {
              return (
                <div className="flex gap-2 items-center">
                  <img src={cover} className="h-12 w-12 rounded-lg"></img>
                  <p className="text-sm">{name}</p>
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
            title: "ARTISTS",
            field: "artist",
            width: "25%",
            hideFilterIcon: true,
            render: ({ artist }) => {
              return (
                <div className=" flex items-center gap-2 text-sm text-gray-400 font-medium">
                  {artist}
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
            title: "DURATION",
            field: "duration",
            width: "30%",
            hideFilterIcon: true,
            render: ({ duration }) => {
              return (
                <div className=" flex items-center text-center gap-2 text-sm text-gray-400 font-medium">
                  {duration}
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
            title: "ACTIONS",
            field: "actions",
            width: "10%",
            hideFilterIcon: true,
            render: ({}) => {
              return (
                <div className="flex gap-5">
                  <button>
                    <TbDownload className="h-6 w-6" />
                  </button>
                  <button>
                    <BsThreeDotsVertical className="h-5 w-5" />
                  </button>
                </div>
              );
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
