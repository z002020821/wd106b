window.onload = function () {
    window.onhashchange()
}

window.onhashchange = function () {
    let hash = window.location.hash.substring(1).toLocaleLowerCase()
    console.log('hash=', hash)
    ui.show(page[hash])
}