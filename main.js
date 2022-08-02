$(() => {
  $('.melody-btn').click((e) => {
    console.log(`row: ${$(e.target).data("value-row")} num: ${$(e.target).data("value-num")}`);
  });

  $('.bass-btn').click((e) => {
    console.log(`bass number: ${$(e.target).data("value-num")}`);
  })
})