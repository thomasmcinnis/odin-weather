export default function renderBackground(prefersC) {
    const main = document.querySelector('main');

    if (prefersC) {
        main.removeChild(main.lastElementChild);
        return;
    }

    const img = document.createElement('img');
    img.className = 'freedom';
    img.src =
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2RtY2xmNnYxZ2p5Y2M3dXU1OTRzNHVtZ3hjbjd2MnF0dGViMnh0ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t1i8KZ7momVs4/giphy-downsized.gif';

    main.appendChild(img);
}
