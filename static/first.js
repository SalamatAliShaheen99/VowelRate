document.addEventListener("DOMContentLoaded", () => {
    const conveyorPipeline = document.querySelector(".slides");
    let originalSlides = document.querySelectorAll(".image");

    if (!conveyorPipeline || originalSlides.length === 0) return;

    // 1. Establish Infinite Loop Clones Elements
    const cloneStartNode = originalSlides[0].cloneNode(true);
    const cloneEndNode = originalSlides[originalSlides.length - 1].cloneNode(true);

    conveyorPipeline.appendChild(cloneStartNode);
    conveyorPipeline.insertBefore(cloneEndNode, conveyorPipeline.firstChild);

    // Refresh nodes tracker selection matrix array
    let totalActiveSlides = document.querySelectorAll(".image");
    
    let currentSlidePointer = 1;
    let clickDebounceLatch = false; // Prevents crash freezes during tezi se click execution loops
    let automaticAutoplayTimer = null;

    // Set stable default target offset position
    conveyorPipeline.style.transform = `translateX(-${currentSlidePointer * 100}%)`;

    // 2. Core Navigation Controls Engines
    function triggerNextSlide() {
        if (clickDebounceLatch) return;
        clickDebounceLatch = true;
        currentSlidePointer++;
        executeSlideTranslation();
    }

    function triggerPrevSlide() {
        if (clickDebounceLatch) return;
        clickDebounceLatch = true;
        currentSlidePointer--;
        executeSlideTranslation();
    }

    function executeSlideTranslation() {
        conveyorPipeline.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
        conveyorPipeline.style.transform = `translateX(-${currentSlidePointer * 100}%)`;
    }

    // 3. Reset Alignment Transition End Hook Boundaries
    conveyorPipeline.addEventListener("transitionend", () => {
        clickDebounceLatch = false; // Unlock click availability latch safely

        if (currentSlidePointer === totalActiveSlides.length - 1) {
            conveyorPipeline.style.transition = "none";
            currentSlidePointer = 1;
            conveyorPipeline.style.transform = `translateX(-100%)`;
        }

        if (currentSlidePointer === 0) {
            conveyorPipeline.style.transition = "none";
            currentSlidePointer = totalActiveSlides.length - 2;
            conveyorPipeline.style.transform = `translateX(-${currentSlidePointer * 100}%)`;
        }
    });

    // 4. Click Event Listeners Mapping
    const rightArrowBtn = document.querySelector(".next");
    const leftArrowBtn = document.querySelector(".pre");
    const mainSliderFrame = document.querySelector(".trend-hero-slider");

    if (rightArrowBtn) rightArrowBtn.addEventListener("click", triggerNextSlide);
    if (leftArrowBtn) leftArrowBtn.addEventListener("click", triggerPrevSlide);

    // Dynamic Autoplay Pacing Loops Rules
    function engageAutoplay() {
        automaticAutoplayTimer = setInterval(triggerNextSlide, 4000); // 4 Seconds clean operational loop
    }

    function disengageAutoplay() {
        if (automaticAutoplayTimer) clearInterval(automaticAutoplayTimer);
    }

    if (mainSliderFrame) {
        mainSliderFrame.addEventListener("mouseenter", disengageAutoplay);
        mainSliderFrame.addEventListener("mouseleave", engageAutoplay);
    }

    // Activate Engine Loop on Page Boot up
    engageAutoplay();
});

//menu btn ka kholna :
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.querySelector(".menu-btn").classList.toggle("active");
    document.getElementById("menuOverlay").classList.toggle("active");
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Agar user dropdown ke bahar click kare to dropdown band ho jaye
window.onclick = function(event) {
    if (!event.target.matches('.username') && !event.target.matches('.fa-caret-down')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// sign in ka system


const luxForm = document.getElementById("luxury-newsletter-form");
    const luxStatus = document.getElementById("luxury-status-msg");
    const luxBtn = document.getElementById("luxury-submit-button");

    luxForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        luxBtn.innerHTML = `<span>Processing...</span>`;
        luxBtn.disabled = true;

        const fData = new FormData(e.target);
        
        fetch(luxForm.action, {
            method: luxForm.method,
            body: fData,
            headers: { 'Accept': 'application/json' }
        }).then(res => {
            if (res.ok) {
                luxStatus.innerHTML = "Welcome to the elite elite circle! Check your mail. 👟";
                luxStatus.className = "luxury-status-msg success";
                luxForm.reset();
            } else {
                luxStatus.innerHTML = "Error processing submission. Check inputs.";
                luxStatus.className = "luxury-status-msg error";
            }
            restoreBtn();
        }).catch(() => {
            luxStatus.innerHTML = "Connection failure. Verify internet connectivity.";
            luxStatus.className = "luxury-status-msg error";
            restoreBtn();
        });
    });

    function restoreBtn() {
        luxBtn.disabled = false;
        luxBtn.innerHTML = `<span>Subscribe</span><svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12,5 19,12 12,19"></polyline></svg>`;
    }

