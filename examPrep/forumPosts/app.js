window.addEventListener("load", solve);

function solve() {

  let enterTitleElement = document.getElementById('post-title');

  let enterCategoryElement = document.getElementById('post-category');

  let addContentElement = document.getElementById('post-content');

  let publishButtonElement = document.getElementById('publish-btn');
  publishButtonElement.addEventListener('click', onClickPublish);

  let clearButtonElement = document.getElementById('clear-btn');
  clearButtonElement.addEventListener('click', onClickClear);

  let reviewListElement = document.getElementById('review-list');

  function onClickPublish(e) {
    e.preventDefault();

    let enterTitleValue = enterTitleElement.value;
    let enterCategoryValue = enterCategoryElement.value;
    let addContentValue = addContentElement.value;

    if (enterTitleValue === '' || enterCategoryValue === '' || addContentValue === '') {
      return;
    }

    let liElement = document.createElement('li');
    liElement.classList = 'rpost';

    let articleElement = document.createElement('article');

    let h4Element = document.createElement('h4');
    h4Element.textContent = enterTitleValue;

    let p1Element = document.createElement('p');
    p1Element.textContent = `Category: ${enterCategoryValue}`;

    let p2Element = document.createElement('p');
    p2Element.textContent = `Content: ${addContentValue}`;

    let editButton = document.createElement('button');
    editButton.textContent = 'EDIT';
    editButton.classList = 'action-btn edit';

    let approveButton = document.createElement('button');
    approveButton.textContent = 'Approve';
    approveButton.classList = 'action-btn approve';

    articleElement.appendChild(h4Element);
    articleElement.appendChild(p1Element);
    articleElement.appendChild(p2Element);

    liElement.appendChild(articleElement)
    liElement.appendChild(editButton);
    liElement.appendChild(approveButton);

    reviewListElement.appendChild(liElement)

    enterTitleElement.value = '';
    enterCategoryElement.value = '';
    addContentElement.value = '';

    editButton.addEventListener('click', onClickEdit);
    approveButton.addEventListener('click', onClickApprove)
  }

  function onClickEdit(e) {

    let currentLiElement = e.target.parentElement;
    currentLiElement.remove();

    let enterTitle = currentLiElement.querySelector('h4').textContent;
    let enterCategory = currentLiElement.querySelector('p:nth-of-type(1)').textContent;
    let addContent = currentLiElement.querySelector('p:nth-of-type(2)').textContent;

    enterTitleElement.value = enterTitle;
    enterCategoryElement.value = enterCategory.substring(10);
    addContentElement.value = addContent.substring(9);

    onClickPublish()
  }

  function onClickApprove(e) {
    let currLiElement = e.target.parentElement;
    currLiElement.remove();

    let publishedListElement = document.getElementById('published-list');
    publishedListElement.appendChild(currLiElement);

    let editBtn = currLiElement.querySelector('.edit');
    let approveBtn = currLiElement.querySelector('.approve');

    editBtn.remove();
    approveBtn.remove();
  }

  function onClickClear(e) {
    let currUlElement = e.target.parentElement;
    let currLiEl = currUlElement.querySelector('li');

    currLiEl.remove();
  }
}
