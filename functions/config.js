
var localUndResponseDefault = [
  {
    Base: {Set:true},
    ShouldClose: false
  },

  {Base:{Ref:"Config/Local/und/options/three"}},
  "Hello World",
  "Hi World",

  {Base:{Ref:"Config/Local/und/options/two"}},
  "What up, World?"
];

var options2 = {
  Base: {Set:true},
  Template: {
    Option: {
      Items: [
        {
          Title: "Yo one"
        },
        {
          Title: "Yo two"
        }
      ]
    }
  }
};

var options3 = {
  Base: {Set: true},
  Template: {
    Option: {
      SelectType: "list",
      Items: [
        {
          Title: "First Option",
          Body: "First Body"
        },
        {
          Title: "Second Option",
          Body: "Second Body"
        },
        {
          Title: "Third Option",
          Body: "You guessed it, third body"
        }
      ]
    }
  }
};

var conf = {
  Local: {
    und: {
      Response: {
        Default: localUndResponseDefault
      },
      options: {
        two:   options2,
        three: options3
      }
    }
  }
};


module.exports = require('multivocal/lib/config-simple')(conf);