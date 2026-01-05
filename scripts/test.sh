#!/usr/bin/env bash
# =============================================================================
# Talos Site - Test Script
# =============================================================================

if [ -f "package.json" ]; then
    echo "Running tests for talos-site..."
    npm test
else
    echo "talos-site not initialized. Skipping tests."
    exit 0
fi
