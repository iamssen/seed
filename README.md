# Status

[![CircleCI](https://circleci.com/gh/iamssen/seed.svg?style=svg)](https://circleci.com/gh/iamssen/seed)
[![DeepScan grade](https://deepscan.io/api/teams/3270/projects/4810/branches/38446/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3270&pid=4810&bid=38446)

# Start development

```bash
npm start
```

# Build and git publish

```bash
npm run build
npm run git:publish
```

# NginX config sample

```bash
pm2 start /project/dist/app/server
```

Start Node.js server (with PM2) 

```
server {
  set $STATIC_FILES /{project-root}/dist/app/browser;
  set $SERVER_PORT 4100;

  listen       9100;
  server_name  localhost;

  # SSR proxy
  location / {
    proxy_redirect off;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header Connection "";
    proxy_http_version 1.1;

    proxy_pass http://127.0.0.1:$SERVER_PORT;
  }

  # Static files
  location ~ ^/(.*)\.(.*)$ {
    root $STATIC_FILES;
    autoindex off;
    expires off;
  }
}
```

Add NginX server config