module.exports = function(environment) {
  var DEPLOY = {
    'revision-data': {
      type: 'version-commit'
    },

    // Find your user credentials on your profile on navis.io.
    // Export them in your .bashrc, .zshrc, etc.
    'navis': {
      userKey:    process.env.NAVIS_USER_KEY;
      userSecret: process.env.NAVIS_USER_SECRET;
    }
  };

  // Find your app key on navis.io application settings.
  if (environment === 'staging') {
    DEPLOY['navis']['appKey'] = 'find me on navis.io';
  }

  // Find your app key on navis.io application settings.
  if (environment === 'production') {
    DEPLOY['navis']['appKey'] = 'find me on navis.io';
  }

  return DEPLOY;
};
