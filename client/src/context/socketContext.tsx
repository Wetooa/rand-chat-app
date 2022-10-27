import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ParentNodeProps, SocketStatesProps } from "../interface";

const socket = io("http://localhost:5000");

const socketStates: SocketStatesProps = {
  test: "test",
};

const SocketContext = createContext({
  ...socketStates,
  findStranger: async () => {},
});

const SocketContextProvider: React.FC<ParentNodeProps> = ({ children }) => {
  const [test, setTest] = useState(socketStates.test);

  useEffect(() => {
    socket.on("user connected", (id) => {
      console.log(id);
    });
  });

  const findStranger = async () => {
    socket.emit("finding stranger");
  };

  return (
    <SocketContext.Provider value={{ test, findStranger }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocketContext = () => {
  return useContext(SocketContext);
};

export { SocketContextProvider, SocketContext, useSocketContext };
