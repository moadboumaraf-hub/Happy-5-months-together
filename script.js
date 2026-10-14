/* ========================================
   TWO DATES, ONE STORY
   Interactive memories
======================================== */

document.addEventListener("DOMContentLoaded", () => {
    const revealButton = document.getElementById("revealButton");
    const secondChapter = document.getElementById("secondChapter");
    const finalNote = document.getElementById("finalNote");

    // Make sure all required elements exist.
    if (!revealButton || !secondChapter || !finalNote) {
        console.error("Some page elements could not be found.");
        return;
    }

    let storyRevealed = false;

    // Smoothly scroll to an element.
    function scrollToElement(element, delay = 100) {
        window.setTimeout(() => {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, delay);
    }

    // Reveal the second memory and final message.
    revealButton.addEventListener("click", () => {
        if (storyRevealed) {
            finalNote.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            return;
        }

        storyRevealed = true;

        // Reveal the July 15 chapter.
        secondChapter.classList.remove("hidden");
        secondChapter.classList.add("revealed");
        secondChapter.setAttribute("aria-hidden", "false");

        // Update the button's accessible state.
        revealButton.setAttribute("aria-expanded", "true");
        revealButton.innerHTML = 'Continue to the final message <span aria-hidden="true">↓</span>';

        // Move gently to the newly revealed memory.
        scrollToElement(secondChapter, 250);

        // Reveal the final message after a short pause.
        window.setTimeout(() => {
            finalNote.classList.remove("hidden");
            finalNote.classList.add("revealed");
            finalNote.setAttribute("aria-hidden", "false");

            // Change the button into a way to revisit the ending.
            revealButton.innerHTML = 'Read Our Final Promise Again <span aria-hidden="true">♡</span>';

            // Scroll to the final message after it appears.
            scrollToElement(finalNote, 350);
        }, 1800);
    });
});