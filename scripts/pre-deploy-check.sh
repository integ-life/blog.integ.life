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

# Production must come from a clean, pushed main. ALLOW_UNSAFE_DEPLOY=1 downgrades these to warnings.
guard_fail() {
  if [ "${ALLOW_UNSAFE_DEPLOY:-}" = "1" ]; then
    echo "⚠ $1 (continuing: ALLOW_UNSAFE_DEPLOY=1)"
  else
    echo "✗ $1"
    exit 1
  fi
}

CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  guard_fail "Deploying from ${CURRENT_BRANCH}; expected main for production."
fi

if [ -n "$(git status --porcelain)" ]; then
  guard_fail "Working tree is not clean; commit or stash changes first."
fi

if git fetch --quiet origin main; then
  if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]; then
    guard_fail "HEAD is not origin/main; push (or pull) so GitHub stays the source of truth."
  fi
else
  guard_fail "Could not fetch origin/main to verify HEAD is pushed."
fi

echo "✓ Pre-deploy checks passed for ${EXPECTED_DOMAIN}"
