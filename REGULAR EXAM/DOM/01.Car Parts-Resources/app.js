window.addEventListener('load', solve);

function solve() {
        let carModelElement = document.getElementById("car-model");
        let carYearElement = document.getElementById("car-year");
        let partNameElement = document.getElementById("part-name");
        let partNumberElement = document.getElementById("part-number");
        let conditionElement = document.getElementById("condition");

        let buttonNextElement = document.getElementById("next-btn");
        buttonNextElement.addEventListener("click", onClickNext);

        let partInfoElement = document.querySelector(".info-list");

        function onClickNext(e) {
                e.preventDefault();

                let carModelInputValue = carModelElement.value;
                let carYearInputValue = carYearElement.value;
                let partNameInputValue = partNameElement.value;
                let partNumberInputValue = partNumberElement.value;
                let conditionInputValue = conditionElement.value;

                if (
                        carModelInputValue === "" ||
                        carYearInputValue === "" ||
                        carYearInputValue < 1980 ||
                        carYearInputValue > 2023 ||
                        partNameInputValue === "" ||
                        partNumberInputValue === "" ||
                        conditionInputValue === ""
                ) {
                        return;
                }

                let newLiElement = document.createElement("li");
                newLiElement.classList = "part-content";
                let newArticleElement = document.createElement("article");

                let p1 = document.createElement("p");
                p1.textContent = `Car Model: ${carModelInputValue}`;

                let p2 = document.createElement("p");
                p2.textContent = `Car Year: ${carYearInputValue}`;

                let p3 = document.createElement("p");
                p3.textContent = `Part Name: ${partNameInputValue}`;

                let p4 = document.createElement("p");
                p4.textContent = `Part Number: ${partNumberInputValue}`;

                let p5 = document.createElement("p");
                p5.textContent = `Condition: ${conditionInputValue}`;

                let editButtonElement = document.createElement("button");
                editButtonElement.textContent = "Edit";
                editButtonElement.classList = "edit-btn";

                let continueButtonElement = document.createElement("button");
                continueButtonElement.textContent = "Continue";
                continueButtonElement.classList = "continue-btn";

                newArticleElement.appendChild(p1);
                newArticleElement.appendChild(p2);
                newArticleElement.appendChild(p3);
                newArticleElement.appendChild(p4);
                newArticleElement.appendChild(p5);

                newLiElement.appendChild(newArticleElement);
                newLiElement.appendChild(editButtonElement);
                newLiElement.appendChild(continueButtonElement);

                partInfoElement.appendChild(newLiElement);

                carModelElement.value = "";
                carYearElement.value = "";
                partNameElement.value = "";
                partNumberElement.value = "";
                conditionElement.value = "";

                let completeImgElement = document.getElementById("complete-img");
                completeImgElement.style.visibility = "hidden";

                let completeTextElement = document.getElementById("complete-text");
                completeTextElement.textContent = "";

                buttonNextElement.disabled = true;

                editButtonElement.addEventListener("click", onClickEdit);
                continueButtonElement.addEventListener("click", onClickContinue);
        }

        function onClickEdit(e) {

                let parentLi = this.parentElement;
                let carModel = parentLi.querySelector("p:nth-of-type(1)").textContent;
                let carYear = parentLi.querySelector("p:nth-of-type(2)").textContent;
                let partName = parentLi.querySelector("p:nth-of-type(3)").textContent;
                let partNumber = parentLi.querySelector("p:nth-of-type(4)").textContent;
                let condition = parentLi.querySelector("p:nth-of-type(5)").textContent;

                carModelElement.value = carModel.replace("Car Model: ", "");
                carYearElement.value = carYear.replace("Car Year: ", "");
                partNameElement.value = partName.replace("Part Name: ", "");
                partNumberElement.value = partNumber.replace("Part Number: ", "");
                conditionElement.value = condition.replace("Condition: ", "");

                buttonNextElement.disabled = false;
                parentLi.remove();
        }

        function onClickContinue(e) {
                let currElement = e.target.parentElement;
                currElement.remove();

                let confirmListElement = document.querySelector(".confirm-list");
                confirmListElement.appendChild(currElement);

                let editButtonElement = currElement.querySelector(".edit-btn");
                let continueButtonElement = currElement.querySelector(".continue-btn");
                editButtonElement.remove();
                continueButtonElement.remove();

                let confirmButtonElement = document.createElement("button");
                confirmButtonElement.textContent = "Confirm";
                confirmButtonElement.classList = "confirm-btn";

                let cancelButtonElement = document.createElement("button");
                cancelButtonElement.textContent = "Cancel";
                cancelButtonElement.classList = "cancel-btn";

                currElement.appendChild(confirmButtonElement);
                currElement.appendChild(cancelButtonElement);

                confirmButtonElement.addEventListener("click", onClickConfirm);
                cancelButtonElement.addEventListener("click", onClickCancel);
        }

        function onClickConfirm(e) {
                let listItemElement = e.target.parentElement;
                listItemElement.remove();

                let nextButtonElement = document.getElementById("next-btn");
                nextButtonElement.disabled = false;

                let completeImgElement = document.getElementById("complete-img");
                completeImgElement.style.visibility = "visible";

                let completeTextElement = document.getElementById("complete-text");
                completeTextElement.textContent = "Part is Ordered!";
        }


        function onClickCancel(e) {
                let listItemElement = e.target.parentElement;
                listItemElement.remove();

                let nextButtonElement = document.getElementById("next-btn");
                nextButtonElement.disabled = false;
        }

}