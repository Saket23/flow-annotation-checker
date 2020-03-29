"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function() {
  return {
    visitor: {
      Program: {
        exit(path) {
          if (!path.hub.file.code.startsWith("//@flow")) {
            console.log("\x1b[33m%s\x1b[0m", "WARNING WARNING!");
            console.log("following file does not have flow annotation");
            console.log(path.hub.file.opts.filename);
          }
          return;
        }
      }
    }
  };
};
