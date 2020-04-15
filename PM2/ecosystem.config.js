module.exports = {
  apps : [{
    name: 'Check',
    script: 'index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      PORT:3000,
      NODE_ENV: 'development'
    },
    env_production: {
      PORT:80,
      NODE_ENV: 'production'
    }
  }],
};
