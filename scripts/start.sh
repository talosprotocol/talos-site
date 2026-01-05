#!/usr/bin/env bash
# =============================================================================
# Talos Site - Start Script
# =============================================================================

if [ -f "package.json" ]; then
    echo "Starting talos-site..."
    npm run dev
else
    echo "talos-site not initialized (source-only). Skipping start."
    exit 0
fi
