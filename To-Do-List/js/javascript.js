$(document).ready(function () {
    $("form#main_input_box").submit(function (event) {
        event.preventDefault();
        var deleteButton = "<button class='delete btn btn-danger'>Delete</button>";
        var editButton = "<button class='edit btn btn-warning'>Edit</button>";
        var completeButton = "<button class='complete btn btn-success'>Mark as Complete</button>";
        var buttons = "<div class='float-right'><span class='mr-1'>" + deleteButton + "</span><span class='mr-1'>" + editButton + "</span>" + completeButton + "</div>";
        $(".list_of_items").append("<li class='list-group-item'>" + "<div class='text_holder'>" + $("#custom_textbox").val() + "<span class='ml-5'>" + buttons + "</span></div></li>");
        $("#custom_textbox").val('');
    });

    // delete item from list
    $(".list_of_items").on("click", "button.delete", function () {
        $(this).closest("li").remove();
    });

    // edit item
    $(".list_of_items").on("click", "button.edit", function () {
        var editItemBox = "<form class='edit_input_box'><input type='text' class='itembox form-control' placeholder='Enter edited task'></form>";
        var deleteButton = "<button class='delete btn btn-danger'>Delete</button>";
        var editButton = "<button class='edit btn btn-warning'>Edit</button>";
        if ($("button.complete").text() == "Mark as Complete") {
            var completeButton = "<button class='complete btn btn-success'>Mark as Complete</button>";
        } else {
            var completeButton = "<button class='complete btn btn-success'>Completed</button>";
        };
        var buttons = "<div class='float-right'><span class='mr-1'>" + deleteButton + "</span><span class='mr-1'>" + editButton + "</span>" + completeButton + "</div>";
        $(this).closest("div.text_holder").replaceWith(editItemBox);
        $("form.edit_input_box").on("submit", function () {
            $(this).replaceWith("<div>" + $(".itembox").val() + buttons + "</div>");
        });
    });

    // mark item as completed and strike through
    $(".list_of_items").on("click", "button.complete", function () {
        if ($(this).text() == "Mark as Complete") {
            $(this).text("Completed");
            $(this).closest("li").css("text-decoration", "line-through");
        } else {
            $(this).text("Mark as Complete");
            $(this).closest("li").css("text-decoration", "none");
        };
        event.preventDefault();
    });
});
