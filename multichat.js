Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
  Template.chat.events({
    'submit form': function(event) {
      event.preventDefault();
      var $chat_box = $(event.target).children('input');
      Messages.insert({username: Meteor.user()['emails'][0]['address'], content: $chat_box.val(), timestamp: new Date()});
      $chat_box.val("");
    }
  })

  Template.chat_list.helpers({
    all_chats: function() {
      return Messages.find({});
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
