# HTTP Deploy Setup

This workflow builds the Hugo site on pushes to `main`, publishes the generated files to the `esa-pages` branch, then syncs the same `public/` directory to your server over SSH. It intentionally starts with HTTP only.

## 1. Prepare the server

Replace `deploy` and `/var/www/fixit` if you prefer different names.

```bash
sudo apt-get update
sudo apt-get install -y rsync
sudo adduser --disabled-password --gecos "" deploy
sudo mkdir -p /var/www/fixit
sudo chown -R deploy:deploy /var/www/fixit
sudo chmod 755 /var/www /var/www/fixit
```

Add the public key for your GitHub Actions deploy key to:

```bash
/home/deploy/.ssh/authorized_keys
```

The private key goes into GitHub as the `SSH_PRIVATE_KEY` secret.

## 2. Configure Nginx for HTTP

Create `/etc/nginx/sites-available/fixit.conf`:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name blog.sunisalex.org;
    root /var/www/fixit;
    index index.html;

    access_log /var/log/nginx/fixit.access.log;
    error_log /var/log/nginx/fixit.error.log;

    location / {
        try_files $uri $uri/ =404;
    }

    error_page 404 /404.html;

    location ~* \.(?:css|js|mjs|png|jpg|jpeg|gif|webp|svg|ico|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
        access_log off;
    }
}
```

Enable it:

```bash
sudo ln -s /etc/nginx/sites-available/fixit.conf /etc/nginx/sites-enabled/fixit.conf
sudo nginx -t
sudo systemctl reload nginx
```

Make sure DNS for `blog.sunisalex.org` points to this server, and port `80` is open in the firewall/security group.

## 3. Add GitHub settings

Repository secrets:

```text
SSH_HOST=your.server.ip.or.domain
SSH_USER=deploy
SSH_PORT=22
SSH_PRIVATE_KEY=the private deploy key
DEPLOY_PATH=/var/www/fixit
```

Repository variable:

```text
SITE_URL=http://blog.sunisalex.org/
```

After HTTP works, change `SITE_URL` to `https://blog.sunisalex.org/` and run certbot on the server.
