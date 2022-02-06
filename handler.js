'use strict';

/* module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}; */
var aws = require('aws-sdk')
module.exports.hello = (event, context, callback) => {
  var params = {
    stateMachineArn: 'arn:aws:states:us-east-1:843017047552:stateMachine:newOne_amplify',
    input: JSON.stringify({ hell: 'asdasd' })
  }
  var stepfunctions = new aws.StepFunctions()
  stepfunctions.startExecution(params, function (err, data) {
    if (err) {
      console.log(err);
      const response = {
        statusCode: 500,
        body: JSON.stringify({ message: 'There was an error' })
      };
      callback(null, response);
    } else {
      console.log(data);
      const response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'Step function worked' })
      };
      callback(null, response);
    }
  })
}