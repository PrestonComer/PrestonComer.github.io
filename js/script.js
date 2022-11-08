$(document).ready(function () {
    var coll = $(".collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        })
    }
})

function sortTable(n) {
    var table = document.getElementById("projectsTable");
    var rows;
    var switching = true;
    var i;
    var x;
    var y;
    var shouldSwitch;
    var dir = "asc";
    var switchCount = 0;

    // Remove all headerSortDown class from all other th
    var childrenArray = table.rows[0].children;
    for (let index = 0; index < childrenArray.length; index++) {
        childrenArray[index].classList.remove("headerSortDown");
    }
    // Add a arrow icon to show the th being used to sort table
    table.rows[0].getElementsByTagName("th")[n].classList.add("headerSortDown");

    /* Make a loop that will continue until no switching has been done: */
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (n == 0) {
            if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > 
                y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
            }
            } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < 
                y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
            }
        }
        else {
            if (x.innerHTML == "" && y.innerHTML == "✔") {
              //if so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
          }
      }
        
        if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchCount ++;      
        } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchCount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
        }
    }
}