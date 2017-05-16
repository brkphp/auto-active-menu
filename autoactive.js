$('document').ready(function(){
    /*
        Ul menu of class value
     */

   var menu = ".main-navigation";

    /*
        Class value for active
     */

    var active = "has-class";

    /*
     Closest element for add active class
     */

    var closest = "li";

    var pathname = window.location.pathname; // Returns path only


    $(menu + ' a').each(function(i,item){
        if(item.pathname == pathname){
            if(closest != "")
                $(this).closest(closest).addClass(active);
            else
                $(this).addClass(active);
            return false;
        }
    });


});