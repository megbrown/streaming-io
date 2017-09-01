"use strict";

const { Transform, Writable } = require("stream");

const { createReadStream, writeFile } = require("fs");

const makeUpperCase = Transform();
const writeStream = Writable();


makeUpperCase._transform = (buffer, _, callback) => {
  callback(null, buffer.toString().toUpperCase());
};

writeStream._write = (buffer, _, next) => {
  writeFile('languages_caps.json', buffer, (err) => {
    if (err) throw err;
    console.log("Added to file!");
  });
  next();
};

createReadStream("languages.json").pipe(makeUpperCase).pipe(writeStream);