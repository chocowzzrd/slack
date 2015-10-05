/**
 * Created by sam on 10/5/2015.
 */
Template.footer.events({
    'keypress input': function(e) {
        var inputVal = $('.input-box_text').val();
        if(!!inputVal) {
            var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
            if (charCode == 13) {
                e.stopPropagation();
                Meteor.call('newMessage', {text: $('.input-box_text').val()});
                $('.input-box_text').val("");
                return false;
            }
        }
    }
});

Template.messages.helpers({
    messages: [
        { text: "All these messages" },
        { text: "Uses the same template" },
        { text: "But have a different data context" },
        { text: "It's why these messages are all different!" },
        { text: "Hey!" },
        { text: "What's up man!" },
        { text: "Hello" }
    ]
});