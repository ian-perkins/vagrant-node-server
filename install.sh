sudo apt-get update

# Tools
sudo apt-get install -y vim curl
sudo apt-get install -y git-core
sudo apt-get update

# MongoDB
# Note - to install Node.js driver, close and then re-open ssh and:
#  sudo npm install -g mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# NVM (use this to manage Node releases)
su vagrant -c 'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash'

# Node
su vagrant -c '. /home/vagrant/.nvm/nvm.sh && nvm install node'

echo 'Finished setting up Vagrant box'
