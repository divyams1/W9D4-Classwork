const FollowToggle = require("./follow_toggle");

 $(() => {
     let $btns = $("button.follow-toggle");
     $btns.each( function(index){
        new FollowToggle($btns[index])
     })
 });