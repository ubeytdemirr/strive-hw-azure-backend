require("console-stamp")(console, "dd/mm/yyyy HH:MM:ss.l");

import { createServer } from "http";

import express from "./app/express";
import chalk from "chalk";
const server = createServer(express);

const { PORT, NODE_ENV } = process.env;

const listening = () => {
  console.info(
    chalk.blue(
      `Server is up and running on port ${process.env.PORT} in ${NODE_ENV} mode 🚀`
    )
  );
};

const onError = (err: Error) => {
  console.error(
    chalk.red(
      `Server is up and running on port ${process.env.PORT} in ${NODE_ENV} mode 🚀`
    )
  );
};

server.listen(PORT || 5000, listening);
server.on("error", onError);
