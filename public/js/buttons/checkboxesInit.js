const checkboxes = [
  { checkbox: document.getElementById('null-value'), attribute: 'data-time', value: '0' },
  { checkbox: document.getElementById('feconde-value'), class: 'feconde' },
  { checkbox: document.getElementById('fecondee-value'), class: 'fecondee' },
  {
    checkbox: document.getElementById('public-type'), attribute: 'data-type', value: 'public', type: 'public',
  },
  {
    checkbox: document.getElementById('private-type'), attribute: 'data-type', value: 'private', type: 'private',
  },
];

export default function checkboxesInit() {
  checkboxes.forEach(({
    checkbox, attribute, value, class: className, type,
  }) => {
    checkbox.addEventListener('change', (event) => {
      const trElements = document.querySelectorAll('[data-type="character"]');
      trElements.forEach((trElement) => {
        const conditionElement = className ? trElement.querySelector(`.${className}`) : null;
        const attributeValue = attribute ? trElement.querySelector('.date-repro').getAttribute(attribute) : null;
        const typeValue = type ? trElement.querySelector('.type').getAttribute(attribute) : null;
        const shouldHide = (
          (className && conditionElement && conditionElement.classList.contains(className))
          || (attribute && attributeValue === value)
          || (type && typeValue === value)
        );

        if (shouldHide) {
          if (event.target.checked) {
            trElement.classList.remove('hidden');
          } else {
            trElement.classList.add('hidden');
          }
        }
      });
    });
  });
}
