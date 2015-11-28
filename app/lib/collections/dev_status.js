DevStatus = new Mongo.Collection('dev_status');

rawstatus = new SimpleSchema({
  initialstate: {
    type: String,
    label: "Initial State"
  },
  publicdomain: {
    type: Boolean,
    label: "Public Domain Status"
  },
  physical: {
    type: Boolean,
    label: "Physical"
  },
  scanned: {
    type: Boolean,
    label: "Scanned"
  },
  rawPDF: {
    type: Boolean,
    label: "RawPDF"
  },
  ripped: {
    type: Boolean,
    label: "Ripped"
  },
  collection: {
    type: String,
    label: "Collection"
  },
  finalstate: {
    type: String,
    label: "Final State"
  }
});



editstatus = new SimpleSchema({
  initialstate: {
    type: String,
    label: "Initial Status"
  },
  cleanup: {
    type: Boolean,
    label: "Cleanup"
  },
  addmeta: {
    type: Boolean,
    label: "Add Meta"
  },
  goodnotes: {
    type: Boolean,
    label: "GoodNotes"
  },
  redpen: {
    type: Boolean,
    label: "Redpen"
  },
  edits: {
    type: Boolean,
    label: "Edits"
  },
  finalstate: {
    type: String,
    label: "Final State"
  }
});

DevStatus.attachSchema(new SimpleSchema({
  raw: {
    type: [String],
    label: "Raw",
    allowedValues: ['Basic Meta', 'Public Domain Verified', 'Scan Prepped', 'Ripped', 'SAVE AS "..-raw.rtf"'],
    defaultValue: 'Basic Meta',
  },
  edit: {
    type: [editstatus],
    label: "Edit",
    allowedValues: ['Cleanup', 'Add Meta', 'Redpen', 'Edits', 'SAVE AS "..-ed.docx"']
  },
  layout: {
    type: String,
    label: "Layout",
    allowedValues: ['Place .docx', 'Edits', 'Resources', 'SAVE AS "Casefile#.indd"']
  },
  output: {
    type: String,
    label: "Output",
    allowedValues: ['ePub: "Casefile#(e).epub"', 'HTML: "Casefile#(h).html"', '.mobi: "Casefile#(k).mobi"']
  },
  flightcheck: {
    type: String,
    label: "Flightcheck",
    allowedValues: ['Code Validation', 'Final Proofread', 'Device Check', 'Distributor Specs', 'Peer Review']
  },
  publication: {
    type: String,
    label: "Publication",
    allowedValues: ['Markdown Conversion & Cleanup', 'Upload S3']
  },
}));


if (Meteor.isServer) {
  DevStatus.allow({
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

