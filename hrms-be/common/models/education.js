'use strict';

module.exports = function(Education) {
    Education.getEducation = function(req, callback) {
        if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        Education.findOne({where: {userId : req.params.userId}}, function(err, getEducationDetails){
          if (err) return callback.status(401).send(err);
            console.log(getEducationDetails);
            callback(null, getEducationDetails);
        })
    };

      Education.remoteMethod(
        'getEducation',
        {
          http: { path: '/geteducation/:userId', verb: 'get' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: { type: 'object',root: true }
        });


      Education.postEducation = function(req, callback) {
        if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        req.body.userId = req.params.userId;
        console.log('im called');
        Education.upsertWithWhere({userId : req.params.userId},req.body,function(err, postEducationDetails){
          if (err) return callback.status(401).send(err);
            console.log(postEducationDetails);
            callback(null, postEducationDetails);
        })
      };

       Education.remoteMethod(
        'postEducation',
        {
          http: { path: '/postEducation/:userId', verb: 'post' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: { type: 'object', root: true }
        });
};
