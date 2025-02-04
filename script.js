document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tweetButton").addEventListener("click", tweetMessage);
});

function tweetMessage() {
    const message = "Arlee GreenFlash\n#MarineBNK48\n#GreenFlashConceptDay3";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}
