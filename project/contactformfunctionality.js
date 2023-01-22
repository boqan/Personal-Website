
document.addEventListener('DOMContentLoaded', function(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwQ9I02eO6JBv7ETUVGC_NtBjbtOiyZq4gOJiYOqgGANHl9n6_63yXtqmRgmM9G9OCv/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
});
