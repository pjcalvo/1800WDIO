var request = require('request')

var username = 'awan@1800contacts.com';
var authkey = 'u0e2547396b64173';

class CBT_Helper {
    public setDescription(sessionid, name){

        var result = {error:false, message: null}

        request({
            method:'PUT',
            uri: 'https://crossbrowsertesting.com/api/v3/selenium/' + sessionid,
            body: {
               'action':'set_description', 'description':name     
            },
            json:true
        },
        function (error,response,body) {
            if (error){
                result.error = true;
                result.message = error;
            }
            else if (response.statusCode !== 200){
                result.error = true;
                result.message = body;
            }
            else{
                result.error = false;
                result.message = 'success';
            }
        })
        .auth (username, authkey);

        return result;
    }

    public setScrore(sessionid, testResult){

        if (testResult == 'passed')
            testResult = 'pass';
        else if (testResult == 'failed')
            testResult = 'fail';
        else {
            testResult = 'unset';
        }

        var result = {error:false, message: null}

        request({
            method:'PUT',
            uri: 'https://crossbrowsertesting.com/api/v3/selenium/' + sessionid,
            body: {
               'action':'set_score', 'score':testResult     
            },
            json:true
        },
        function (error,response,body) {
            if (error){
                result.error = true;
                result.message = error;
            }
            else if (response.statusCode !== 200){
                result.error = true;
                result.message = body;
            }
            else{
                result.error = false;
                result.message = 'success';
            }
        })
        .auth (username, authkey);

        return result;
    }

    public getVideoInfo(sessionid){

        var result = {error:false, message: null, content:null}

        request({
            method:'GET',
            uri: 'https://crossbrowsertesting.com/api/v3/selenium/' + sessionid + '/videos?format=json'
        },
        function (error,response,body) {
            if (error){
                result.error = true;
                result.message = error;
            }
            else if (response.statusCode !== 200){
                result.error = true;
                result.message = body;
            }
            else{
                result.error = false;
                result.message = 'success';
                result.content = body;
            }
        })
        .auth (username, authkey);

        return result;
    }
}

const CBTHelper = new CBT_Helper()
export default CBTHelper