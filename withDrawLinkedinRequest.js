function withdraw() {
    arr = document.getElementsByClassName('artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary ember-view invitation-card__action-btn');
    arr[arr.length - 1].click();
		brr = document.getElementsByClassName('artdeco-modal__actionbar artdeco-modal__actionbar--confirm-dialog artdeco-modal__actionbar ember-view');
    brr[0].childNodes[3].click()
}

// removes from the end
