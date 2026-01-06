#!/bin/bash
set -e

# ANSI colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Starting CI Verification Gates...${NC}"

# 1. Validate Claims (Static Check)
echo -e "\n${GREEN}[1/3] Verifying Claims Accuracy...${NC}"
npm run validate:claims

# 2. Build the site (Ensures no compile errors)
echo -e "\n${GREEN}[2/3] Building Site...${NC}"
npm run build

# 3. Start server and run dynamic checks
echo -e "\n${GREEN}[3/3] Running Smoke Tests and Link Checker...${NC}"

# Start server in background
npm start &
SERVER_PID=$!

# Wait for server to be ready
echo "Waiting for server to start on port 3000..."
./scripts/wait-for-localhost.sh 3000

# Run checks
if npm run test:routes && npm run check:links > link-check.log 2>&1; then
    echo -e "${GREEN}✅ All Gates Passed.${NC}"
    kill $SERVER_PID
    rm link-check.log
    exit 0
else
    echo -e "${RED}❌ Gates Failed.${NC}"
    echo "Link Check Log:"
    cat link-check.log
    kill $SERVER_PID
    exit 1
fi
