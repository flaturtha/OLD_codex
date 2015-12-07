TrfIssues = new Mongo.Collection('trf_issues');

stories = new SimpleSchema ({
  title: {
    type: String,
    label: "Title"
  },
  author: {
    type: String,
    label: "Author"
  },
  cf_num: {
    type: String,
    label: "CaseFile Number"
  },
  wordCount: {
    type: Number,
    label: "Word Count"
  }
}),

TrfIssues.attachSchema(new SimpleSchema({
  vol: {
    type: String,
    label: "Vol."
  },
  num: {
    type: String,
    label: "Num."
  },
  pubDate: {
    type: Date,
    label: "Pub Date"
  },
  storyList: {
    type: [stories],
    label: "Story List"
  }
}));

if (Meteor.isServer) {
  TrfIssues.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
