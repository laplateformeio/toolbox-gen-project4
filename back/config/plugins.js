module.exports = ({ env }) => ({
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('SMTP_HOST', 'smtp.example.com'),
            port: env('SMTP_PORT', 587),
            secure: false,
            auth: {
              user: env('SMTP_USERNAME'),
              pass: env('SMTP_PASSWORD'),
            },
          },
          settings: {
            defaultFrom: env('SMTP_USERNAME'),
            defaultReplyTo: env('SMTP_USERNAME'),
          },
        },
      },
      upload: {

        config: {
          provider: 'strapi-provider-upload-minio-ce',
          providerOptions: {
            accessKey: env('MINIO_ACCESS_KEY', ''),
            secretKey: env('MINIO_SECRET_KEY', ''),
            bucket: env('MINIO_BUCKET', ''),
            endPoint: env('MINIO_ENDPOINT', ''),
            port: env('MINIO_PORT', ''),
            useSSL: env('MINIO_USE_SSL', ''),
            host: env('MINIO_HOST', ''),
            folder: env('MINIO_FOLDER', ''),
          },
        },
      },
      'strapi-plugin-sso': {
        enabled: true,
        config: {
          // Google
          GOOGLE_OAUTH_CLIENT_ID: '238825274188-6f7arln2tonkv77k7hkrkna85ghobqlp.apps.googleusercontent.com',
          GOOGLE_OAUTH_CLIENT_SECRET: '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',
          GOOGLE_OAUTH_REDIRECT_URI: 'https://17ba-37-26-187-6.ngrok-free.app/strapi-plugin-sso/google/callback', // URI after successful login
          GOOGLE_ALIAS: '', // Gmail Aliases
          GOOGLE_GSUITE_HD: '', // G Suite Primary Domain
        }
      }
  });
