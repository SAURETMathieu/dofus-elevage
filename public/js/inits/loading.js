export default function removeLoading() {
  const loadingElement = document.querySelector('.back-loading');

  if (loadingElement) {
    loadingElement.remove();
  }
}
