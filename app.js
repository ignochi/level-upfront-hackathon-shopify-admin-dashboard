"use strict";

function closeSelectPlan() {
    const closeSelectPlanBtn = document.querySelector("[data-closeSelectPlanBtn]");
    const selectPlan = document.querySelector("[data-selectPlan]");
    const selectPlanButton = document.querySelector("[data-selectPlanButton]");

    closeSelectPlanBtn.addEventListener("click", () => {
        selectPlan.classList.add("closeSelectPlanClass");

        closeSelectPlanBtn.ariaHidden = "true";
        closeSelectPlanBtn.setAttribute("tabindex", "-1");
        selectPlanButton.ariaHidden = "true";
        selectPlanButton.setAttribute("tabindex", "-1");
    });
}
closeSelectPlan();

function handleNotificationBtnMenu() {
    const notificationBtn = document.querySelector("[data-notificationBtn]");
    const menu = document.querySelector("[data-notificationBtnMenu]");
    const menuItems = document.querySelectorAll("[data-notificationBtnMenu] [role = 'menuitem']");

    function handleHomeAndEndButtonKeypressWhenMenuIsOpen() {
        const length = menuItems.length;
        const isFirstMenuItem = menuItems.item(0);
        const isLastMenuItem = menuItems.item(length - 1);
        menuItems.forEach((eachMenuItem) => {
            eachMenuItem.addEventListener("keyup", function (event) {
                if (event.key === "Home") {
                    isFirstMenuItem.focus();
                } else if (event.key === "End") {
                    isLastMenuItem.focus();
                }
            });
        });
    }

    function handleArrowRightAndArrowDownKeypressWhenMenuIsOpen() {
        menuItems.forEach((eachMenuItem, index) => {
            const isLastMenuItem = index === menuItems.length - 1;

            eachMenuItem.addEventListener("keyup", function (event) {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    if (isLastMenuItem) {
                        menuItems[0].focus();
                    } else {
                        menuItems.item(index + 1).focus();
                    }
                }
            });
        });
    }

    function handleArrowUpAndArrowLeftKeypressWhenMenuIsOpen() {
        menuItems.forEach((eachMenuItem, index) => {
            const isFirstMenuItem = index === 0;

            eachMenuItem.addEventListener("keyup", function (event) {
                if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                    if (isFirstMenuItem) {
                        menuItems[menuItems.length - 1].focus();
                    } else {
                        menuItems.item(index - 1).focus();
                    }
                }
            });
        });
    }

    function openMenu() {
        notificationBtn.attributes["aria-expanded"].value = "true";
        menuItems[0].focus();

        handleHomeAndEndButtonKeypressWhenMenuIsOpen();
        handleArrowRightAndArrowDownKeypressWhenMenuIsOpen();
        handleArrowUpAndArrowLeftKeypressWhenMenuIsOpen();
    }

    function closeMenu() {
        notificationBtn.attributes["aria-expanded"].value = "false";
        notificationBtn.focus();
    }

    function handleMenuEscapeKeypress(event) {
        if (event.key === "Escape") {
            toggleMenuDisplay();
        }
    }

    function toggleMenuDisplay() {
        menu.classList.toggle("displayNotificationBtnMenu");

        if (menu.classList.contains("displayNotificationBtnMenu")) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    function openMenuWhenArrowUpOrArrowDownIsPressed(event) {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            toggleMenuDisplay();
        }
    }

    notificationBtn.addEventListener("click", toggleMenuDisplay);
    notificationBtn.addEventListener("keyup", openMenuWhenArrowUpOrArrowDownIsPressed);
    menu.addEventListener("keyup", handleMenuEscapeKeypress);
}
handleNotificationBtnMenu();

function handleAccountBtnMenu() {
    const triggerBtn = document.querySelector("[data-accountBtn]");
    const menu = document.querySelector("[data-accountBtnMenu]");
    const menuItems = document.querySelectorAll("[data-accountBtnMenu] [role = 'menuitem']");

    function handleHomeAndEndButtonKeypressWhenMenuIsOpen() {
        const length = menuItems.length;
        const isFirstMenuItem = menuItems.item(0);
        const isLastMenuItem = menuItems.item(length - 1);
        menuItems.forEach((eachMenuItem) => {
            eachMenuItem.addEventListener("keyup", function (event) {
                if (event.key === "Home") {
                    isFirstMenuItem.focus();
                } else if (event.key === "End") {
                    isLastMenuItem.focus();
                }
            });
        });
    }

    function handleArrowRightAndArrowDownKeypressWhenMenuIsOpen() {
        menuItems.forEach((eachMenuItem, index) => {
            const isLastMenuItem = index === menuItems.length - 1;

            eachMenuItem.addEventListener("keyup", function (event) {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    if (isLastMenuItem) {
                        menuItems[0].focus();
                    } else {
                        menuItems.item(index + 1).focus();
                    }
                }
            });
        });
    }

    function handleArrowUpAndArrowLeftKeypressWhenMenuIsOpen() {
        menuItems.forEach((eachMenuItem, index) => {
            const isFirstMenuItem = index === 0;

            eachMenuItem.addEventListener("keyup", function (event) {
                if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                    if (isFirstMenuItem) {
                        menuItems[menuItems.length - 1].focus();
                    } else {
                        menuItems.item(index - 1).focus();
                    }
                }
            });
        });
    }

    function openMenu() {
        triggerBtn.attributes["aria-expanded"].value = "true";
        menuItems[0].focus();

        handleHomeAndEndButtonKeypressWhenMenuIsOpen();
        handleArrowRightAndArrowDownKeypressWhenMenuIsOpen();
        handleArrowUpAndArrowLeftKeypressWhenMenuIsOpen();
    }

    function closeMenu() {
        triggerBtn.attributes["aria-expanded"].value = "false";
        triggerBtn.focus();
    }

    function handleMenuEscapeKeypress(event) {
        if (event.key === "Escape") {
            toggleMenuDisplay();
        }
    }

    function toggleMenuDisplay() {
        menu.classList.toggle("displayAccountBtnMenu");

        if (menu.classList.contains("displayAccountBtnMenu")) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    function openMenuWhenArrowUpOrArrowDownIsPressed(event) {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            toggleMenuDisplay();
        }
    }

    triggerBtn.addEventListener("click", toggleMenuDisplay);
    triggerBtn.addEventListener("keyup", openMenuWhenArrowUpOrArrowDownIsPressed);
    menu.addEventListener("keyup", handleMenuEscapeKeypress);
}
handleAccountBtnMenu();

function checkboxSectionCollapseAndExpand() {
    const button = document.querySelector("[data-checkboxSectionCollapseAndExpandBtn]");
    const checkboxSection = document.querySelector("[data-checkboxSection]");
    const icon = document.querySelectorAll("[data-checkboxSectionCollapseAndExpandBIcon]");

    button.addEventListener("click", () => {
        checkboxSection.classList.toggle("checkboxSectionCollapseAndExpandClass");

        if (icon[0].classList.contains("displayCheckboxSectionCollapseAndExpandBIcon")) {
            icon[0].classList.remove("displayCheckboxSectionCollapseAndExpandBIcon");
            icon[1].classList.add("displayCheckboxSectionCollapseAndExpandBIcon");

            button.ariaLabel = "collapse setup guide section";
        } else {
            icon[1].classList.remove("displayCheckboxSectionCollapseAndExpandBIcon");
            icon[0].classList.add("displayCheckboxSectionCollapseAndExpandBIcon");

            button.ariaLabel = "expand setup guide section";
        }
    });
}
checkboxSectionCollapseAndExpand();

function handleCheckboxClick() {
    const button = document.querySelectorAll("[data-checkButton]");
    const hiddenClass = "classToHideCheckboxSvg";
    const markAsDoneClass = "markAsDone";

    const progressText = document.querySelector("[data-progressText]");
    const progressValue = document.querySelector("[data-progressValue]");
    let num = 0;

    function markAsDone(clickedButton) {
        const notCompletedIcon = clickedButton.querySelector("[data-notCompletedIcon]");
        const loadingSpinnerIcon = clickedButton.querySelector("[data-loadingSpinnerIcon]");
        const completedIcon = clickedButton.querySelector("[data-completedIcon]");

        notCompletedIcon.classList.add(hiddenClass);
        loadingSpinnerIcon.classList.remove(hiddenClass);

        setTimeout(() => {
            loadingSpinnerIcon.classList.add(hiddenClass);
            completedIcon.classList.remove(hiddenClass);

            clickedButton.classList.add(markAsDoneClass);

            // handle progress bar and progress text
            progressText.innerHTML = `${num += 1} / 5 completed`;
            progressValue.style.width = `${num * 20}%`;
        }, 3000);

        expandTheNextIncompleteOnboardingStep();

        // aria-label changes to as not done
    }

    function markAsNotDone(clickedButton) {
        const notCompletedIcon = clickedButton.querySelector("[data-notCompletedIcon]");
        const loadingSpinnerIcon = clickedButton.querySelector("[data-loadingSpinnerIcon]");
        const completedIcon = clickedButton.querySelector("[data-completedIcon]");

        clickedButton.classList.remove(markAsDoneClass);

        completedIcon.classList.add(hiddenClass);
        loadingSpinnerIcon.classList.remove(hiddenClass);

        setTimeout(() => {
            loadingSpinnerIcon.classList.add(hiddenClass);
            notCompletedIcon.classList.remove(hiddenClass);

            // handle progress bar and progress text
            progressText.innerHTML = `${num -= 1} / 5 completed`;
            progressValue.style.width = `${num * 20}%`;
        }, 3000);

        // aria-label changes to as done
        // clickedButton.ariaLabel =
        // clickedButton.ariaLabel.replace("as not done", "as done");
    }

    function expandTheNextIncompleteOnboardingStep() {
        const unmarkedCheckbox = document.querySelectorAll("[data-notCompletedIcon]:not(.classToHideCheckboxSvg)");
        const unmarkedCheckboxArr = [...unmarkedCheckbox];
        const firstUnmarkedCheckbox = unmarkedCheckboxArr[0];
        const firstIncompleteStep = (unmarkedCheckboxArr.length > 0)?
            firstUnmarkedCheckbox.closest("[data-onboarding-step]") : null;
        const onboardingSteps = document.querySelectorAll("[data-onboarding-step]");
        const onboardingStepsArr = [...onboardingSteps];
        const index = onboardingStepsArr.indexOf(firstIncompleteStep);

        if (unmarkedCheckboxArr.length === 0) {
            collapseOnboardingStep();
        } else {
            collapseOnboardingStep();
            expandOnboardingStep(index);
        }
    }

    function handleMarkAsDoneOrNotDoneWhenMouseClicked() {
        button.forEach((clickedButton) => {
            clickedButton.addEventListener("mouseup", () => {
                if (clickedButton.classList.contains(markAsDoneClass)) {
                    markAsNotDone(clickedButton);
                } else {
                    markAsDone(clickedButton);
                }
            });
        });
    }
    handleMarkAsDoneOrNotDoneWhenMouseClicked();

    function handleMarkAsDoneOrNotDoneWhenEnterKeyIsPressed() {
        button.forEach((clickedButton) => {
            clickedButton.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    if (clickedButton.classList.contains(markAsDoneClass)) {
                        markAsNotDone(clickedButton);
                    } else {
                        markAsDone(clickedButton);
                    }
                }
            });
        });
    }
    handleMarkAsDoneOrNotDoneWhenEnterKeyIsPressed();
}
handleCheckboxClick();

function collapseOnboardingStep() {
    const onboardingSteps = document.querySelectorAll("[data-onboarding-step]");
    const hiddenElementsAcrossAllOnboardingSteps =
        document.querySelectorAll("[data-displayOnCheckboxSectionItemClick]");
    const hideElementsClass = "displayOnCheckboxSectionItemClick";
    const gapClass = "gapAddedWithJsClass";
    const grayBackgroundClass = "checkboxSectionItemGrayBackgroundColour";

    hiddenElementsAcrossAllOnboardingSteps.forEach((eachHiddenElement) => {
        if (!(eachHiddenElement.classList.contains(hideElementsClass))) {
            eachHiddenElement.classList.add(hideElementsClass);
            eachHiddenElement.parentNode.classList.remove(gapClass);
        }
    });

    onboardingSteps.forEach((eachOnboardingStep) => {
        eachOnboardingStep.classList.remove(grayBackgroundClass);
    });
}

function expandOnboardingStep(indexOfOnboardingStepToExpand) {
    const onboardingSteps = document.querySelectorAll("[data-onboarding-step]");
    const hiddenElements =
        onboardingSteps[indexOfOnboardingStepToExpand].
            querySelectorAll("[data-displayOnCheckboxSectionItemClick]");
    const hideElementsClass = "displayOnCheckboxSectionItemClick";
    const gapClass = "gapAddedWithJsClass";
    const grayBackgroundClass = "checkboxSectionItemGrayBackgroundColour";
    const checkboxActionSection = onboardingSteps[indexOfOnboardingStepToExpand].
        querySelector("[data-checkboxActionSection]");

    hiddenElements.forEach((eachHiddenElement) => {
        eachHiddenElement.classList.remove(hideElementsClass);
    });
    checkboxActionSection.classList.add(gapClass);
    onboardingSteps[indexOfOnboardingStepToExpand].classList.add(grayBackgroundClass);
}

function handleOnboardingStepsCollapseAndExpandOnClick() {
    const onboardingSteps = document.querySelectorAll("[data-onboarding-step]");
    const onboardingStepsArr = [...onboardingSteps];

    onboardingSteps.forEach((eachOnboardingStep) => {
        eachOnboardingStep.addEventListener("click", function (event) {
            let index = onboardingStepsArr.indexOf(event.currentTarget);
            const uncheckedCheckbox = eachOnboardingStep.querySelector("[data-notCompletedIcon]");

            if (event.target !== uncheckedCheckbox) {
                collapseOnboardingStep();
                expandOnboardingStep(index);
            }
        });
    });
}
handleOnboardingStepsCollapseAndExpandOnClick();

function handleOnboardingStepsCollapseAndExpandOnFocusAndBlur() {
    const onboardingSteps = document.querySelectorAll("[data-onboarding-step]");
    const onboardingStepsArr = [...onboardingSteps];

    onboardingSteps.forEach((eachOnboardingStep) => {
        eachOnboardingStep.addEventListener("focus", function (event) {
            let index = onboardingStepsArr.indexOf(event.currentTarget);
            const uncheckedCheckbox = eachOnboardingStep.querySelector("[data-notCompletedIcon]");

            if (event.target !== uncheckedCheckbox) {
                collapseOnboardingStep();
                expandOnboardingStep(index);
            }
        });
    });
}
handleOnboardingStepsCollapseAndExpandOnFocusAndBlur();