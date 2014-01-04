function stripUrlParams(url, paramsToStrip){
  var queries = url.match(/^[\w\.]*\??([\w\W]*)$/)[1];
  queries = queries.split("&").unique().join("&");
  console.log(queries);
}
Array.prototype.unique = function() {
  var output = {};
  for (var key = 0; key < this.length; key++) {
    output[this[key]] = this[key];
  }
  var results = [];
  for (key in output) {
    var value = output[key];
    results.push(value);
  }
  return results;
};