# ember-cli-deploy-navis-pack

An ember-cli-deploy plugin pack for deploying to Navis.io.

Installs everything you need to get started deploying.

### Setup

From the root of your ember application's repository:

```shell
ember install ember-cli-deploy@beta
ember install git+ssh://github.com/AgilionApps/ember-cli-deploy-navis-pack.git
```

This installs the following plugins:

* ember-deploy-navis
* ember-cli-deploy-build
* ember-cli-deploy-revision-data
* ember-cli-deploy-display-revisions

### Deploy Config

To deploy you will need two pieces of information from Navis:

1. Your Navis.io `appKey`. This is available on the view application screen.
   The `appKey` is unique per application, per environment.
2. Your Navis.io deploy credentials, the `userKey` and `userSecret`. These
   are available on your profile page. Your user credentials are used for all 
   Navis apps.

You will typically want to export your user credentials as environmental vars.

In `~/.zshrc` or `~/.bashrc` (or similar):

```shell
### Navis creds
export NAVIS_USER_KEY="<your-navis-deploy-key>"
export NAVIS_USER_SECRET="<your-navis-deploy-secret>"
```

Now edit the `config/deploy.js` that was generated during install to add your 
`appKey`.

#### Navis Asset Hosting

By default ember-deploy-navis will upload your assets to the navis asset host.
You can disable this behaviour by setting `uploadAssets` to `false`.

To take advantage of the assets you must prepend your navis asset host 
path onto asset URLs. Add the following to `ember-cli-build.js` or 
`Brocfile.js`: 

```javascript
var app = new EmberApp({
  fingerprint: {
    prepend: '//cdn.navis.io/<your app_key>/'
  }
});
```

You are now ready to deploy!

### Usage

Available commands:

* `ember deploy:list` to see the list of existing builds
* `ember deploy` to deploy your application for development
* `ember deploy --environment production` to deploy your application for production
* `ember deploy:activate --revision <VERSION>` to activate a specific revision

