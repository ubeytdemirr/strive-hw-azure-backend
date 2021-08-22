echo "killing all previous pm2 actions..."
sudo pm2 kill

echo "navigating to app folder..."
cd $1

echo "pulling repository from default branch..."
git pull

echo "cleaning previous dependencies..."
sudo rm -rf node_modules package-lock.json

echo "installing dependencies..."
sudo npm install


echo "testing app..."
sudo npm run test

echo "building app..."
sudo npm install

echo "starting app..."
sudo pm2 start app.json