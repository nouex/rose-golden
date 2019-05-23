#!/bin/bash
cd $(dirname $0)

set -e
dropdb housing 2>/dev/null || true
createdb housing
psql -1Xv ON_ERROR_STOP=1 -f dump.sql housing

echo "✅ DB reset"
