#! /bin/sh

if [ "$NODE_ENV" != "production" ]
then
    echo "We're not building the app since NODE_ENV is not production ! 🎉"
    exit 0
fi

echo "Hold onto your CPU, we're building the app after install !! All aboard the webpack train 🚂 "

npm run build
