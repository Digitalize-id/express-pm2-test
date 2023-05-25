module.exports = {
  apps: [
    {
      // Name of app
      name: 'API',
      // Script for pm2 run forever
      // If use static website, remove it
      script: 'yarn dev',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/

      // Current directory on server
      cwd: '/home/iyansr/express-pm2-test',
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
        DATABASE_URL: 'mysql://lim0ifarso6lvbir37qr:pscale_pw_qEI7OaxLlzaeSOzuznlVlKwbF4bHBF4xIpEHwZlUk3z@aws.connect.psdb.cloud/digitalize-db?sslaccept=strict'
      },
    },
  ],

  deploy: {
    production: {
      user: 'iyansr',
      host: '103.175.216.123',
      ref: 'origin/main',
      repo: 'git@github.com:Digitalize-id/express-pm2-test.git',
      path: '/home/iyansr',
      'post-deploy': 'yarn && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
