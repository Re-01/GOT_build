(() => {
	// stub
	console.log('fired');

	const 	sigils		= document.querySelectorAll(".sigil-container"),
			lightbox 	= document.querySelector('.lightBox'),
			video		= document.querySelector('video'),
			lbClose     = document.querySelector('.lightbox-close'),
			topBanners  = document.querySelector('#houseImages');

	function openLightbox() {
		//debugger;
		let targetHouse = this.className.split(" ")[1];

		// this gives us a lowercase house name -> the second class on all of the shields ie stark, baratheon
		

		// flip this uppercase
		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetVid}.mp4`;
		lightbox.classList.add('lightbox-on');

		video.load();
		video.play();
	}
	
	function closeLightbox() {
		lightBox.classList.remove('lightbox-on');
	
	// rewind the current video and pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanners() {
		const offSet = 600;
		let currentOffset = this.dataset.offset * offSet;

		TweenMax.top(topBanners, 0.7, { right: currentOffset });
	}

	sigils.forEach(sigil => sigil.addEventListener('click', animateBanners));

	video.addEventListener('ended', closeLightbox);
	lbClose.addEventListener('click', closeLightbox);
})();