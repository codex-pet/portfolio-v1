<template>
    <div class="main-container">

        <div class="main-title">
            <img src="../assets/img/Assets.png" alt="Profile">
            <div class="sub-title">
                <h1>Peter Robert Ayono</h1>
                <div class="address">
                    <i class="mdi mdi-home-map-marker"></i>
                    <p>Dipolog City, Philippines</p>
                </div>
                <p class="role">Frontend \ Backend Developer</p>
                <p class="typing-text">{{ displayedText }}</p>
                <div class="sub-title-btn">
                    <div class="send-email" @click="openModal">
                        <i class="mdi mdi-email-outline"></i>
                        <p>Send Email</p>
                        <span>></span>
                    </div>
                    <NuxtLink to="/resume" class="view-resume">
                        <i class="mdi mdi-folder-arrow-down-outline"></i>
                        <p>View Resume</p>
                        <span>></span>
                    </NuxtLink>
                    <div class="view-github" @click="goToGithub">
                        <!-- <i class="mdi mdi-application-brackets-outline"></i> -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-github" />
                        <p>View Github</p>
                        <span>></span>
                    </div>
                </div>
            </div>
            <div class="dark-light" @click="toggleTheme">
                <i :class="isDark ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny'"></i>
            </div>
        </div>

        <div class="main-body">

            <div class="row-one">
                <div class="about">
                    <div class="about-title">
                        <i class="mdi mdi-code-block-tags"></i>
                        <h3>About</h3>
                    </div>
                    <p>
                        As a dedicated Computer Science student, I've immersed myself in the core principles of algorithms, data structures, and software engineering. This rigorous academic foundation has sharpened my analytical abilities, fueling my passion for dissecting complex problems and architecting robust, scalable solutions.

                        <br><br> My journey has led me to specialize in frontend development, where I transform intricate functionalities into intuitive and visually compelling user experiences. I thrive on blending technical precision with aesthetic design, constantly exploring modern web technologies and design paradigms to create engaging and seamless digital interactions.

                        <br><br> I am committed to continuous learning and growth within the dynamic tech landscape. Eager to contribute my skills, I seek opportunities to collaborate on innovative projects that demand both technical excellence and a user-centric design approach.
                    </p>
                </div>
                <div class="experience">
                    <div class="experience-title">
                        <i class="mdi mdi-code-tags"></i>
                        <h2>Experience</h2>
                    </div>
                    <div class="experience-body">
                        <div class="experience-text">
                            <div class="timeline-dot"></div>
                            <h4>Backend Develoer</h4>
                            <p class="company">Raldin Casidar Studios (RCS)</p>
                            <p class="year">2024-2025</p>
                        </div>
                        <div class="experience-text">
                            <div class="timeline-dot"></div>
                            <h4>Frontend Develoer</h4>
                            <p class="company">Raldin Casidar Studios (RCS)</p>
                            <p class="year">2024-2025</p>
                        </div>
                        <div class="experience-text">
                            <div class="timeline-dot"></div>
                            <h4>Creatives Committee</h4>
                            <p class="company"> JRMSU Main Campus</p>
                            <p class="year">2023-2025</p>
                        </div>
                        <div class="experience-text">
                            <div class="timeline-dot"></div>
                            <h4>BS Computer Science</h4>
                            <p class="company">Jose Rizal Memorial State University - Main Campus</p>
                            <p class="year">2023-2025</p>
                        </div>
                        <div class="experience-text">
                            <div class="timeline-dot"></div>
                            <h4>Freelancer</h4>
                            <p class="company">Self Employed</p>
                            <p class="year">2021-2023</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row-two">
                <div class="tech-stack">
                    <div class="tech-stack-title">
                        <div class="left-side">
                            <font-awesome-icon class="icon" icon="fa-solid fa-layer-group" />
                            <h2>Tech Stack</h2>
                        </div>
                        <div class="right-side">
                            <select id="stack" name="stack" v-model="selectedFilter">
                                <option value="all">All</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="tools">Tools</option>
                            </select>
                        </div>
                    </div>
                    <div class="tech-stack-body">
                        <div class="stack" v-for="stack in filteredStacks" :key="stack.name">
                            <img :src="stack.imageSrc" :alt="stack.name">
                            <p>{{ stack.name.toUpperCase() }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row-three">
                <div class="beyond-syntax">
                    <div class="title">
                        <i class="mdi mdi-arm-flex-outline"></i>
                        <h2>Beyond the syntax</h2>
                    </div>
                    <div class="body">
                        <p>
                            When I'm not glued to a screen coding, I love hitting the gym to clear my head. I'm also big on staying updated, so you'll often catch me exploring new tech or diving into some study.

                            <br><br> And for downtime? Definitely some online gaming or just hanging out with my partner.
                        </p>
                    </div>
                </div>
                <div class="projects">
                    <div class="projects-title">
                        <div class="left-side">
                            <!-- <font-awesome-icon class="icon" icon="fa-solid fa-project-diagram" /> -->
                            <i class="icon mdi mdi-chart-tree"></i>
                            <h2>Recents Projects</h2>
                        </div>
                        <NuxtLink to="/projects" class="right-side">
                            <p>View All <span>></span></p>
                        </NuxtLink>
                    </div>
                    <div class="projects-body">
                        <div class="project">
                            <div class="title">
                                <i class="mdi mdi-dots-horizontal"></i>
                                <i class="mdi mdi-arrow-right"></i>
                            </div>
                            <div class="body">
                                <img src="../assets/img/projects/bbud.png" alt="B-Bud">
                                <div class="text">
                                    <h4>B-Bud</h4>
                                    <p>Barangay System Management</p>
                                </div>
                            </div>
                        </div>
                        <div class="project">
                            <div class="title">
                                <i class="mdi mdi-dots-horizontal"></i>
                                <i class="mdi mdi-arrow-right"></i>
                            </div>
                            <div class="body">
                                <img src="../assets/img/projects/angels-app.png" alt="Angels-App">
                                <div class="text">
                                    <h4>Angel's Pizza</h4>
                                    <p>Food Delivery <br>Application</p>
                                </div>
                            </div>
                        </div>
                        <div class="project">
                            <div class="title">
                                <i class="mdi mdi-dots-horizontal"></i>
                                <i class="mdi mdi-arrow-right"></i>
                            </div>
                            <div class="body">
                                <img src="../assets/img/projects/mediseen.png" alt="MediSeen">
                                <div class="text">
                                    <h4>MediSeen</h4>
                                    <p>Medicine Finding <br>System</p>
                                </div>
                            </div>
                        </div>
                        <div class="project">
                            <div class="title">
                                <i class="mdi mdi-dots-horizontal"></i>
                                <i class="mdi mdi-arrow-right"></i>
                            </div>
                            <div class="body">
                                <img src="../assets/img/projects/angels-web.png" alt="Angels-Web">
                                <div class="text">
                                    <h4>Angel's Pizza</h4>
                                    <p>Food E-commerce <br>Website</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row-four">
                <div class="certifications">
                    <div class="certifications-title">
                        <div class="left-side">
                            <i class="mdi mdi-certificate-outline"></i>
                            <h2>Certifications</h2>
                        </div>
                        <NuxtLink to="/certifications" class="right-side">
                            <p>View All <span>></span></p>
                        </NuxtLink>
                    </div>
                    <div class="certifications-body">
                        <div class="certificate">
                            <h4>Philippine Startup Challenge 9 (PSC)</h4>
                            <p>Awarded with a certificate "Special Jury Awad" or outstanding creativity and innovation.</p>
                        </div>
                        <div class="certificate">
                            <h4>ZAMBASULTA Business and Innovation Summit 2024</h4>
                            <p>Was an attendee in PSC 9 at Zamboanga City for the iDEYA Pitching competition.</p>
                        </div>
                        <div class="certificate">
                            <h4>CLAWVATION: Startup Innovation Video Pitching Competition</h4>
                            <p>Was held a Champion and awarded for being outstanding, innovative, and strategic.</p>
                        </div>
                    </div>
                </div>
                <div class="socials">
                    <div class="socials-title">
                        <i class="mdi mdi-link-variant"></i>
                        <h2>Socials</h2>
                    </div>
                    <div class="socials-body">
                        <div class="social" @click="goToLinkedin">
                            <img src="../assets/img/socials/linkedin.png" alt="linkedin">
                            <div class="text">
                                <h4>Linkedin</h4>
                                <p>peter.ayono</p>
                            </div>
                        </div>
                        <div class="social" @click="goToGithub">
                            <img src="../assets/img/socials/github.png" alt="github" class="social-icon-invert">
                            <div class="text">
                                <h4>Github</h4>
                                <p>codex-pet</p>
                            </div>
                        </div>
                        <div class="social" @click="goToInstagram"> 
                            <img src="../assets/img/socials/instagram.png" alt="instagram">
                            <div class="text">
                                <h4>Instagram</h4>
                                <p>p3tirrr_</p>
                            </div>
                        </div>
                        <div class="social" @click="goToFacebook">
                            <img src="../assets/img/socials/facebook.png" alt="facebook">
                            <div class="text">
                                <h4>Facebook</h4>
                                <p>peter.ayono</p>
                            </div>
                        </div>
                        <div class="social" @click="goToTiktok">
                            <img src="../assets/img/socials/tiktok.png" alt="tiktok">
                            <div class="text">
                                <h4>Tiktok</h4>
                                <p>pitirrrr</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <Footer />


        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <button class="close-btn" @click="closeModal"><i class="mdi mdi-close"></i></button>
                <h2>Book an Appointment</h2>
                <p class="modal-subtitle">Let's discuss your project.</p>

                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" v-model="formData.user_name" required placeholder="John Doe" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="formData.user_email" required placeholder="john@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="date">Requested Date</label>
                        <input type="date" id="date" v-model="formData.booking_date" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Project Details</label>
                        <textarea id="message" v-model="formData.message" rows="4" required placeholder="Tell me about your project..."></textarea>
                    </div>

                    <p v-if="statusMessage" :class="['status-message', isError ? 'error' : 'success']">
                        {{ statusMessage }}
                    </p>

                    <button type="submit" class="submit-btn" :disabled="isLoading">
                        {{ isLoading ? 'Sending...' : 'Send Request' }}
                    </button>
                </form>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import emailjs from '@emailjs/browser';
import { useTheme } from '~/composables/useTheme';

const config = useRuntimeConfig();
const { isDark, toggleTheme } = useTheme();

const quotes = [
    "turning caffeine into code",
    "building pixel-perfect interfaces",
    "crafting robust backend systems",
    "transforming ideas into digital reality",
    "solving problems, one line at a time",
    "passionate about clean, scalable code",
    "bridging design and functionality",
    "always learning, always evolving",
    "yawa kapoy naman kaayo ni",
    "creating seamless user experiences",
    "architecting the web with passion"
];

const displayedText = ref('');
const currentQuoteIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = ref(100);
let timeoutId = null;

const typeEffect = () => {
    const currentQuote = quotes[currentQuoteIndex.value];
    
    if (isDeleting.value) {
        displayedText.value = currentQuote.substring(0, displayedText.value.length - 1);
        typingSpeed.value = 50;
    } else {
        displayedText.value = currentQuote.substring(0, displayedText.value.length + 1);
        typingSpeed.value = 100;
    }

    if (!isDeleting.value && displayedText.value === currentQuote) {
        isDeleting.value = true;
        typingSpeed.value = 2000; // Pause at the end of typing
    } else if (isDeleting.value && displayedText.value === '') {
        isDeleting.value = false;
        currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.length;
        typingSpeed.value = 500; // Pause before starting next quote
    }

    timeoutId = setTimeout(typeEffect, typingSpeed.value);
};

onMounted(() => {
    typeEffect();
});

onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId);
});


const selectedFilter = ref('all');

const techStacks = ref([
    { name: 'Vue', imageSrc: new URL('../assets/img/stacks/vuejs.svg', import.meta.url).href, category: 'frontend' },
    { name: 'JavaScript', imageSrc: new URL('../assets/img/stacks/javascript.svg', import.meta.url).href, category: 'frontend' },
    { name: 'React', imageSrc: new URL('../assets/img/stacks/react.svg', import.meta.url).href, category: 'frontend' },
    { name: 'Node.js', imageSrc: new URL('../assets/img/stacks/nodejs.svg', import.meta.url).href, category: 'backend' },
    { name: 'Python', imageSrc: new URL('../assets/img/stacks/python.svg', import.meta.url).href, category: 'backend' },
    { name: 'PHP', imageSrc: new URL('../assets/img/stacks/php.svg', import.meta.url).href, category: 'backend' },
    { name: 'C#(CSharp)', imageSrc: new URL('../assets/img/stacks/csharp.svg', import.meta.url).href, category: 'backend' },
    { name: 'Nuxt.JS', imageSrc: new URL('../assets/img/stacks/nuxtjs.svg', import.meta.url).href, category: 'frontend' },
    { name: 'Sass', imageSrc: new URL('../assets/img/stacks/sass.svg', import.meta.url).href, category: 'frontend' },
    { name: 'Bootstrap', imageSrc: new URL('../assets/img/stacks/bootstrap.svg', import.meta.url).href, category: 'frontend' },
    { name: 'Tailwind', imageSrc: new URL('../assets/img/stacks/tailwind.svg', import.meta.url).href, category: 'frontend' },
    { name: 'MongoDB', imageSrc: new URL('../assets/img/stacks/mongodb.svg', import.meta.url).href, category: 'backend' },
    { name: 'MySQL', imageSrc: new URL('../assets/img/stacks/mysql.svg', import.meta.url).href, category: 'backend' },
    { name: 'Git', imageSrc: new URL('../assets/img/stacks/git.svg', import.meta.url).href, category: 'tools' },
    { name: 'GitHub', imageSrc: new URL('../assets/img/stacks/github.svg', import.meta.url).href, category: 'tools' },
    { name: 'VSCode', imageSrc: new URL('../assets/img/stacks/vscode.svg', import.meta.url).href, category: 'tools' },
    { name: 'Firebase', imageSrc: new URL('../assets/img/stacks/firebase.svg', import.meta.url).href, category: 'backend' },
    { name: 'Ionic', imageSrc: new URL('../assets/img/stacks/ionic.svg', import.meta.url).href, category: 'frontend' },
    { name: 'Figma', imageSrc: new URL('../assets/img/stacks/figma.svg', import.meta.url).href, category: 'tools' },
]);

const filteredStacks = computed(() => {
    if (selectedFilter.value === 'all') {
        return techStacks.value;
    } else {
        return techStacks.value.filter(stack => stack.category === selectedFilter.value);
    }
});

const goToGithub = () => {
  window.open('https://github.com/codex-pet', '_blank');
};
const goToInstagram = () => {
  window.open('https://www.instagram.com/p3tirrrr_/', '_blank');
};
const goToFacebook = () => {
  window.open('https://www.facebook.com/peter.ayono/', '_blank');
};
const goToTiktok = () => {
  window.open('https://www.tiktok.com/@pitirrrrr', '_blank');
};
const goToLinkedin = () => {
  window.open('https://www.linkedin.com/in/peter-ayono/', '_blank'); // Corrected to a LinkedIn URL
};

// --- NEW MODAL & EMAIL LOGIC ---
const isModalOpen = ref(false);
const isLoading = ref(false);
const statusMessage = ref('');
const isError = ref(false);

const formData = reactive({
    user_name: '',
    user_email: '',
    booking_date: '',
    message: ''
});

const openModal = () => {
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden'; // Prevents background scrolling when modal is open
};

const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = 'auto'; // Restores scrolling
    
    // Reset form and messages
    formData.user_name = '';
    formData.user_email = '';
    formData.booking_date = '';
    formData.message = '';
    statusMessage.value = '';
};

const submitForm = async () => {
    isLoading.value = true;
    statusMessage.value = '';
    isError.value = false;

    try {
        await emailjs.send(
            config.public.emailjsServiceId,
            config.public.emailjsTemplateId,
            {
                user_name: formData.user_name,
                user_email: formData.user_email,
                booking_date: formData.booking_date,
                message: formData.message,
            },
            config.public.emailjsPublicKey
        );
        
        statusMessage.value = 'Success! Your request has been sent.';
        isError.value = false;
        
        // Auto-close modal after 2 seconds
        setTimeout(() => {
            if(isModalOpen.value) closeModal();
        }, 2000);

    } catch (error) {
        console.error('FAILED...', error);
        statusMessage.value = 'Failed to send message. Please try again later.';
        isError.value = true;
    } finally {
        isLoading.value = false;
    }
};

</script>

<style scoped>
/* Add this new rule for the hover effect */
[style*="cursor: pointer"], a, button, .send-email, .view-resume, .view-github, .project, .stack, .certificate, .social, select, input[type="radio"] {
    transition: transform 0.2s ease-in-out;
}

[style*="cursor: pointer"]:hover, a:hover, button:hover, .send-email:hover, .view-resume:hover, .view-github:hover, .project:hover, .stack:hover, .certificate:hover, .social:hover, select:hover, input[type="radio"]:hover {
    transform: translateY(-5px);
    /* transform: scaleY(1.05); */
}


.main-container {
    max-width: 950px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 20px; 
    /* outline: 1px solid red; */

    .main-title {
        display: flex;
        padding:40px 0;

        img {
            width: 190px;
            height: 190px;
            border-radius: 20px;
            object-fit: cover; 

            &:hover {

                cursor: pointer;
                /* content: url('../assets/img/cat.jfif');  */
                content: url('../assets/img/prof-thumb.jpg'); 
            
            }
                
        }

        .sub-title {

            margin-left: 40px;

            .address {
                display: flex;
                align-items:center;

                i {
                    font-size:25px;
                }

                p {
                    margin-left: 10px;
                    font-size:18px;
                }
            }

            .role {
                font-size: 22px;
                font-weight: 600;
            }

            .typing-text {
                font-style: italic;
                min-height: 1.2em; /* Prevent layout shift */
                &::after {
                    content: '|';
                    margin-left: 2px;
                    animation: blink 0.7s infinite;
                    font-style: normal;
                }
            }

            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }

            .sub-title-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 10px;

                .send-email {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--btn-primary-bg);
                    color: var(--btn-primary-text);
                    border-radius: 6px;
                    padding: 2px 20px;
                    margin-right: 20px;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 15px; 
                        font-size: 13px;
                    }

                }

                .view-resume {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 6px;
                    padding: 2px 20px;
                    margin-right: 20px;
                    border: 1px solid var(--border-color);
                    cursor: pointer;
                    color: var(--text-primary);
                    text-decoration: none;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 15px; 
                        font-size: 13px;
                        
                    }
                }

                .view-github {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 6px;
                    padding: 5px 20px;
                    margin-right: 20px;
                    border: 1px solid var(--border-color);
                    cursor: pointer;

                    .icon {
                        width: 20px;
                        height: 20px;
                    }

                    p {
                        margin:0 15px; 
                        font-size: 13px;
                    }
                }
            }
        }

        .dark-light {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            background-color: var(--bg-card);
            transition: all 0.3s ease;

            i {
                font-size: 20px;
                color: var(--text-primary);
                transition: transform 0.3s ease;
            }

            &:hover {
                background-color: var(--bg-card-hover);
                i {
                    transform: rotate(30deg);
                }
            }
        }
    }

    .main-body {
        display: grid;
        gap: 1rem;

       .row-one {
        display: grid;
        grid-template-columns: 2.6fr 1.4fr; /* Adjusted for better content balance */

            .about {
                padding: 20px 30px;
                border-radius: 25px;
                border: 1px solid var(--border-color);
                .about-title {
                    display:flex;
                    align-items: center;

                    i {
                        font-size: 30px;
                        margin-right: 10px;
                    }

                    h3 {
                        font-size: 25px;
                    }
                
                }

                p {
                    font-size: 16px;
                    margin-top: 15px;
                }
            }

            .experience {
                padding: 15px 30px;
                border-radius: 25px;
                border: 1px solid var(--border-color);
                margin-left: 20px;

                .experience-title {
                    display:flex;
                    align-items: center;

                    i {
                        font-size: 30px;
                        margin-right: 10px;
                        margin-top: 5px;
                    }

                    h3 {
                        font-size: 25px;
                    }
                
                }
                
                .experience-body {
                    border-left: 3px solid var(--timeline-border);
                    border-radius: 5px;
                    padding-left: 30px;
                    margin-left: 10px;
                    margin-top: 20px;
                    position: relative; 


                    .experience-text {
                        margin-bottom: 10px;
                        position: relative;


                        .timeline-dot {
                            position: absolute;
                            left: -38px; 
                            top: 8px; 
                            width: 13px;
                            height: 13px;
                            border-radius: 50%;
                            background-color: var(--timeline-dot); 
                            border-color: var(--timeline-dot);
                        }

                       

                        h4 {
                            font-size: 16px;
                        }

                        .company {
                            font-size: 14px;
                        }

                        .year {
                            max-width: 98px;
                            width: 100%;
                            padding: 3px 15px;
                            border-radius: 20px;
                            border: 1px solid var(--border-color);
                            font-size: 12px;
                            margin-top: 3px;
                        }
                    }
                }
            }

       }
       
       .row-two {
            

            .tech-stack {

                padding: 20px 30px;
                border-radius: 25px;
                border: 1px solid var(--border-color);
                background-color: var(--bg-secondary);


                .tech-stack-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .left-side {
                        display: flex;
                        align-items: center;

                        .icon {
                            margin-right: 10px;
                            font-size: 30px;
                        }

                        h2 {
                            font-size: 25px;

                        }
                    }

                    .right-side {

                        select {
                            font-size: 16px;
                            padding: 5px;
                            border-radius: 6px;
                            border: 1px solid var(--border-color);
                            cursor: pointer;
                            background-color: var(--bg-card);
                            color: var(--text-primary);
                        } 
                    }
                }

                .tech-stack-body {

                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px 15px; 
                    margin-top: 20px;
                    margin-bottom: 8px;


                    .stack {
                        
                        display: flex;
                        align-items: center;
                        padding: 5px 10px;
                        border-radius: 6px;
                        border: 1px solid var(--border-color);
                        background-color: var(--bg-card);
                        cursor: pointer;
                        


                        img {
                            width: 30px;
                            height: 30px;
                            margin-right: 10px;
                            /* object-fit: contain; */
                        }
                    }
                }
            }
       }

       .row-three {

            display: grid;
            grid-template-columns: 1.3fr 2.7fr; /* Adjust for balance */
            gap: 1rem;

            .beyond-syntax {
                padding: 20px 30px;
                border-radius: 25px;
                border: 1px solid var(--border-color);

                .title {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;

                    i {
                        font-size: 30px;
                        margin-right: 10px;
                    } 

                    h2 {
                        font-size: 20px;
                    }
                }

                .body {
                    font-size: 16px;
                } 
            }

            .projects {
                padding: 20px 30px;
                border-radius: 25px;
                border: 1px solid var(--border-color);

                .projects-title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .left-side {
                        display: flex;
                        align-items: center;

                        .icon {
                            margin-right: 10px;
                            font-size: 30px;
                        }

                        h2 {
                            font-size: 25px;

                        }
                    }

                    .right-side {
                        cursor: pointer;
                        color: var(--text-primary);
                        text-decoration: none;

                        span {
                            margin-left: 10px;
                        }
                    }
                }

                .projects-body {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px; 
                    margin-top: 25px;
                    

                    .project {
                        /* 1. Increased padding for a larger, more premium feel */
                        padding: 20px; 
                        border-radius: 20px;
                        border: 1px solid var(--border-color);
                        width: calc(50% - 7.5px); 
                        cursor: pointer;

                        /* 2. Added flexbox to control the inner height and spacing */
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between; /* Pushes icons up, and content down */
                        min-height: 80px; /* <--- Change this number (e.g., 170px) if you need them even taller */

                        .title {
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 15px; /* Ensures a gap if screen gets small */

                            i {
                                font-size: 20px;
                            }
                        }  

                        .body {
                            display: flex;
                            align-items: center;

                            img {
                                margin-right: 12px;
                            }

                            .text {
                                h4 {
                                    font-size: 18px; 
                                    margin-bottom: 3px; /* slight gap between title and desc */
                                }
                                p {
                                    font-size: 13px; 
                                    line-height: 1.2;
                                }
                            }
                        }
                    }
                }

            }
       }

       .row-four {
            
            display: grid;
            grid-template-columns: 3fr 1fr; /* Adjust for balance */
            gap: 1rem;
            
            .certifications {

                padding: 20px 30px;
                border-radius: 25px;
                border: 1px solid var(--border-color);

                .certifications-title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .left-side {
                        display: flex;
                        align-items: center;

                        i {
                            margin-right: 10px;
                            font-size: 30px;
                        }

                        h2 {
                            font-size: 25px;

                        }
                    }

                    .right-side {
                        cursor: pointer;
                        color: var(--text-primary);
                        text-decoration: none;

                        span {
                            margin-left: 10px;
                        }
                    }
                }

                .certifications-body {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px; 
                    margin-top: 25px;

                    .certificate {
                        padding: 15px 20px;
                        border: 1px solid var(--border-color);
                        border-radius: 10px;

                    }

                }
            }

            .socials {
                padding: 20px 25px;
                border-radius: 25px;
                border: 1px solid var(--border-color);
                background-color: var(--bg-secondary);

                .socials-title {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;


                     i {
                        margin-right: 10px;
                        font-size: 30px;
                    }

                    h2 {
                        font-size: 25px;

                    }
                }

                .socials-body {
                    

                    .social {
                        display: flex;
                        align-items:center;
                        padding: 10px 15px;
                        border-radius: 10px;
                        border: 1px solid var(--border-color);
                        margin-bottom: 10px;
                        cursor: pointer;
                        background-color: var(--bg-card);

                        img {
                            margin-right: 10px;
                            width: 35px;
                            height: 35px;
                        }

                        .text {
                            h4 {
                                font-size: 16px;
                            }

                            p {
                                font-size: 12px;
                                color: var(--text-light);
                            }
                        }
                    }
                }
            }
       }
    }


}

/* --- MODAL STYLES --- */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--modal-overlay);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background: var(--modal-bg);
    padding: 30px;
    border-radius: 20px;
    width: 90%;
    max-width: 450px;
    position: relative;
    box-shadow: 0 10px 30px var(--shadow-color);
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--close-btn-color);
}

.close-btn:hover {
    color: var(--close-btn-hover);
}

.modal-content h2 {
    font-size: 24px;
    margin-bottom: 5px;
    color: var(--text-primary);
}

.modal-subtitle {
    color: var(--text-light);
    margin-bottom: 20px;
    font-size: 14px;
}

.form-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
}

.form-group input,
.form-group textarea {
    padding: 12px 15px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-family: inherit;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    background: var(--bg-card);
    color: var(--text-primary);
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--text-primary);
}

.submit-btn {
    width: 100%;
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
}

.submit-btn:disabled {
    background-color: #666;
    cursor: not-allowed;
}

.status-message {
    margin-top: 15px;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
}

.status-message.success { color: #28a745; }
.status-message.error { color: #dc3545; }

/* TABLET SCREENS (Under 950px) */
@media (max-width: 950px) {
    /* Collapse the multi-column grids into single columns */
    .main-container .main-body .row-one,
    .main-container .main-body .row-three,
    .main-container .main-body .row-four {
        grid-template-columns: 1fr;
    }

    /* Remove the left margin from the experience section since it's now stacked */
    .main-container .main-body .row-one .experience {
        margin-left: 0;
        margin-top: 20px;
    }


}

/* MOBILE SCREENS (Under 650px) */
@media (max-width: 650px) {
    /* Main Header Stacking */
    .main-container .main-title {
        flex-direction: column;
        text-align: center;
        align-items: center;
        position: relative; 
    }

    .main-container .main-title .sub-title {
        margin-left: 0;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-container .main-title .sub-title .address {
        justify-content: center;
    }

    .main-container .main-title .dark-light {
        position: absolute;
        top: 20px;
        right: 0;
    }

    /* Button Stacking */
    .main-container .main-title .sub-title .sub-title-btn {
        flex-direction: column;
        width: 100%;
        gap: 15px;
    }

    .main-container .main-title .sub-title .sub-title-btn > div,
    .main-container .main-title .sub-title .sub-title-btn > a {
        margin-right: 0;
        width: 100%;
        max-width: 300px;
    }

    /* Reduce internal padding of all boxed sections on mobile to prevent "squishing" */
    .main-container .main-body .row-one .about,
    .main-container .main-body .row-one .experience,
    .main-container .main-body .row-two .tech-stack,
    .main-container .main-body .row-three .beyond-syntax,
    .main-container .main-body .row-three .projects,
    .main-container .main-body .row-four .certifications,
    .main-container .main-body .row-four .socials {
        padding: 15px; 
    }

    /* Tech Stack Header adjust */
    .main-container .main-body .row-two .tech-stack .tech-stack-title {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    /* Section Header spacing */
    .main-container .main-body .row-three .projects .projects-title,
    .main-container .main-body .row-four .certifications .certifications-title {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    /* ----- NEW PROJECT CARDS MOBILE FIX ----- */
    .main-container .main-body .row-three .projects .projects-body {
        flex-direction: column; /* Forces the flex wrapper to stack vertically */
    }

    .main-container .main-body .row-three .projects .projects-body .project {
        width: 100%; /* Takes up the full width of the phone screen */
        min-height: 130px; /* Reduces the height slightly so it looks better on mobile */
    }
    /* ---------------------------------------- */

    /* Ensure social text doesn't overflow */
    .main-container .main-body .row-four .socials .socials-body .social .text h4 {
        word-break: break-all;
    }
}
</style>
