document.addEventListener('DOMContentLoaded', function() {

function first_letter_uppercase(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    

      // Send a GET request 
        fetch('student_data/data.json')

        // Put response into json form
        .then(response => response.json())	// take response and return response.json()
        .then(data => {
            
            // Check if data is valid:
            if (data !== undefined) {

                    //sort 
                
                data.sort(function(a, b) 
                {
                    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) 
                        {
                            return 1;
                        }
                        if (nameA > nameB) 
                        {
                            return -1;
                        }   
                    });  
                    

                
                var topper = 0;
                
                for(var i = 0; i < data.length; i++) {

                var obj = data[i];

                var s_name = obj.name;
                s_name = first_letter_uppercase(s_name);
                var roll_number = obj.rollNumber;
                var maths_marks = obj.marks["Maths"];
                var english_marks = obj.marks["English"];
                var science_marks = obj.marks["Science"];
                var total_marks = parseInt(maths_marks) + 
                                    parseInt(english_marks) + parseInt(science_marks);
                


                


                //adding rows
                var table = document.getElementById("student_table");
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = s_name;
                cell2.innerHTML = roll_number;
                cell3.innerHTML = total_marks;
                

                

                if ( (parseInt(maths_marks) < 20) ||  
                    (parseInt(english_marks) < 20) || (parseInt(science_marks) < 20)  )
                {
                    
                    cell4.innerHTML = 'Fail';
                    row.style.color = "red";
                }
                else
                {   

                    cell4.innerHTML = 'Pass';
                }
                //styling
                
                if (total_marks > topper) {
                    
                    topper = total_marks;
                    var topper_cell = cell4;
                    var topper_row = row;
                }


                




                
}
                topper_cell.innerHTML = "Topper";
                topper_row.style.color = "green";
            }
            else {
                
                // document.querySelector('#result').innerHTML = 'Invalid Currency.';
            }
        })
        // Catch any errors and log them to the console
        .catch(error => {
            console.log('Error:', error);
        });


        

        // Prevent default submission
        return false;
    }
);
