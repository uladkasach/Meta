// This <script> chunk handles all of the functionality used to source and render the markdown that is displayed on pages
// Note: it is dependent on /_lib/markdown.js and /_utils/module_managment.js (expects both to already be loaded)



var _markdown_injector = {

    promise_to_inject : function(markdown_source_and_destination){ // promise to load markdown content and display it
        /*
        Expects input of this form:

        var markdown_source_and_destination = [ // source file path and destination element id
            ["/_markdown/research.md", "#research_content"]
        ];
        */

        var content_display_promises = [];
        for(var i = 0; i < markdown_source_and_destination.length; i++){
            let this_set = markdown_source_and_destination[i];
            let this_source = this_set[0];
            let this_dest = this_set[1];
            let promise_to_load_markdown = _module_managment.promise_to_get_content_from_file(this_source);
            let promise_to_display_content = Promise.all([window.promise_to_load, promise_to_load_markdown, this_dest])
                .then((data_array)=>{
                    let markdown = data_array[1];
                    let destination_query = data_array[2];
                    let html = window["markdown"].toHTML(markdown); //convert markdown to html
                    document.querySelector(destination_query).innerHTML = html;
                })
            content_display_promises.push(promise_to_display_content);
        }

        return Promise.all(content_display_promises);
    }


}
