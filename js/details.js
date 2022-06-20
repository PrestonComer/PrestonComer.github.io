// When a detail is clicked on top open it close all other details that are open so that only
// a single detail is open at one time. Requires each detail to have its own id.
$("details").on("click", function(clickedElement) {
    $("details").each(function(element) {
        if (clickedElement.id !== $("details")[element].id) {
            $("details")[element].removeAttribute("open");
        }
    });
})