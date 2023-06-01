import translate from '@iamtraction/google-translate';

translate("我爱你", { to: 'en' }).then(res => {
    console.log(res.text); // OUTPUT: You are amazing!
  }).catch(err => {
    console.error(err);
  });