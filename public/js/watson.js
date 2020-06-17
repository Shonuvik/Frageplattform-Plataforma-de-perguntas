const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: '{gwbOxcXWQQvbPaj7n36AqsM3NAlceMYt_oIa--2GK_6i}',
  }),
  url: '{https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/5c08144b-6d77-4fcb-87d2-11484f7e0cdb}',
});

const getVoiceParams = {
  voice: 'en-US_AllisonV3Voice',
};

textToSpeech.getVoice(getVoiceParams)
  .then(voice => {
    console.log(JSON.stringify(voice, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

function textToSpeech(text) {
  console.log(text);
    text = '<express-as type="GoodNews">'+text+'</express-as>';
  text = encodeURIComponent(text);
  console.log(text);
  $.ajax({
    method: 'GET',
    url: '/api/synthesize?voice=en-US_AllisonVoice&download=true&text='+text,

    dataType: 'native',
    xhrFields: {
      responseType: 'blob'
    },
    success: function(blob) {
      var url = (URL || webkitURL).createObjectURL(blob);
      $('#audio').attr('src', url);
      $('#audio').attr('type', 'audio/ogg;codecs=opus');
    }
  })
} 