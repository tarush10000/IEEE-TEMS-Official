// Custom Cursor JavaScript

class FuturisticCursor {
    constructor() {
        this.cursor = null;
        this.cursorDot = null;
        this.cursorRing = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.ringX = 0;
        this.ringY = 0;
        this.isVisible = false;
        this.trailArray = [];

        this.init();
    }

    init() {
        // Check if device supports hover (not mobile)
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        this.createCursor();
        this.bindEvents();
        this.animate();
    }

    createCursor() {
        // Create cursor container
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        document.body.appendChild(this.cursor);

        // Create cursor dot
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        this.cursor.appendChild(this.cursorDot);

        // Create cursor ring
        this.cursorRing = document.createElement('div');
        this.cursorRing.className = 'cursor-ring';
        this.cursor.appendChild(this.cursorRing);
    }

    bindEvents() {
        // Mouse move
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            if (!this.isVisible) {
                this.showCursor();
            }

            // Create trail effect
            this.createTrail();
        });

        // Mouse enter
        document.addEventListener('mouseenter', () => {
            this.showCursor();
        });

        // Mouse leave
        document.addEventListener('mouseleave', () => {
            this.hideCursor();
        });

        // Add hover effects for different elements
        this.addHoverEffects();
    }

    addHoverEffects() {
        // Clickable elements (buttons, links, etc.)
        const clickableElements = document.querySelectorAll('button, a, .clickable, [role="button"]');
        clickableElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover-clickable');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover-clickable');
            });
        });

        // Text elements
        const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, .text-selectable');
        textElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover-text');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover-text');
            });
        });

        // Links with special effect
        const links = document.querySelectorAll('a');
        links.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover-link');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover-link');
            });
        });

        // Form inputs
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-input');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-input');
            });
        });

        // IEEE TEMS specific elements
        const temsElements = document.querySelectorAll('.logo, .ieee-tems, #About h2, .main-title');
        temsElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-tems');
                this.createParticles();
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-tems');
            });
        });

        // Draggable elements
        const draggableElements = document.querySelectorAll('[draggable="true"], .draggable');
        draggableElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-grab');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-grab');
            });
        });
    }

    showCursor() {
        this.isVisible = true;
        this.cursor.style.opacity = '1';
    }

    hideCursor() {
        this.isVisible = false;
        this.cursor.style.opacity = '0';
    }

    createTrail() {
        if (Math.random() > 0.7) { // Only create trail occasionally for performance
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = this.mouseX + 'px';
            trail.style.top = this.mouseY + 'px';
            document.body.appendChild(trail);

            // Remove trail after animation
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 800);
        }
    }

    createParticles() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'cursor-particles';
                particle.style.left = this.mouseX + 'px';
                particle.style.top = this.mouseY + 'px';

                // Random movement
                const randomX = (Math.random() - 0.5) * 100;
                const randomY = (Math.random() - 0.5) * 100;
                particle.style.setProperty('--random-x', randomX + 'px');
                particle.style.setProperty('--random-y', randomY + 'px');

                document.body.appendChild(particle);

                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 2000);
            }, i * 100);
        }
    }

    animate() {
        // Smooth cursor dot movement
        this.cursorDot.style.left = this.mouseX + 'px';
        this.cursorDot.style.top = this.mouseY + 'px';

        // Smooth ring movement with slight delay
        this.ringX += (this.mouseX - this.ringX) * 0.1;
        this.ringY += (this.mouseY - this.ringY) * 0.1;

        this.cursorRing.style.left = this.ringX + 'px';
        this.cursorRing.style.top = this.ringY + 'px';

        requestAnimationFrame(() => this.animate());
    }

    // Public methods for manual control
    setLoading(isLoading) {
        if (isLoading) {
            this.cursor.classList.add('cursor-loading');
        } else {
            this.cursor.classList.remove('cursor-loading');
        }
    }

    setDisabled(isDisabled) {
        if (isDisabled) {
            this.cursor.classList.add('cursor-disabled');
        } else {
            this.cursor.classList.remove('cursor-disabled');
        }
    }
}

// Initialize cursor when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.customCursor = new FuturisticCursor();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FuturisticCursor;
}