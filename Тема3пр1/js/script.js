(() => {
    'use strict'

    const form = document.getElementById('adoptForm')
    if (!form) return

    form.addEventListener('submit', event => {
        event.preventDefault()

        if (!form.checkValidity()) {
            form.classList.add('was-validated')
            return
        }

        alert('Спасибо! Ваша заявка отправлена.')
        form.reset()
        form.classList.remove('was-validated')
    })
})()