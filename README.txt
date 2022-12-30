Goal: create 3 HTML elements which wrap around the content of the website. When scrolling, the menu should appear above the created elements. 

Here are some examples of what it should look like:
- https://preview.adsolutions.com/?url=ad01&tpl=skin.tpl&placements%5b%5d=leader1&placementIds%5bleader1%5d%5btag%5d=https%3A%2F%2Frichmedia.cdnservices.net%2F%2Fadtech%2Fassets%2Fa8e9929d586742da83d76053b91db97b%2Fadnuntius_code.txt%3Fx%3D1&tmacros=1

- https://preview.adsolutions.com/?url=ad01&tpl=skin.tpl&placements%5b%5d=leader1&placementIds%5bleader1%5d%5btag%5d=https%3A%2F%2Frichmedia.cdnservices.net%2F%2Fadtech%2Fassets%2F2a9e78cb8549e613f2e917a3d836cd43%2Fadnuntius_code.txt%3Fx%3D1&tmacros=1

Start: 
    - make sure a recent version (v16) of nodejs is installed; https://nodejs.org/en/
    - initially install all dependencies via; npm install
    - then run via; node index.js

This will start a webserver listening on port 42780. If you have a local firewall, please allow this port.
The webserver will serve the contents in the implementation.js. 

Also this will spawn a browser which points to; http://preview.adsolutions.com/?url=ad01&placements[]=leader1&placementIds[leader1][tag]=http://localhost:42780/

Of course when you have your own webserver, you can use that as well, just replace the value of the &placementIds[leader1][tag]= parameter in the url to point to your own webserver.

This url (http://preview.adsolutions.com/?...), will embed your script on the website, so you can implement the requested feature.

We have added an example of the implementation.js as a reference. The objective is to create your own implementation file.
