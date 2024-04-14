function search() {
    document.getElementById('searchInput').value = null
}
function gotoIndex() {
    window.location.href = "index.html"
}
function gotoSupplier() {
    window.location.href = "suppliers.html"
}
function gotoTutorials() {
    window.location.href = "tutorials.html"
}
function gotoSafetyGuidelines() {
    window.location.href = "safety_guidelines.html"
}
function replyVisiblityAction(size) {
    const elements = document.querySelectorAll('.user-post-replies');
    var replyButton

    if(size == 'big') {
        replyButton = document.getElementById('reply-button-big')
    } else {
        replyButton = document.getElementById('reply-button-medandbelow')
    }

    if(replyButton.innerHTML == "View replies") {
        elements.forEach(element => {
            element.classList.remove('d-none')
        })
        document.getElementById('reply-button-big').innerHTML = "Hide replies"
        document.getElementById('reply-button-medandbelow').innerHTML = "Hide replies"
    } else {
        elements.forEach(element => {
            element.classList.add('d-none');
        });
        document.getElementById('reply-button-big').innerHTML = "View replies"
        document.getElementById('reply-button-medandbelow').innerHTML = "View replies"
    }
}