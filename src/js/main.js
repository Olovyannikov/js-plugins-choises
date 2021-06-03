import Choices from "choices.js";

const defaultSelect = () => {
    const element = document.querySelector('.default');
    const choices = new Choices(element, {
        searchEnabled: true,
        searchResultLimit: 3,
        renderChoiceLimit: 3,
        itemSelectText: '',
        noResultsText: 'Ничего нет('
    });
}

defaultSelect();