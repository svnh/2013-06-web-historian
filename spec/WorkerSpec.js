var stubs = require("./helpers/stubs");
var htmlFetcherHelpers = require("../workers/lib/html-fetcher-helpers");
var fs = require("fs");
var path = require('path');

describe("html fetcher helpers", function(){

  it("should have a 'readUrls' function", function(){
    var urlArray = ["example1.com", "example2.com"];
    var filePath = path.join(__dirname, "testdata/sites.txt");
    fs.writeFileSync(filePath, urlArray.join("\n"));

    runs(function(){
      htmlFetcherHelpers.readUrls(filePath, function(urls){
        expect(urls).toEqual(urlArray);
      });
    });
  });

  xit("should have a 'downloadUrls' function", function(){
    var result = htmlFetcherHelpers.downloadUrls();
    expect(result).toBeTruthy();
  });
});
