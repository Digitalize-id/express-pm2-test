module.exports = {
  apps: [
    {
      // Name of app
      name: 'API',
      // Script for pm2 run forever
      // If use static website, remove it
      script: 'npm run dev',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/

      // Current directory on server
      cwd: '/home/iyansr/my-express/express-pm2-test',
      // Number of instances to be started in cluster mode
      instances: 1,
      // Enable or disable auto restart after process failure
      autorestart: true,
      // Enable or disable the watch mode
      watch: false,
      // Restart the app if an amount of memory is exceeded (format: /0-9?/ K for KB, ‘M’ for MB, ‘G’ for GB, default to B)
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'development',
      },
      // ^env_\S*$ => Specify environment variables to be injected when using –env
      env_production: {
        NODE_ENV: 'production',
        DATABASE_URL: process.env.DATABASE_URL,
        PRIVATE_KEY: process.env.PRIVATE_KEY,
      },
    },
  ],

  deploy: {
    production: {
      user: 'iyansr',
      host: '103.175.216.123',
      ref: 'origin/main',
      repo: 'git@github.com:Digitalize-id/express-pm2-test.git',
      path: '/home/iyansr/my-express',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
      key: '/Users/pintu/Iyan/Server/iyan.pem',
    },
  },
}
