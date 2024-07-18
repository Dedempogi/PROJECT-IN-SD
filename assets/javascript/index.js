function gotoDonation() {
    window.location.href = "donation.html"
}

function gotoComment() {
    window.location.href = "comment.html"
}

function gotoAbout() {
    window.location.href = "index.html"
}

function selectTab(tab) {
    document.querySelectorAll('.asdsd').forEach(element => {
        element.classList.remove('active');
    });
    tab.classList.add('active');
}

