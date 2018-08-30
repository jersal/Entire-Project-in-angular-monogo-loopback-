'use strict';

module.exports = function(Work) {
    Work.getWork = function(req, callback) {
       if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        Work.findOne({where: {userId : req.params.id}}, function(err, getWorkDetails){
          if (err) return callback.status(401).send(err);
            console.log(getWorkDetails);
            callback(null, getWorkDetails);
        })
    };

      Work.remoteMethod(
        'getWork',
        {
          http: { path: '/getWork/:id', verb: 'get' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: { type: 'object', root: true  }
        });


        Work.postWork = function(req, callback) {
        if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        req.body.userId = req.params.id;
        Work.upsertWithWhere({userId : req.params.id},req.body,function(err, postWorkDetails){
          if (err) return callback.status(401).send(err);
            console.log(postWorkDetails);
            callback(null, postWorkDetails);
        })
      };

       Work.remoteMethod(
        'postWork',
        {
          http: { path: '/postWork/:id', verb: 'post' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: { type: 'object', root: true  }
        });

};

