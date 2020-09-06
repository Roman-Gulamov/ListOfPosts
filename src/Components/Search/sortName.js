import { sortRef } from '../../hooks/ref';

export const sortName = (event) => {
    const sort = sortRef.current;
    const inputValue = event.target.value;
    const iterableUsers = [...sort.children];

    if (inputValue !== '') {
        iterableUsers.forEach((child) => {
            const search = child.innerText.search(RegExp(inputValue, "gi"));
            return search === -1 ? child.style.display = "none" : child.style.display = "flex";
        });
    } else {
        iterableUsers.forEach((child) => {
            child.style.display = "flex";
        });
    }
}