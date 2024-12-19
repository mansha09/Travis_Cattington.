document.addEventListener('DOMContentLoaded', function() {
  console.log("Tenley's page is loaded!");

  const galleryImages = document.querySelectorAll('.card-img-top');
  galleryImages.forEach(img => {
      img.addEventListener('mouseover', function() {
          this.style.opacity = '0.8';
      });
      img.addEventListener('mouseout', function() {
          this.style.opacity = '1';
      });
  });
});
