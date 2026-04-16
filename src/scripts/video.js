document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-player')

    videoContainers.forEach(container => {
        const video = container.querySelector('.js-video-player')
        const btn = container.querySelector('.js-video-btn')

        if (!video || !btn) return

        const toggleVideo = () => {
            if (video.paused) {
                video.play();
                btn.classList.add('is-playing')
            } else {
                video.pause();
                btn.classList.remove('is-playing')
            }
        }

        btn.addEventListener('click', toggleVideo)

        video.addEventListener('click', toggleVideo)

        video.addEventListener('ended', () => {
            btn.classList.remove('is-playing')
        })
    })
})