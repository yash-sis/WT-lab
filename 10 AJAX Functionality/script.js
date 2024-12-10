//Simulated data
const simulatedData = {
  json: {
    text: "This is a sample text from a simulated server response.",
    name: "Aarav Sharma",
    age: 30,
    city: "Bengaluru",
  },
};

//Ajax-like operation without jQuery
function operationWithoutJQuery() {
  setTimeout(function () {
    document.getElementById("result-a").textContent = simulatedData.json.text;
  }, 500);
}

//Ajax-like operation with jQuery
function operationWithJQuery() {
  $.Deferred(function (deferred) {
    setTimeout(function () {
      deferred.resolve(simulatedData.json.text);
    }, 500);
  }).done(function (result) {
    $("#result-b").text(result);
  });
}

//jQuery-like getJSON() method
function getJSONOperation() {
  $.Deferred(function (deferred) {
    setTimeout(function () {
      deferred.resolve(simulatedData.json);
    }, 500);
  }).done(function (result) {
    $("#result-c").text(JSON.stringify(result, null, 2));
  });
}

//jQuery parseJSON() method
function parseJSONExample() {
  let jsonString = JSON.stringify(simulatedData.json);
  let jsonObject = $.parseJSON(jsonString);
  $("#result-d").text(JSON.stringify(jsonObject, null, 2));
}
