'use strict';

module.exports = function(Spouse) {
    Spouse.getSpouse = function(req, callback) {
        if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        Spouse.findOne({where: {userId : req.params.id}}, function(err, spouseDetails){
          if (err) return callback.status(401).send(err);
            console.log(spouseDetails);
            if(spouseDetails == null){
              spouseDetails = {}
            }
            callback(null, spouseDetails);
        })
    };

      Spouse.remoteMethod(
        'getSpouse',
        {
          http: { path: '/getSpouse/:id', verb: 'get' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: { type: 'object', root: true  }
        });


        Spouse.postSpouse = function(req, callback) {
        if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        req.body.userId = req.params.id;
        Spouse.upsertWithWhere({userId : req.params.id},req.body,function(err, postSpouseDetails){
          if (err) return callback.status(401).send(err);
            console.log(postSpouseDetails);
            callback(null, postSpouseDetails);
        })
      };

       Spouse.remoteMethod(
        'postSpouse',
        {
          http: { path: '/postSpouse/:id', verb: 'post' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: { type: 'object', root: true  }
        });
};
