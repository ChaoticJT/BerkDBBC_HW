//  1.  Using the UFO dataset provided in the form of an array of JavaScript objects,
//write code that appends a table to your web page and then adds new rows of data
//for each UFO sighting.
//   2.  Make sure you have a column for date/time, city, state, country, shape, and
// comment at the very least.
//   3.  Use a date form in your HTML document and write JavaScript code that will
//LISTEN for events and search through the date/time column to find rows that
//match user input.

// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(data) {  tbody.html("");
  data.forEach((dataRow) => {

    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}
buildTable(tableData);

function handleClick() {
  d3.event.preventDefault();

  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
