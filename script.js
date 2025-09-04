document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const contactsButton = document.getElementById('contacts-button');
    const contactsPopup = document.getElementById('contacts-popup');

    // ������� ��� �������� "�����"
    document.addEventListener('mousemove', (e) => {
        const diamonds = document.querySelectorAll('.diamond');
        diamonds.forEach(diamond => {
            const rect = diamond.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const distance = Math.sqrt(x * x + y * y);
            const intensity = Math.min(distance / 500, 1) * 10;
            diamond.style.transform = rotate(45deg) translate(${x / intensity}px, ${y / intensity}px);
        });
    });

    // ������ ��� ��������
    const projectsData = {
        project1: {
            title: "�������� ������� 1",
            city: "������",
            year: "2024",
            participants: "500",
            budget: "10 000 000 ���.",
            services: "�����������, ����������� �����������",
            description: "������� �������� �������. Lorem ipsum dolor sit amet...",
            link: "https://example.com"
        }
    };

    // ��������� ����� �� ����-�������
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.dataset.projectId;
            const project = projectsData[projectId];
            const detailsHtml = 
                <h2>${project.title}</h2>
                <p><strong>�����:</strong> ${project.city}</p>
                <p><strong>���:</strong> ${project.year}</p>
                <p><strong>���������:</strong> ${project.participants}</p>
                <p><strong>������:</strong> ${project.budget}</p>
                <p><strong>������:</strong> ${project.services}</p>
                <p>${project.description}</p>
                ${project.link ? <p><a href="${project.link}" target="_blank">���� �����������</a></p> : ''}
            ;
            document.querySelector('.project-details').innerHTML = detailsHtml;

            // �������� ������ � ����� � ����������
            const rect = item.getBoundingClientRect();
            modal.style.display = 'flex';
            modal.style.top = ${rect.top}px;
            modal.style.left = ${rect.left}px;
            modal.style.width = ${rect.width}px;
            modal.style.height = ${rect.height}px;

            setTimeout(() => {
                modal.classList.add('active');
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
            }, 10);
        });
    });

    // �������� ���������� ����
    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    });

    // ��������� ����� �� "��������"
    contactsButton.addEventListener('click', (e) => {
        e.preventDefault();
        contactsPopup.style.display = contactsPopup.style.display === 'block' ? 'none' : 'block';
    });
});