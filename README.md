
# Angular Project
First create the chart angular project

--> create a new angular service component in that component name is chartDataService component sample array of object data taken after that create one method and access the data in that method of method of rxjs operator.

--> Obseravable is rxjs operator array of data showing.

--> chart data service component fist import into the app component after that inject the service into the constructor method after that that service method called by using subscriber fetch the data and stored one variable.

--> create theree fileds first is start date and second is end date, third is category filter in the template.

--> first created the updatechart method first setup the margin properity set the values top, bottom, left, right.

--> set the width and height properity assign some values.

--> install the d3js library in angular project using npm install -g d3

--> in html one div element id assigned that id reference taken to svg element created.

--> that svg element assigned width and height, transform properity setup to svg

--> setup the scales and axes points setup the date filed values into the x-axis of bar chart.

--> setup the scales and axes points setup the value filed values into the y-axis of bar chart.

--> Assigned the bars into the svg container x-axis represents the date and y-axis represents the value based on values bar showing.

--> filter the dates and category of onStartDateChange, onEndDateChange and onCategoryChange methods getting the values of e.target.value according based on call the filterdata filter the present date to selected date and enddate
filter the category of data filed getting filtered values.

--> filtered values call the update method according to update the x-axis and y-axis scales based on update the bar values selected dates out of range not showing the values of bars.

--> To run the project by using ng serve command running the appplication is 4200 port.





