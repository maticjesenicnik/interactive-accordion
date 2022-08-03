$(() => {
  $('.melody-btn').click((e) => {
    console.log(`row: ${$(e.target).data("value-row")} num: ${$(e.target).data("value-num")}`);
  });

  $('.bass-btn').click((e) => {
    console.log(`bass number: ${$(e.target).data("value-num")}`);
  })

  $('.btn-animation-toggle').click((e) => {
    $('#flex-container').toggleClass('animation-paused');
    $('.btn-animation-toggle').text($('#flex-container').hasClass('animation-paused') ? 'Play' : 'Pause');
  });
})