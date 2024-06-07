function showProjectDetails(title, description) {
    document.getElementById('projectModalLabel').innerText = title;
    document.getElementById('modalBody').innerText = description;
    $('#projectModal').modal('show');
}

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedIcons = document.querySelectorAll('.animated-icon');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.5
    });

    animatedIcons.forEach(icon => {
        observer.observe(icon);
    });
});
