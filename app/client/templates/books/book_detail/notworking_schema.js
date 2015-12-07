// extracted from book.js in lib/collections
// 
// 
// devStatuses = new SimpleSchema({
//   raw: {
//     type: [String],
//     label: "Raw",
//     allowedValues: ['Basic Meta', 'Public Domain Verified', 'Scan Prepped', 'Ripped', 'SAVE AS "..-raw.rtf"'],
//     defaultValue: 'Basic Meta',
//     optional: true
//   },
//   edit: {
//     type: String,
//     label: "Edit",
//     allowedValues: ['Cleanup', 'Add Meta', 'Redpen', 'Edits', 'SAVE AS "..-ed.docx"'],
//     optional: true
//   },
//   layout: {
//     type: String,
//     label: "Layout",
//     allowedValues: ['Place .docx', 'Edits', 'Resources', 'SAVE AS "Casefile#.indd"'],
//     optional: true
//   },
//   output: {
//     type: String,
//     label: "Output",
//     allowedValues: ['ePub: "Casefile#(e).epub"', 'HTML: "Casefile#(h).html"', '.mobi: "Casefile#(k).mobi"'],
//     optional: true
//   },
//   flightcheck: {
//     type: String,
//     label: "Flightcheck",
//     allowedValues: ['Code Validation', 'Final Proofread', 'Device Check', 'Distributor Specs', 'Peer Review'],
//     optional: true
//   },
//   publication: {
//     type: String,
//     label: "Publication",
//     allowedValues: ['Markdown Conversion & Cleanup', 'Upload S3'],
//     optional: true
//   }
// });