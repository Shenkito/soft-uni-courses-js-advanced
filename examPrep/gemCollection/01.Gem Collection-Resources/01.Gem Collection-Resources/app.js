window.addEventListener("load", solve);

function solve() {

    let gemstoneNameElement = document.getElementById('gem-name');
    let colorGemElement = document.getElementById('color');
    let caratsGemElement = document.getElementById('carats');
    let priceGemElement = document.getElementById('price');
    let typeGemElement = document.getElementById('type');
    let previewListElement = document.getElementById('preview-list');
    let collectionElement = document.getElementById('collection');


    let addGemButton = document.getElementById('add-btn');

    addGemButton.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();

        let gemstoneNameElementValue = gemstoneNameElement.value;
        let colorGemElementValue = colorGemElement.value;
        let caratsGemElementValue = caratsGemElement.value;
        let priceGemElementValue = priceGemElement.value;
        let typeGemElementValue = typeGemElement.value;

        if (gemstoneNameElementValue === "" || colorGemElementValue === "" || caratsGemElementValue === "" || priceGemElementValue === "" || typeGemElementValue === "") {
            return;
        }

        let newLiElement = document.createElement('li');
        newLiElement.classList = 'gem-info';
        let newArticleElement = document.createElement('article');

        let h4NewElement = document.createElement('h4');
        h4NewElement.textContent = gemstoneNameElementValue;

        let newP1ElementColor = document.createElement('p');
        newP1ElementColor.textContent = `Color: ${colorGemElementValue}`;

        let newP2ElementCarats = document.createElement('p');
        newP2ElementCarats.textContent = `Carats: ${caratsGemElementValue}`;

        let newP3ElementPrice = document.createElement('p');
        newP3ElementPrice.textContent = `Price: ${priceGemElementValue}`;

        let newP4ElementType = document.createElement('p');
        newP4ElementType.textContent = `Type: ${typeGemElementValue}`;

        let newSaveButton = document.createElement('button');
        newSaveButton.textContent = 'Save to Collection';
        newSaveButton.classList = 'save-btn';

        let newEditButton = document.createElement('button');
        newEditButton.textContent = 'Edit Information';
        newEditButton.classList = 'edit-btn';

        let newCancelButton = document.createElement('button');
        newCancelButton.textContent = 'Cancel';
        newCancelButton.classList = 'cancel-btn';

        newArticleElement.appendChild(h4NewElement);
        newArticleElement.appendChild(newP1ElementColor);
        newArticleElement.appendChild(newP2ElementCarats);
        newArticleElement.appendChild(newP3ElementPrice);
        newArticleElement.appendChild(newP4ElementType);

        newLiElement.appendChild(newArticleElement);
        newLiElement.appendChild(newSaveButton);
        newLiElement.appendChild(newEditButton);
        newLiElement.appendChild(newCancelButton);
        previewListElement.appendChild(newLiElement);

        gemstoneNameElement.value = '';
        colorGemElement.value = '';
        caratsGemElement.value = '';
        priceGemElement.value = '';
        typeGemElement.value = '';

        addGemButton.disabled = true;

        newEditButton.addEventListener('click', onClickEdit);
        newSaveButton.addEventListener('click', onClickSave);
        newCancelButton.addEventListener('click', onClickCancel);

    };

    function onClickEdit(e) {
        let liEditElement = e.target.parentElement;
        let gemNameParentElement = e.target.parentElement.children[0]; // ВРЪЩЯ МИ ARTICLE
        let gemNameValue = gemNameParentElement.children[0].textContent; // СЛЕД ARTICLE CHILDREN`a e името на камъка
        let gemColorValue = gemNameParentElement.children[1].textContent; // СЛЕД ТОВА ЦВЕТА
        let gemCaratsValue = gemNameParentElement.children[2].textContent; // СЛЕД ТОВА КАРАТИТЕ
        let gemPriceValue = gemNameParentElement.children[3].textContent; // СЛЕД ТОВА ЦЕНАТА
        let gemTypeValue = gemNameParentElement.children[4].textContent; // СЛЕД ТОВА ТИПА

        gemstoneNameElement.value = gemNameValue; // ПОПЪЛВАМ ПАК ПОЛЕТАТА , КАТО ТУК е ИМЕТО НА КАМЪКА
        colorGemElement.value = gemColorValue.substring(7); // като тук ползвам събстринг за да изтрия текста който е по default "Color: " 7те символа от надписа , и се попълва само с цвета
        caratsGemElement.value = gemCaratsValue.substring(8); // като тук ползвам събстринг за да изтрия текста който е по default "Carats: " 8те символа от надписа , и се попълва само с каратите
        priceGemElement.value = gemPriceValue.substring(8); // също
        typeGemElement.value = gemTypeValue.substring(6); // също

        liEditElement.remove();
        addGemButton.disabled = false;
    };

    function onClickSave(e) {

        let liSaveElement = e.target.parentElement.children[0]; // ВРЪША МИ ОТНОВО ARTICLE
        let gemName = liSaveElement.children[0].textContent;
        let gemColor = liSaveElement.children[1].textContent.substring(7);
        let gemCarats = liSaveElement.children[2].textContent.substring(8);
        let gemPrice = liSaveElement.children[3].textContent.substring(7);
        let gemType = liSaveElement.children[4].textContent.substring(6);

        let newLiElement = document.createElement('li');
        let newPElement = document.createElement('p');
        newPElement.className = 'collection-item';

        newPElement.textContent = `${gemName} - Color: ${gemColor}/ Carats: ${gemCarats}/ Price: ${gemPrice}/ Type: ${gemType}`;
        newLiElement.appendChild(newPElement);
        collectionElement.appendChild(newLiElement);

        let preview = e.target.parentElement;
        preview.remove();
        addGemButton.disabled = false;
    };

    function onClickCancel(e) {
        let cancelElementLi = e.target.parentElement;
        cancelElementLi.remove();
        addGemButton.disabled = false;
    };

};