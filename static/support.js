
    const contactForm = document.getElementById("vowelrate-contact-form");
    const contactStatus = document.getElementById("contact-status-notifier");
    const contactBtn = document.getElementById("contact-submit-btn");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        contactBtn.innerHTML = `<span>Transmitting Data...</span>`;
        contactBtn.disabled = true;

        const formDataInstance = new FormData(e.target);
        
        fetch(contactForm.action, {
            method: contactForm.method,
            body: formDataInstance,
            headers: { 'Accept': 'application/json' }
        }).then(res => {
            if (res.ok) {
                contactStatus.innerHTML = "Transmission complete. Connection log established. ✉️";
                contactStatus.className = "terminal-status-notifier success";
                contactForm.reset();
            } else {
                contactStatus.innerHTML = "Transmission aborted. Verify parameter data values.";
                contactStatus.className = "terminal-status-notifier error";
            }
            restoreContactBtn();
        }).catch(() => {
            contactStatus.innerHTML = "Network connection interface timeout error.";
            contactStatus.className = "terminal-status-notifier error";
            restoreContactBtn();
        });
    });

    function restoreContactBtn() {
        contactBtn.disabled = false;
        contactBtn.innerHTML = `<span>Transmit Secure Message</span><svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12,5 19,12 12,19"></polyline></svg>`;
    }
