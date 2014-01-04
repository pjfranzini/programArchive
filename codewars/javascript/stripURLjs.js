// Complete the method so that it does the following:

// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 2nd argument (optional array)
// Examples:

// stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'


// my quick and dirty solution
function stripUrlParams(url, paramsToStrip){
  var urlSplit = url.match(/^([\w\.]*\??)([\w\W]*)$/);
  var urlHead = urlSplit[1];
  var queries = urlSplit[2];
  if (queries === "") return urlHead;
  if (typeof paramsToStrip === "undefined") {
    queries = queries.split("&").uniqueQuery().join("&");
  } else {
    queries = queries.split("&").uniqueQuery(paramsToStrip).join("&");
  }
  return urlHead + queries;
}
Array.prototype.uniqueQuery = function(paramsToStrip) {
  var output = {};
  for (var key = 0; key < this.length; key++) {
    var q = this[key].match(/([\w]*)\=/)[1];
    if (typeof paramsToStrip === "undefined") {
      if (output[q] === undefined) output[q] = this[key];
    } else {
      if (paramsToStrip.indexOf(q) === -1 && output[q] === undefined ) {
        output[q] = this[key];
      }
    }
  }
  var results = [];
  for (key in output) {
    var value = output[key];
    results.push(value);
  }
  return results;
};

// an example of a shorter one
function stripUrlParams(url, paramsToStrip) {
  var params = {};
  paramsToStrip = paramsToStrip || [];

  return url.replace(/((\?)|&)([^=])+=([^&]+)/g, function (match, qe, q, name, value) {
    if (params[name] || paramsToStrip.indexOf(name) >= 0) {
      return q || '';
    }

    params[name] = value;
    return match;
  });
}