export function initCustomSelect() {

$(document).ready(function () {
  $("#classe").select2({
    templateResult: function (data) {
      const $option = $(data.element);
      const $img = $option.attr("data-img");
      if ($img) {
        return $(
          '<span><img src="' +
            $img +
            '" class="select-img" /> ' +
            data.text +
            "</span>"
        );
      }
      return data.text;
    },
  });
});

$(document).ready(function () {
  $("#update-classe").select2({
    templateResult: function (data) {
      const $option = $(data.element);
      const $img = $option.attr("data-img");
      if ($img) {
        return $(
          '<span><img src="' +
            $img +
            '" class="select-img" /> ' +
            data.text +
            "</span>"
        );
      }
      return data.text;
    },
  });
});

$(document).ready(function () {
  $("#type").select2({
    templateResult: function (data) {
      return data.text;
    },
  });
});

$(document).ready(function () {
  $("#update-account").select2({
    templateResult: function (data) {
      return data.text;
    },
  });
});

$(document).ready(function () {
  $("#update-type").select2({
    templateResult: function (data) {
      return data.text;
    },
  });
});

}