//
// Automatic skipping to next episode or on recaps on Disney+
//

// This is the CSS class used at the time of writing, it might change,
// or it might not. I dont really care, if it does I'll fix it.
const skipButtonSelector = ".skip__button"

// We need to only check every few seconds. The buttons seem to have
// a visibility timeout, but this should be enough.
const timeoutMs = 2000

function scheduleChecker() {
  setTimeout(checkSkip, timeoutMs)
}

function checkSkip() {
  const selector = document.querySelector(skipButtonSelector)

  if (selector !== null) {
    selector.click()
  }

  scheduleChecker()
}

scheduleChecker()
