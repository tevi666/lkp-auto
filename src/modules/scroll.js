export const scroll = () => {
    const menu = document.querySelectorAll('ul>li>a');

    const allLinks = [...menu];

    allLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }
        });
    });
};