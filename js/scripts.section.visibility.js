// Passing a named function instead of an anonymous function.

function readyFn(jQuery) {
    // Code to run when the document is ready.
}

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");


    var page_dict = {
        default_page: { id: 'default_page', name: 'default_page', page_loc_name: './home.html#top' }, //default page is set to 'home'
        index: { id: 'index', name: 'index', page_loc_name: './index.html#top' },
        home: { id: 'home', name: 'home', page_loc_name: './home.html#top' },
        timeline: { id: 'timeline', name: 'timeline', page_loc_name: './timeline.html#top' },
    }

    var website_fns = {
        LoadPage:
            function (page_loc_name = null) {
                $("#main_content").load(page_loc_name, function (responseTxt, statusTxt, xhr) {
                    if (statusTxt == "success") {
                        console.log("Page Location: " + page_loc_name);
                    }
                    if (statusTxt == "error") {
                        console.log("Error: " + xhr.status + ": " + xhr.statusText);
                    }
                });
            },

        clickedMenuItem:
            function (clicked_id = null) {
                console.log("Clicked Id: " + clicked_id + '\n');

                for (const [key, value] of Object.entries(page_dict)) {

                    if (clicked_id == value.id) {

                        console.log('key, value: ' + key + '||' + JSON.stringify(value) + '\n');

                        website_fns.LoadPage(value.page_loc_name);

                        //$("nav.nav a.nav_logo").removeClass("active");
                        //$("nav.nav a.nav_link").removeClass("active");
                        //$(clicked_id).addClass("active");

                        console.log("DONE");
                        break;
                    }
                }
            },

    }

    var clicked_id = 'default_page';

    //Show the default page (home) initially
    website_fns.clickedMenuItem(clicked_id);

    $('a.nav_logo, a.nav_link').click(function (e) {
        //e.preventDefault();
        this.clicked_id = $(this).attr('id');
        console.log("Clicked Id: " + this.clicked_id);

        website_fns.clickedMenuItem(this.clicked_id);

    });


    $("#home").click(function () {
        $("#home").show();
        $("#timeline").hide();
    });

    $("#timeline").click(function () {
        $("#timeline").show();
        $("#home").hide();
    });
});

// or:
//$(window).on("load", readyFn);