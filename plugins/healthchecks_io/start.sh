#!/bin/bash

if [[ -n "$HEALTHCHECKS_IO_CHECK_KEY" ]]; then
  while true
   do
     curl -m 10 --retry 5 https://hc-ping.com/${HEALTHCHECKS_IO_CHECK_KEY}
     sleep 60
   done
fi

echo "Healthchecks.io is disabled, exiting..."
exit 0
