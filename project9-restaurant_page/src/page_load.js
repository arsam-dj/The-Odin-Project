function page_load() {
    const container = document.querySelector('#content')
    let test_message = document.createElement('p')
    test_message.textContent = 'testing to see if this works'
    container.appendChild(test_message)
}

export {page_load}

