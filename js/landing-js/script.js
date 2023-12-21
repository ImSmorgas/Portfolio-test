// Nav
document.addEventListener("DOMContentLoaded", () => {
    let sharedPageIndex = 0;
    let shouldAutoScroll = true;

    const gradientBg = document.querySelector(".gradient-bg");
    const pagesContainer = document.querySelector(".pages-container");

    window.addEventListener("scroll", function () {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        gradientBg.style.backgroundPosition = `-${scrollX}px -${scrollY}px`;
    });

    slide = (direction, containerId) => {
        const container = document.getElementById(containerId);
        const pages = container.children;

        // Calculate totalPages dynamically
        const totalPages = pages.length;

        if (direction === 'next' && sharedPageIndex < totalPages - 1) {
            sharedPageIndex++;
        }

        if (direction === 'prev' && sharedPageIndex > 0) {
            sharedPageIndex--;
        }

        if (direction === 'directTo1' && containerId === 'pages1') {
            const pageOne = document.querySelector('.page.one');
            smoothVerticalScroll(pageOne, 1500);
            shouldAutoScroll = false;
            return;
        }

        if (!shouldAutoScroll) {
            shouldAutoScroll = true;
            return;
        }

        const scrollX = -sharedPageIndex * window.innerWidth; // Adjust here

        gradientBg.style.backgroundPosition = `${scrollX}px 0`;
        container.style.transform = `translateX(${scrollX}px)`;

        const otherContainerId = containerId === 'pages1' ? 'pages2' : 'pages1';
        const otherContainer = document.getElementById(otherContainerId);
        otherContainer.style.transform = `translateX(${scrollX}px)`;
    };

    const smoothVerticalScroll = (element, duration) => {
        const yOffset = 0;
        const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        const initialY = window.pageYOffset;
        const distance = targetY - initialY;
        const startTime = performance.now();

        const easeInOutQuad = (time, start, change, duration) => {
            time /= duration / 2;
            if (time < 1) return change / 2 * time * time + start;
            time--;
            return -change / 2 * (time * (time - 2) - 1) + start;
        };

        const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            window.scrollTo(0, easeInOutQuad(elapsedTime, initialY, distance, duration));

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    // Add click event listener to "My Favorite Projects" link
    const favoriteProjectsLink = document.querySelector('.navbar-nav .nav-link[href="index.html#1"]');
    if (favoriteProjectsLink) {
        favoriteProjectsLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.hash = '1';
            slide('directTo1', 'pages1');
        });
    }

    // Initial navigation based on hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash === '1') {
        slide('directTo1', 'pages1');
    } else {
        slide('next', 'pages1');
    }
});

// Nav

// 1

// Animated Elements
// Mouse Affect
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY + window.scrollY;
    });

    move();
});

// AE  1
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('1');
    const animatedElements = containerElement.querySelectorAll('.animated-element-1s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 2s 1
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('1');
    const animatedElements = containerElement.querySelectorAll('.animated-element-2s1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting) {
                // If the element is in view, trigger the animation
                target.classList.remove('active');
                const imageContainer = target.querySelector('.image-container');
                imageContainer.classList.remove('delayed-hover');

                // Apply the animation immediately
                target.classList.add('active');
                imageContainer.classList.add('delayed-hover');
            } else {
                // If the element is out of view, remove the animation classes
                target.classList.remove('active');
                const imageContainer = target.querySelector('.image-container');
                imageContainer.classList.remove('delayed-hover');
            }
        });
    }, { threshold: .5 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});


// Animated Elements

// 2

// Animated Elements

// AE 1s 2
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('2');
    const animatedElements = containerElement.querySelectorAll('.animated-element-1s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 2s 2
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('2');
    const animatedElements = containerElement.querySelectorAll('.animated-element-2s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 3s 2
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('2');
    const animatedElements = containerElement.querySelectorAll('.animated-element-3s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE No Move 2
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('2');
    const animatedElements = containerElement.querySelectorAll('.animated-element-no-move');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE BAV
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.button-animated-vertical');
    const containerElement = document.getElementById('2');
    const targetElement = containerElement; // Change this to the actual ID of the element you want to observe

    buttons.forEach(button => {
        let hasAnimated = false;

        const resetAnimation = () => {
            button.style.animation = 'none'; // Reset animation
            void button.offsetWidth; // Trigger reflow for the next animation
            button.style.animation = null; // Re-enable animation
        };

        const startAnimation = () => {
            button.classList.add('button-animated-vertical');
            hasAnimated = true;

            // Stop the animation after 9 seconds
            setTimeout(() => {
                stopAnimation();
            }, 9000);
        };

        const stopAnimation = () => {
            button.classList.remove('button-animated-vertical');
            resetAnimation();
            hasAnimated = false;
            observer.disconnect(); // Disconnect the observer to stop observing
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    startAnimation();
                } else if (!entry.isIntersecting && hasAnimated) {
                    stopAnimation();
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null, // viewport
            rootMargin: '0px', // no margin
            threshold: 0.5 // 50% of the target element in view
        });

        observer.observe(targetElement);
    });
});

// AE AIL
document.addEventListener("DOMContentLoaded", function () {
    const arrowLeft = document.querySelector('.arrow-indicator-left');
    const containerElement = document.getElementById('2');
    const targetElement = containerElement; // Change this to the actual ID of the element you want to observe

    let hasAnimated = false;

    const resetAnimation = () => {
        arrowLeft.style.animation = 'none'; // Reset animation
        void arrowLeft.offsetWidth; // Trigger reflow for the next animation
        arrowLeft.style.animation = null; // Re-enable animation
    };

    const startAnimation = () => {
        arrowLeft.classList.add('arrow-indicator-left');
        hasAnimated = true;

        // Stop the animation after 9 seconds
        setTimeout(() => {
            stopAnimation();
        }, 9000);
    };

    const stopAnimation = () => {
        arrowLeft.classList.remove('arrow-indicator-left');
        resetAnimation();
        hasAnimated = false;
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
                startAnimation();
            } else if (!entry.isIntersecting && hasAnimated) {
                stopAnimation();
            }
        });
    };

    // Set up Intersection Observer
    const observer = new IntersectionObserver(observerCallback, { threshold: 1 });

    // Observe the target element
    observer.observe(targetElement);

    // Remove the animation class and reset animation on page load
    resetAnimation();
});
// AE AIR
document.addEventListener("DOMContentLoaded", function () {
    const arrowRight = document.querySelector('.arrow-indicator-right');
    const containerElement = document.getElementById('2');
    const targetElement = containerElement; // Change this to the actual ID of the element you want to observe

    let hasAnimated = false;

    const resetAnimation = () => {
        arrowRight.style.animation = 'none'; // Reset animation
        void arrowRight.offsetWidth; // Trigger reflow for the next animation
        arrowRight.style.animation = null; // Re-enable animation
    };

    const startAnimation = () => {
        arrowRight.classList.add('arrow-indicator-right');
        hasAnimated = true;

        // Stop the animation after 9 seconds
        setTimeout(() => {
            stopAnimation();
        }, 9000);
    };

    const stopAnimation = () => {
        arrowRight.classList.remove('arrow-indicator-right');
        resetAnimation();
        hasAnimated = false;
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
                startAnimation();
            } else if (!entry.isIntersecting && hasAnimated) {
                stopAnimation();
            }
        });
    };

    // Set up Intersection Observer
    const observer = new IntersectionObserver(observerCallback, { threshold: 1 });

    // Observe the target element
    observer.observe(targetElement);

    // Remove the animation class and reset animation on page load
    resetAnimation();
});
// Animated Elements


// 3

// Animated Elements

// AE 1s 3
// AE 1s 2
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('3');
    const animatedElements = containerElement.querySelectorAll('.animated-element-1s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// 5

// Animated Elements
// AE 1s 5
document.addEventListener("DOMContentLoaded", function () {
    // Script for animated-element-1s
    const containerElementSlow = document.getElementById('5');
    const animatedElementsSlow = containerElementSlow.querySelectorAll('.animated-element-1s');

    const observerSlow = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none';
                void target.offsetWidth;
                target.style.animation = null;
            }
        });
    }, { threshold: 0.5 });

    animatedElementsSlow.forEach(element => {
        observerSlow.observe(element);
    });
});
// AE 2s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-2s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 3s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-3s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 4s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-4s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 5s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-5s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 6s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-6s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE OIMU
document.addEventListener("DOMContentLoaded", function () {
    // Script for opacity-in-move-up
    const targetElementMoveUp = document.getElementById('5');
    const h1ElementMoveUp = targetElementMoveUp.querySelector('.opacity-in-move-up');

    const startAnimationMoveUp = () => {
        h1ElementMoveUp.classList.add('active');
        h1ElementMoveUp.classList.remove('reset'); // Remove the reset class
        h1ElementMoveUp.style.animation = 'combinedAnimation 2s 1s ease-in-out forwards';
    };

    const stopAnimationMoveUp = () => {
        h1ElementMoveUp.classList.remove('active');
        h1ElementMoveUp.classList.add('reset'); // Add a class to reset the initial state
        h1ElementMoveUp.style.animation = 'none'; // Reset animation
        void h1ElementMoveUp.offsetWidth; // Trigger reflow for the next animation
        h1ElementMoveUp.style.animation = null; // Re-enable animation
    };

    const observerCallbackMoveUp = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.001) {
                stopAnimationMoveUp(); // Reset animations when id=5 is slightly visible
            }
            if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                startAnimationMoveUp(); // Start animation once fully visible
            } else {
                stopAnimationMoveUp();
            }
        });
    };

    const observerMoveUp = new IntersectionObserver(observerCallbackMoveUp, { threshold: [0.001, 1] });

    observerMoveUp.observe(targetElementMoveUp);

    // Listen for visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            stopAnimationMoveUp();
        }
    });
});
// AT 3s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-3s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 3s gpa 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-3s-gpa');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 3s Google 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');

    const animations = [
        { class: 'animated-text-3s-google-g1', color: '#0081ff', duration: 3 },
        { class: 'animated-text-3s-google-o1', color: '#ff3606', duration: 3.2 },
        { class: 'animated-text-3s-google-o2', color: '#ffbe00', duration: 3.4 },
        { class: 'animated-text-3s-google-g2', color: '#0081ff', duration: 3.6 },
        { class: 'animated-text-3s-google-l', color: '#00b323', duration: 3.8 },
        { class: 'animated-text-3s-google-e', color: '#ff3606', duration: 4 }
    ];

    animations.forEach(animation => {
        const animatedElements = containerElement.querySelectorAll('.' + animation.class);

        const keyframes = `
            0% { color: #fefefe; }
            50% { color: #fefefe; }
            100% { color: ${animation.color}; }
        `;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`@keyframes colorChange${animation.class} ${animation.duration}s ease-in-out 3s { ${keyframes} }`, styleSheet.cssRules.length);
        styleSheet.insertRule(`.${animation.class} { color: #fefefe; animation: none; }`, styleSheet.cssRules.length);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    if (!target.classList.contains('active')) {
                        // Element is entering the view
                        target.classList.add('active');
                        target.style.animation = `colorChange${animation.class} ${animation.duration}s ease-in-out 3s`;
                    }
                } else {
                    // Element is leaving the view
                    target.classList.remove('active');
                    target.style.animation = 'none'; // Reset animation when out of view
                }
            });
        }, { threshold: 1 });

        animatedElements.forEach(element => {
            observer.observe(element);

            element.addEventListener('animationiteration', () => {
                // Animation iteration event, remove 'active' class to restart animation
                element.classList.remove('active');
            });
        });
    });
});
// AT 4s css 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-css');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s html 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-html');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s js 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-js');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s ai 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-ai');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s aps 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-aps');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s app 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-app');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s axd 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-axd');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s Figma 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');

    const animations = [
        { class: 'animated-text-4s-figma-f', color: '#f14e1c', duration: 3 },
        { class: 'animated-text-4s-figma-i', color: '#a25aff', duration: 3.2 },
        { class: 'animated-text-4s-figma-g', color: '#0acf84', duration: 3.4 },
        { class: 'animated-text-4s-figma-m', color: '#ff7362', duration: 3.6 },
        { class: 'animated-text-4s-figma-a', color: '#19bcfe', duration: 3.8 }
    ];

    animations.forEach(animation => {
        const animatedElements = containerElement.querySelectorAll('.' + animation.class);

        const keyframes = `
            0% { color: #fefefe; }
            50% { color: #fefefe; }
            100% { color: ${animation.color}; }
        `;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`@keyframes colorChange${animation.class} ${animation.duration}s ease-in-out 4s { ${keyframes} }`, styleSheet.cssRules.length);
        styleSheet.insertRule(`.${animation.class} { color: #fefefe; animation: none; }`, styleSheet.cssRules.length);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    if (!target.classList.contains('active')) {
                        // Element is entering the view
                        target.classList.add('active');
                        target.style.animation = `colorChange${animation.class} ${animation.duration}s ease-in-out 4s`;
                    }
                } else {
                    // Element is leaving the view
                    target.classList.remove('active');
                    target.style.animation = 'none'; // Reset animation when out of view
                }
            });
        }, { threshold: 1 });

        animatedElements.forEach(element => {
            observer.observe(element);

            element.addEventListener('animationiteration', () => {
                // Animation iteration event, remove 'active' class to restart animation
                element.classList.remove('active');
            });
        });
    });
});
// AT 5s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-5s');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});