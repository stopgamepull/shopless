// Custom Notification System
let notificationCount = 0;

function showNotification(message, type = 'info', title = '', duration = 5000) {
    const container = document.getElementById('notificationContainer');
    const notificationId = `notification-${++notificationCount}`;
    
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    notification.id = notificationId;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'notification-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => hideNotification(notificationId);
    
    const content = document.createElement('div');
    content.className = 'notification-content';
    
    if (title) {
        const titleEl = document.createElement('div');
        titleEl.className = 'notification-title';
        titleEl.textContent = title;
        content.appendChild(titleEl);
    }
    
    const messageEl = document.createElement('div');
    messageEl.className = 'notification-message';
    messageEl.innerHTML = message;
    content.appendChild(messageEl);
    
    notification.appendChild(closeBtn);
    notification.appendChild(content);
    container.appendChild(notification);
    
    // Show animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after duration
    if (duration > 0) {
        setTimeout(() => {
            hideNotification(notificationId);
        }, duration);
    }
    
    return notificationId;
}

function hideNotification(notificationId) {
    const notification = document.getElementById(notificationId);
    if (notification) {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Welcome message
    setTimeout(() => {
        showNotification(
            'Welcome to the most useless store on the internet! 🎪<br>Everything here is guaranteed to be completely pointless!',
            'chaos',
            '🎪 WELCOME TO CHAOS! 🎪',
            8000
        );
    }, 1000);
    
    // Random glitch effects
    function addRandomGlitches() {
        const elements = document.querySelectorAll('.product-card, .logo, .sidebar');
        elements.forEach(element => {
            if (Math.random() < 0.1) { // 10% chance
                element.style.animation = 'none';
                element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px) rotate(${Math.random() * 4 - 2}deg)`;
                setTimeout(() => {
                    element.style.animation = '';
                    element.style.transform = '';
                }, 200);
            }
        });
    }

    // Add glitch effects every 3 seconds
    setInterval(addRandomGlitches, 3000);

    // Buy button functionality
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get product name from the card
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const price = productCard.querySelector('.price').textContent;
            
            showRegretPopup(productName, price);
        });
    });

    // Show regret popup
    function showRegretPopup(productName, price) {
        const popup = document.getElementById('regretPopup');
        const popupContent = popup.querySelector('.popup-content');
        
        // Update popup content
        popupContent.innerHTML = `
            <h3>🎉 CONGRATULATIONS! 🎉</h3>
            <p>You're about to buy:<br><strong>${productName}</strong></p>
            <p>For the ridiculous price of: <strong>${price}</strong></p>
            <p>Your item will be delivered sometime, maybe...</p>
            <p>🤡 Are you sure you want to waste money on this?</p>
            <div class="popup-buttons">
                <button onclick="closePopup()">I changed my mind 😅</button>
                <button onclick="realRegret()">Yes, I want to regret! 😭</button>
            </div>
        `;
        
        popup.style.display = 'block';
        
        // Add glitch effect to popup
        setTimeout(() => {
            popupContent.style.animation = 'popupGlitch 0.5s ease-in-out';
        }, 1000);
    }

    // Navigation chaos
    const navLinks = document.querySelectorAll('.confusing-nav a');
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            // Special handling for Twitter/X link (6th link, index 5)
            if (index === 5) {
                // Let Twitter/X link work normally but with chaos effect
                showNotification(
                    'Escaping to Twitter/X? Good choice! 🐦<br>At least there you can waste time instead of money!',
                    'info',
                    '🚀 SOCIAL MEDIA ESCAPE!',
                    4000
                );
                
                // Chaotic animation before opening
                this.style.transform = `rotate(${Math.random() * 1080 - 540}deg) scale(${Math.random() * 2 + 1})`;
                this.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)';
                
                setTimeout(() => {
                    this.style.transform = 'rotate(1deg)';
                    this.style.background = 'linear-gradient(45deg, #1da1f2, #000000)';
                }, 1000);
                
                return; // Let the link work normally
            }
            
            // Chaos for other navigation links
            e.preventDefault();
            
            const messages = [
                '🚫 This page does not exist!',
                '🤖 Robot ate this link',
                '💥 ERROR: Too useful information',
                '🌀 You got caught in a vortex of uselessness',
                '⚠️ Access denied: Too logical'
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            showNotification(randomMessage, 'error', '404 ERROR!', 4000);
            
            // Random navigation animation
            this.style.transform = `rotate(${Math.random() * 720 - 360}deg) scale(${Math.random() * 2 + 0.5})`;
            setTimeout(() => {
                this.style.transform = '';
            }, 1000);
        });
    });

    // Sidebar chaos
    const sidebarItems = document.querySelectorAll('.sidebar li');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const chaosMessages = [
                '🗿 Rocks not found in database',
                '🌬️ Air temporarily out of stock',
                '🍞 Bread escaped from the store',
                '🍌 Bananas are on vacation',
                '❓ Don\'t know what this is',
                '💩 Category too honest'
            ];
            
            const randomMessage = chaosMessages[Math.floor(Math.random() * chaosMessages.length)];
            showNotification(randomMessage, 'warning', '⚠️ OOPS!', 3000);
            
            // Wobble effect
            this.style.animation = 'sidebarItemWobble 1s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 1000);
        });
    });

    // Add CSS for sidebar item wobble
    const style = document.createElement('style');
    style.textContent += `
        @keyframes sidebarItemWobble {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            25% { transform: translateX(-10px) rotate(-5deg); }
            75% { transform: translateX(10px) rotate(5deg); }
        }
        
        @keyframes popupGlitch {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            25% { transform: translate(-48%, -52%) scale(1.02) rotate(1deg); }
            75% { transform: translate(-52%, -48%) scale(0.98) rotate(-1deg); }
        }
    `;
    document.head.appendChild(style);

    // Random product card animations
    function randomCardDance() {
        const cards = document.querySelectorAll('.product-card');
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        
        if (randomCard) {
            randomCard.style.animation = 'none';
            randomCard.style.transform = 'scale(1.1) rotate(10deg)';
            randomCard.style.zIndex = '100';
            
            setTimeout(() => {
                randomCard.style.animation = '';
                randomCard.style.transform = '';
                randomCard.style.zIndex = '';
            }, 500);
        }
    }

    // Random card dance every 5 seconds
    setInterval(randomCardDance, 5000);

    // Cursor trail effect
    let mouseTrail = [];
    document.addEventListener('mousemove', function(e) {
        mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
        
        // Limit trail length
        if (mouseTrail.length > 10) {
            mouseTrail.shift();
        }
        
        // Remove old trail points
        mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
        
        // Create trail element
        if (Math.random() < 0.3) {
            const trail = document.createElement('div');
            trail.innerHTML = ['💎', '💨', '⚡', '🌟', '💫'][Math.floor(Math.random() * 5)];
            trail.style.position = 'fixed';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '999';
            trail.style.animation = 'trailFade 1s ease-out forwards';
            document.body.appendChild(trail);
            
            setTimeout(() => {
                trail.remove();
            }, 1000);
        }
    });

    // Add trail fade animation
    style.textContent += `
        @keyframes trailFade {
            0% { opacity: 1; transform: scale(1) rotate(0deg); }
            100% { opacity: 0; transform: scale(0.3) rotate(360deg); }
        }
    `;

    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            activateSecretMode();
            konamiCode = [];
        }
    });

    function activateSecretMode() {
        showNotification(
            'Now everything became even more useless!<br>Prices have gone completely crazy! 🤪',
            'chaos',
            '🎊 SECRET MODE ACTIVATED! 🎊',
            10000
        );
        
        // Make everything spin
        document.body.style.animation = 'secretSpin 10s linear infinite';
        
        // Change all prices to random values
        const prices = document.querySelectorAll('.price');
        prices.forEach(price => {
            price.textContent = `${(Math.random() * 100 + 0.1).toFixed(1)} SOL 🤪`;
        });
        
        // Add secret mode CSS
        style.textContent += `
            @keyframes secretSpin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        
        setTimeout(() => {
            document.body.style.animation = '';
            showNotification(
                'Secret mode ended... or did it? 🤔',
                'info',
                '🎭 MODE ENDED?',
                5000
            );
        }, 10000);
    }

    // Random page title changes
    const crazyTitles = [
        '🛒 The Useless Shop - Buy Useless Stuff! 🛒',
        '💸 WASTE MONEY ON GARBAGE! 💸',
        '🤡 Welcome to Shopping Hell! 🤡',
        '⚠️ WARNING: Site may cause laughter ⚠️',
        '🎪 Circus of Freaks and Useless Items 🎪'
    ];

    let titleIndex = 0;
    setInterval(() => {
        document.title = crazyTitles[titleIndex];
        titleIndex = (titleIndex + 1) % crazyTitles.length;
    }, 3000);

    // Add floating emojis
    function createFloatingEmoji() {
        const emojis = ['💎', '💸', '🤪', '😭', '🤡', '💀', '🎉', '⚡', '🌟', '💫'];
        const emoji = document.createElement('div');
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * window.innerWidth + 'px';
        emoji.style.top = window.innerHeight + 'px';
        emoji.style.fontSize = '2rem';
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '998';
        emoji.style.animation = `floatUp ${3 + Math.random() * 2}s linear`;
        
        document.body.appendChild(emoji);
        
        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    // Create floating emoji every 2 seconds
    setInterval(createFloatingEmoji, 2000);

    // Add floating animation
    style.textContent += `
        @keyframes floatUp {
            0% { 
                transform: translateY(0) rotate(0deg); 
                opacity: 1; 
            }
            100% { 
                transform: translateY(-${window.innerHeight + 100}px) rotate(360deg); 
                opacity: 0; 
            }
        }
    `;

    // Random encouraging notifications
    const encouragingMessages = [
        { msg: 'Still browsing? That\'s the spirit! 🎉', type: 'success', title: '🎊 DEDICATION!' },
        { msg: 'You haven\'t bought anything yet? Suspicious... 🤔', type: 'warning', title: '🕵️ HMMMM...' },
        { msg: 'Fun fact: 0% of our customers are satisfied! 📊', type: 'info', title: '📈 STATISTICS!' },
        { msg: 'Your wallet is still safe... for now 💰', type: 'chaos', title: '💸 WALLET STATUS' }
    ];

    // Show random encouraging message every 15 seconds
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance
            const randomMsg = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
            showNotification(randomMsg.msg, randomMsg.type, randomMsg.title, 4000);
        }
    }, 15000);

    console.log('🎪 Welcome to the most useless store on the internet! 🎪');
    console.log('💡 Hint: Try entering the Konami code for secret mode!');
});

// Global functions for popup
function closePopup() {
    const popup = document.getElementById('regretPopup');
    popup.style.display = 'none';
    
    // Show a random "wise" message
    const messages = [
        { msg: 'Your wallet remained intact... for now.', type: 'success', title: '💰 Wise Decision!' },
        { msg: 'Better spend that money on something else useless!', type: 'warning', title: '🤔 Good Choice...' },
        { msg: 'You avoided the purchase of the century! Or missed it... 🤔', type: 'info', title: '🎯 Missed Opportunity?' }
    ];
    
    setTimeout(() => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        showNotification(randomMsg.msg, randomMsg.type, randomMsg.title, 5000);
    }, 500);
}

function realRegret() {
    const popup = document.getElementById('regretPopup');
    popup.style.display = 'none';
    
    // Show fake payment process with notifications
    const loadingMessages = [
        { msg: 'Checking your wallet... 💰', type: 'info', title: '💳 PROCESSING...' },
        { msg: 'Contacting uselessness suppliers... 📞', type: 'warning', title: '📡 CONNECTING...' },
        { msg: 'Packaging your disappointment... 📦', type: 'error', title: '📦 PACKAGING...' },
        { msg: 'Preparing delivery to nowhere... 🚚', type: 'chaos', title: '🚚 SHIPPING...' }
    ];
    
    let messageIndex = 0;
    const interval = setInterval(() => {
        if (messageIndex < loadingMessages.length) {
            const currentMsg = loadingMessages[messageIndex];
            showNotification(currentMsg.msg, currentMsg.type, currentMsg.title, 2000);
            messageIndex++;
        } else {
            clearInterval(interval);
            showFinalMessage();
        }
    }, 2000);
}

function showFinalMessage() {
    setTimeout(() => {
        showNotification(
            'You successfully DID NOT buy a useless thing!<br>This was just a prank! 😄<br><br>Your money is safe... until you visit another website! 💸',
            'success',
            '🎊 CONGRATULATIONS! 🎊',
            10000
        );
        
        // Confetti effect
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createConfetti();
            }, i * 100);
        }
    }, 1000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.innerHTML = ['🎉', '🎊', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-50px';
    confetti.style.fontSize = '2rem';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s ease-in`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
    
    // Add confetti fall animation if not exists
    if (!document.querySelector('#confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confettiFall {
                0% { 
                    transform: translateY(-50px) rotate(0deg); 
                    opacity: 1; 
                }
                100% { 
                    transform: translateY(${window.innerHeight + 50}px) rotate(720deg); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
} 