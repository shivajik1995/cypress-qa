async function analyzeFailure(data) {

  let rootCause = "Unknown";

  if (data.error?.includes("never found")) {
    rootCause = "Incorrect locator or element absent";
  }

  if (data.error?.includes("not visible")) {
    rootCause = "Element exists but is hidden";
  }

  if (data.error?.includes("detached")) {
    rootCause = "Element re-rendered before interaction";
  }

  if (data.error?.includes("covered")) {
    rootCause = "Element blocked by overlay";
  }

  return `
# AI Failure Analysis

## Test
${data.testName}

## Root Cause
${rootCause}

## Error
${data.error}

## Screenshot
${data.screenshot || "Not Available"}

## Suggested Fix
Review selector and page state before interacting.
`;
}

module.exports = analyzeFailure;