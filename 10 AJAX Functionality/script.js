// Fetch data from a file
let fileData = null; // To store the fetched data

// Fetch the data once and reuse it
fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    fileData = data;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Ajax-like operation without jQuery
function operationWithoutJQuery() {
  setTimeout(function () {
    if (fileData) {
      document.getElementById("result-a").textContent = fileData.text;
    } else {
      document.getElementById("result-a").textContent =
        "Error: Data not loaded yet.";
    }
  }, 500);
}

// Ajax-like operation with jQuery
function operationWithJQuery() {
  $.Deferred(function (deferred) {
    setTimeout(function () {
      if (fileData) {
        deferred.resolve(fileData.text);
      } else {
        deferred.reject("Error: Data not loaded yet.");
      }
    }, 500);
  })
    .done(function (result) {
      $("#result-b").text(result);
    })
    .fail(function (error) {
      $("#result-b").text(error);
    });
}

// jQuery-like getJSON() method
function getJSONOperation() {
  $.get("data.json", function (data) {
    $("#result-c").text(JSON.stringify(data, null, 2));
  }).fail(function () {
    $("#result-c").text("Error: Unable to fetch JSON data.");
  });
}

// jQuery parseJSON() method
function parseJSONExample() {
  let jsonString = JSON.stringify(fileData || {});
  let jsonObject = $.parseJSON(jsonString);
  $("#result-d").text(JSON.stringify(jsonObject, null, 2));
}