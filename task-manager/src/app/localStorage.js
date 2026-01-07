export const loadState = () => {
    try{
        const findTask = localStorage.getItem('tasks');
        return findTask ? JSON.parse(findTask) : undefined;
    }
    catch(err){
        return undefined;
    }
}

export const saveState = (state) => {
    try{
        const saveTask = JSON.stringify(state);
        localStorage.setItem('tasks',saveTask);
    }
    catch(err){
        console.error("Save in Localstorage Failed", err);
    }
}