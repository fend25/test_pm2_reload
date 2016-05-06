# test_pm2_reload

## installation
```bash
git clone git@github.com:fend25/test_pm2_reload.git
npm install
```

## starting pm2 tasks
```bash
cd test_pm2_reload
pm2 start deploy.js --name "deploy"
pm2 start main.js --name "main"
pm2 logs
```

## crash
in another terminal (and see logs in the same time):
```bash
curl localhost:3602
```
