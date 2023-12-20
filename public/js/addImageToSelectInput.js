/* eslint-disable no-undef */
export default function initCustomSelect() {
  $(document).ready(() => {
    $('#classe').select2({
      templateResult(data) {
        const $option = $(data.element);
        const $img = $option.attr('data-img');
        if ($img) {
          return $(
            `<span><img src="${
              $img
            }" class="select-img" /> ${
              data.text
            }</span>`,
          );
        }
        return data.text;
      },
    });
  });

  $(document).ready(() => {
    $('#update-classe').select2({
      templateResult(data) {
        const $option = $(data.element);
        const $img = $option.attr('data-img');
        if ($img) {
          return $(
            `<span><img src="${
              $img
            }" class="select-img" /> ${
              data.text
            }</span>`,
          );
        }
        return data.text;
      },
    });
  });

  $(document).ready(() => {
    $('#type').select2({
      templateResult(data) {
        return data.text;
      },
    });
  });

  $(document).ready(() => {
    $('#update-account').select2({
      templateResult(data) {
        return data.text;
      },
    });
  });

  $(document).ready(() => {
    $('#update-type').select2({
      templateResult(data) {
        return data.text;
      },
    });
  });
}
