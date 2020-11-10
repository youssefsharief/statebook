const saveStateMiddleware = store => next => action => {
    const toReturn =  next(action)
    window.postMessage({ from: "app", to: 'content_script', state: JSON.stringify(store.getState(), null, 2) }, "*");
    return toReturn
}

module.exports = {
    saveStateMiddleware
}
