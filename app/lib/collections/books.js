Books = new Mongo.Collection('books');

pubStats = new SimpleSchema({
  site: {
    type: Boolean,
    label: "Site"
  },
  s3: {
    type: Boolean,
    label: "AmazonS3"
  },
  theRedFile: {
    type: Boolean,
    label: "The Red File"
  },
  tmpStore: {
    type: Boolean,
    label: "TMP Store"
  },
  extStore: {
    type: Boolean,
    label: "External Store"
  },
});

illustration = new SimpleSchema({
  full: {
    type: Number,
    label: "Full"
    // link: url
  },
  spot: {
    type: Number,
    label: "Spot",
    defaultValue: 0
    // link: url
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
    optional: true,
    // allowedValues: ['Public Domain', 'Copyrighted'],
    autoform: {
      type: "select-radio-inline",
      options: [
        {label: "Copyrighted", value: "Copyrighted"},
        {label: "Public Domain", value: "Public Domain"}
      ]
    }
  },
  devStatus: {
    type: String,
    label: "Dev Status",
    optional: true,
    // allowedValues: ['Raw', 'Edit', 'Layout', 'Output', 'Flightcheck', 'Published']
  },
  pubStatus: {
    type: pubStats,
    label: "Publication Status",
    optional: true
    // defaultValue: "blue"
  },
  trf: {
    type: String,
    label: "The Red File",
    defaultValue: "NA"
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
