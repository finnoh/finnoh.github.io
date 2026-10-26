## Context
ContactLinks.astro renders the homepage supervisor row.

## Goals / Non-Goals
Add the requested workshop link below that row. No other layout or navigation changes.

## Decisions
Reuse Link with external and the existing mt-3 text-sm paragraph styling. No unit test framework exists; this static markup change is verified through the production build and browser inspection rather than a source-text test.

## Risks / Trade-offs
The external destination is maintained separately.
