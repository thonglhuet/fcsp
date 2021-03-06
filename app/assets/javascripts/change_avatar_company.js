$(document).ready(function() {
  $('.album-image').hide();
  $('.album-for-user').click(function() {
  $('.album-image').show();
  });

  $('.user-image-img').on('click', function() {
    img_id = this.dataset.id;
    img_src = $('#user-image-' + img_id).attr('src');
    $('.img-upload').attr('src', img_src);
    $('.change-image').val('')
    $('.user-old-image').val(img_id);
    $('.btn').removeClass('create-image');
    $('.btn').addClass('update-image');
  });

  $('.change-image').on('change', function() {
    read_url(this);
    $('.btn').removeClass('update-image');
    $('.btn').addClass('create-image');
  });

  $('#changeAvatarModal').on('click', '.create-image', function() {
    $('#form-create-avatar').submit();
  });

  $('#changeAvatarModal').on('click', '.update-image', function() {
    $('#form-update-avatar').submit();
  });

  $('#changeCoverModal').on('click', '.create-image', function() {
    $('#form-create-cover').submit();
  });

  $('#changeCoverModal').on('click', '.update-image', function() {
    $('#form-update-cover').submit();
  });
  
});

function read_url(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('.img-upload').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
