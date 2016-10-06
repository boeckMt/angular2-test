// lite-server uses BrowserSync
module.exports = {
  "port": 8000,
  // "files": ["./src/**/*.{html,htm,css,js}"],
  "server": {
    "baseDir": [
      "./", //serve from root for files not in src (node_modules and system-config)
      "./src" //serve index.html from here
    ]
  }
};
