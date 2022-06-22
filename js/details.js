// When a detail is clicked it closes all other open details.
$("details").on("click", function() {
    // get the detail that was clicked on
    clickedDetail = this;
    // go through all details
    $("details").each(function() {
        // if the detail is not the one clicked and open then close it
        if (this != clickedDetail & this.hasAttribute("open")) {
                this.removeAttribute("open");
        }
    })
})