// クリック時にクリックしたlist-itemのみ色を変える。
// this構文。thisはクォーテーションで囲まない。

$(function() {
  $('.list-item').click(function() {
    $(this).css('color', 'red');
  });
});