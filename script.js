var dataset = [{
  title: "Exova Indonesia", amount: "99000"},
  {
  title: "Artha Group", amount: "986894",
}];
let division = d3.select("body").selectAll("div");
division
.data(dataset)
.enter()
.append("div")
.text(function(d) {
  return d.title + " : " + d.amount;
})

var data = [20, 80, 74, 67, 48, 45]

var svgWidth = "400";
var svgHeight = "300";

var barWidth (svgWidth / data.length);

var svg = 

d3.selectAll("div").style("color", "blue").style("font-size", "18px")