
const sortName = (event, sortRef) => {
    const sort = sortRef.current;
    const inputValue = event.target.value;
    const iterableUsers = [...sort.children];

    if (inputValue !== '') {
        iterableUsers.forEach((child) => {
            return (
                child.innerText.indexOf(inputValue) === -1 ? 
                    child.style.display = "none" : 
                    child.style.display = "flex"
            );
        });
    } else {
        iterableUsers.forEach(child => child);
    }
}

export default sortName;