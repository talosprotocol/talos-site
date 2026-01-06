#!/bin/bash
port=$1
max_retries=30
count=0

while ! nc -z localhost $port; do   
  sleep 1
  count=$((count+1))
  if [ $count -ge $max_retries ]; then
    echo "Timeout waiting for port $port"
    exit 1
  fi
done
echo "Port $port is ready!"
