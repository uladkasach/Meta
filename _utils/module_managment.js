// this script constains functionality that enables module managment on the client side
// e.g., programmatically include html, css, js, and load content as plaintext.
_module_managment = {
    promise_to_load_script_into_window : function(script_src){
        return new Promise((resolve, reject)=>{
            var script = document.createElement('script');
            script.setAttribute("src", script_src);
            script.onload = function(){
                resolve("success");
            };
            document.getElementsByTagName('head')[0].appendChild(script);
        })
    },

    promise_to_retreive_json : function(json_source){
        return new Promise((resolve, reject)=>{
            var xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.open("GET", json_source, true);
            xhr.onload = function(){
                resolve(JSON.parse(this.responseText));
            };
            xhr.send();
        })
    },


    promise_to_load_css_into_window : function(styles_href){
        // <link rel="stylesheet" type="text/css" href="/_global/CSS/spinners.css">
        return new Promise((resolve, reject)=>{
            var styles = document.createElement('link');
            styles.type = "text/css";
            styles.rel = 'stylesheet';
            styles.href = styles_href;
            styles.onload = function(){
                resolve("success");
            };
            document.getElementsByTagName('head')[0].appendChild(styles);
        })
    },

    promise_to_get_html_from_file : function(destination_path){
        return this.promise_to_get_content_from_file(destination_path);
    },

    promise_to_get_content_from_file : function(destination_path){
        return new Promise((resolve, reject)=>{
            var xhr = new XMLHttpRequest();
            xhr.open("POST", destination_path, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = function(){
                resolve(this.responseText)
            };
            xhr.send();
        })
    },
}
