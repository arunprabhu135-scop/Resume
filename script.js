// 1. Typing Animation
new Typed("#typing", {
    strings: ["Software Developer", "Java Developer", "Backend Developer"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
});

// 2. SPA Navigation (Section Switching)
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(s => {
        s.classList.remove('active-section');
    });

    // Show selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active-section');

    // Update Nav Active State
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(l => l.classList.remove('active'));

    document.getElementById('link-' + sectionId).classList.add('active');

    // Scroll to top when switching
    window.scrollTo(0, 0);
}