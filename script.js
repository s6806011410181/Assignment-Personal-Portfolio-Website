document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentAreas = document.querySelectorAll('.content-area');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = item.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // Hide all content areas
            contentAreas.forEach(area => {
                area.classList.remove('active');
            });

            // Show the target content area
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // If it's a link to another page, follow it
            if (item.hasAttribute('href')) {
                window.location.href = item.getAttribute('href');
            }
        });
    });
});
