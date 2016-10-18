// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
    // Use $.get to read in your `data/students.csv` dataset: remember, you must be running a local server
    $.get('data/students.csv', function(data, error) {
    	var parsedData = Papa.parse(data, {
    		header:true
    	}).data;

    	//console.log(parsedData);

    	var table = $('<table>');
    	table.addClass('table');

    	Object.keys(parsedData[0]).forEach(function(d) {
    		table.append($('<th>' + d + '</th>'))
    	});
       	//console.log(tableHeaders);

       	parsedData.forEach(function(d) {
       		var tr = $('<tr>');

       		Object.keys(d).forEach(function(dd) {
       			tr.append($('<td>' + d[dd] + '</td>'));
       		})

       		table.append(tr);
       	});

    	$('#sandbox').append(table);
    });
        // Parse the data using Papa.parse


        // Use jQuery to create a table, and store that in a variable


        // Append a table header for each key in your first observation


        // Iterate through your array and create a new table row for each element in your array


            // Add a cell (<td>) for each key/value pair in your object


        // Select your `sandbox` section, and append your table to it


});
