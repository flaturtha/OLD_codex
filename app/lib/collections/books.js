Books = new Mongo.Collection('books');

illustration = new SimpleSchema({
  full: {
    type: Number,
    label: "Full"
  },
  spot: {
    type: Number,
    label: "Spot",
    defaultValue: 0
  },
  caption: {
    type: String,
    label: "Caption",
    optional: true
  }
});

Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  subTitle: {
    type: String,
    label: "SubTitle",
    optional: true
  },
  author: {
    type: String,
    label: "Author",
    optional: true
  },
  series: {
    type: String,
    label: "Series",
    optional: true
  },
  o_pub: {
    type: String,
    label: "Original Publication",
    optional: true
  },
  o_pubDate: {
    type: String,
    label: "Original Publication Date",
    optional: true
  },
  subgenre: {
    type: String,
    label: "Subgenre",
    optional: true
  },
  category: {
    type: String,
    label: "Category", /* as in free-on-site vs premium vs sale; or quick-read vs novella, etc. */
    optional: true
  },
  wordCount: {
    type: Number,
    label: "Word Count",
    optional: true
  },
  illustrations: {
    type: illustration,
    label: "Illustrations",
    optional: true
  },
  keywords: {
    type: String,
    label: "Keywords",
    optional: true
  },
  excerpt: {
    type: String,
    label: "Excerpt",
    // min: 125,
    optional: true
  },
  pdStatus: {
    type: String,
    label: "Public Domain Status",
    autoform: {
      type: "select-radio-inline",
      options: [
        {label: "Copyrighted", value: "Copyrighted"},
        {label: "Public Domain", value: "Public Domain"}
      ]
    }
  },
  devStatus: {
    type: String, /* tie this to devStatus collection*/
    label: "Dev Status",
    defaultValue: "raw",
    optional: true
  },
  pubStatus: {
    type: String,
    label: "Publication Status",
    optional: true,
    defaultValue: "none"
  },
  pubType: {
    type: String,
    label: "Publication Type",
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function(){
      return new Date()
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function(){
      return new Date()
    },
  }
  // createdBy: {
  //   type: String,
  //   autoValue: function(){
  //     return this.userId;
  //   }
  // }
}));

if (Meteor.isServer) {
  Books.allow({
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
