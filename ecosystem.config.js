module.exports = {
  apps: [{
    script: 'npm run start',
  }],

  deploy: {
    production: {
      user: 'root',
      host: '161.35.164.201',
      ref: 'origin/main',
      repo: 'git@bitbucket.org:monhna/noon-affiliate-next.git',
      path: '/root',
      'pre-deploy-local': '',
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      'pre-setup': ''
    }
  }
};
