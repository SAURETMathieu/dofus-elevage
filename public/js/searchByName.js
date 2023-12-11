export function searchByName(){
  document.getElementById('searchInput').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const results = document.querySelectorAll('.container-list__account-color');

    results.forEach(result => {
        const name = result.getAttribute('data-name').toLowerCase();
        if (name.includes(input)) {
            result.style.display = 'block';
        } else {
            result.style.display = 'none';
        }
    });
  });
}


