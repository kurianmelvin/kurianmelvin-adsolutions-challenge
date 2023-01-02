import * as http from 'http';
import * as fs from 'fs';
import open from 'open';


http.createServer(function (req, res) {
  var myCode = fs.readFileSync("implementation.js");
  res.write(myCode+"\n"); 
  res.end();
}).listen(42780);

const myAddr = 'http://localhost:42780/';
open('https://preview.adsolutions.com/?url=ad01&placements[]=leader1&placementIds[leader1][tag]='+myAddr);//must be https in chrome; https://developer.chrome.com/blog/private-network-access-update/ | https://developer.chrome.com/blog/private-network-access-preflight/
