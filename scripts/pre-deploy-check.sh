#!/usr/bin/env bash
set -e

REPO_ROOT=$(git rev-parse --show-toplevel)
CNAME_FILE="$REPO_ROOT/CNAME"
EXPECTED_DOMAIN="blog.integ.life"

if [ ! -f "$CNAME_FILE" ]; then
  echo "✗ CNAME is missing. Expected ${EXPECTED_DOMAIN}."
  exit 1
fi

CURRENT_DOMAIN=$(tr -d '[:space:]' < "$CNAME_FILE")
if [ "$CURRENT_DOMAIN" != "$EXPECTED_DOMAIN" ]; then
  echo "✗ CNAME is ${CURRENT_DOMAIN}; expected ${EXPECTED_DOMAIN}."
  exit 1
fi

CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "⚠ Deploying from ${CURRENT_BRANCH}; expected main for production."
fi

echo "✓ Pre-deploy checks passed for ${EXPECTED_DOMAIN}"
