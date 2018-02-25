const functions = require('firebase-functions');

const Config = require('multivocal/lib/config-simple')({
  Local: {
    und: {
      Response: {
        Default: [
          {
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
            },
            ShouldClose: false
          },
          "Hello World",
          "Hi World",
          {
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
          },
          "What up, World?"
        ]
      }
    }
  }
});

const Multivocal = require('multivocal');
Multivocal.setConfig( Config );

exports.webhook = functions.https.onRequest( (req,res) => {
    Multivocal.process( req, res );
});
