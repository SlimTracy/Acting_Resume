// Modal Logic for Photos
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("photo-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close");

    // Open Modal on Image Click
    document.querySelectorAll(".clickable-photo").forEach(photo => {
        photo.addEventListener("click", () => {
            modal.style.display = "block"; // Show the modal
            modalImage.src = photo.src; // Set the clicked image source in modal
        });
    });

    // Close Modal on Close Button Click
    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Hide the modal
    });

    // Close Modal on Outside Click
    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal if clicked outside
        }
    });
});