$(document).ready(() => {
  $('#delete').on('click', event => {
    event.preventDefault();
    var url = window.location.href;
    var split = url.split('/');
    var id = split[split.length - 1]
    $.ajax({
      url: `/api/character/${id}`,
      method: 'DELETE'
    }).done(result => {
      console.log(result)
    })
  })
})