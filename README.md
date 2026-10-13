# patchverdict-boolean-condition

A small intentionally buggy JavaScript repository used to test PatchVerdict's real repository verification flow.

## Run

```bash
npm install
npm test
```

## Bug description

Copy this into PatchVerdict:

```text
The eligibility utility incorrectly accepts users who satisfy only one required condition. A user should be considered eligible only when they are active and their age meets the minimum requirement, while all other cases should remain ineligible.
```
