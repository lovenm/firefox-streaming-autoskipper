//
// Automatic skipping to next episode or on recaps on Disney+
//
// The selectors to find the buttons are just reverse engineered from the HTML
// inspector on the browser. Thus they can change at any time.
//

const selectors = [
  // The player can show a skip button to skip either the re-cap or skip to the
  // next episode. At the time of writing both of these can be found with the
  // same CSS selector.
  '.skip__button',
  // Instead of showing a skip button while the video is playing, the UI can
  // also switch to a post episode view, where the credits of the last episode
  // roll in a smaller window and it presents a short description of the next
  // one. And a button to skip to the next episode or to go back to the episode
  // list.
  '[aria-label*="NEXT EPISODE"]'
]

// We need to only check every few seconds. The buttons seem to have
// a visibility timeout, but this should be enough.
const timeoutMs = 2000

function scheduleChecker() {
  setTimeout(checkSkip, timeoutMs)
}

function checkSkip() {
  let skipButton = null;

  // Iterate through the known selectors to find any kind of known element
  // that skips the crap between episodes as fast as possible.
  for (const selector of selectors) {
    skipButton = document.querySelector(selector)

    if (skipButton) {
      // Click ze button and stop iterating if there's a hit.
      skipButton.click()
      break
    }
  }

  // Always schedule a new check, so the process keeps on going.
  scheduleChecker()
}

scheduleChecker()
