<script>
  $(document).ready(function() { $('#blocks .custom-product-flex-item').slice(0, 6).show(); });
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    $(function () {
      var x = 6;
      $('#blocks .custom-product-flex-item').slice(0, 6).show();
      var t = $('.custom-product-flex-item:visible').last().offset().top - 200;
      if (y > t) { x = x + 6; $('.custom-product-flex-item:hidden').slice(0, x).slideDown(); }
    });
  });
</script>
