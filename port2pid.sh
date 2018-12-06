#!/usr/bin/env bash
# Finds PIDs having open port 8080, or open port passed as arg $1
export PORT=${1:-3000}

echo PIDs having open  port $PORT
lsof -i tcp:$PORT
