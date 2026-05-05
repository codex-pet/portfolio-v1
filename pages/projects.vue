<template>
    <div class="main-container">
        <div class="main-header">
            <NuxtLink to="/" class="back-btn">
                <i class="mdi mdi-arrow-left"></i>
                <p>Back to Home</p>
            </NuxtLink>
            <p class="title-header">All Projects</p>
        </div>

        <div class="main-body">
            <!-- Project Sections -->
            <div class="bbud-section">
                <img class="splash-img" src="../assets/img/projects/bbud-splash.png" alt="bbud">
                <div class="main-title">
                    <div class="title">
                        <h4>B-Bud</h4>
                        <p>Barangay System Management</p>
                    </div>
                    <div class="stacks">
                        <img src="/img/stacks/vuejs.svg" alt="vue">
                        <img src="/img/stacks/javascript.svg" alt="javascript">
                        <img src="/img/stacks/nuxtjs.svg" alt="nuxt">
                        <img src="/img/stacks/mongodb.svg" alt="mongodb">
                    </div>
                </div>
                <div class="divider"></div>
                <div class="actions">
                    <div class="live-demo" @click="goToBbud">
                        <i class="mdi mdi-webcam"></i>
                        <p>Live Demo</p>
                    </div>
                    <div class="view-details" @click="openModal('bbud')">
                        <i class="mdi mdi-eye-outline"></i>
                        <p>View Details</p>
                    </div>
                </div>
            </div>

            <div class="mediseen-section">
                <img class="splash-img" src="../assets/img/projects/mediseen-splash.png" alt="mediseen">
                <div class="main-title">
                    <div class="title">
                        <h4>MediSeen</h4>
                        <p>Medicine Finding System</p>
                    </div>
                    <div class="stacks">
                        <img src="/img/stacks/vuejs.svg" alt="vue">
                        <img src="/img/stacks/javascript.svg" alt="javascript">
                        <img src="/img/stacks/nuxtjs.svg" alt="nuxt">
                        <img src="/img/stacks/firebase.svg" alt="firebase">
                    </div>
                </div>
                <div class="divider"></div>
                <div class="actions">
                    <div class="live-demo" @click="goToMediseen">
                        <i class="mdi mdi-webcam"></i>
                        <p>Live Demo</p>
                    </div>
                    <div class="view-details" @click="openModal('mediseen')">
                        <i class="mdi mdi-eye-outline"></i>
                        <p>View Details</p>
                    </div>
                </div>
            </div>

            <div class="angelsweb-section">
                <img class="splash-img" src="../assets/img/projects/angelsweb-splash.png" alt="angelsweb">
                <div class="main-title">
                    <div class="title">
                        <h4>Angel's Pizza</h4>
                        <p>Food E-commerce Website</p>
                    </div>
                    <div class="stacks">
                        <img src="/img/stacks/vuejs.svg" alt="vue">
                        <img src="/img/stacks/javascript.svg" alt="javascript">
                        <img src="/img/stacks/nuxtjs.svg" alt="nuxt">
                        <img src="/img/stacks/mongodb.svg" alt="mongodb">
                    </div>
                </div>
                <div class="divider"></div>
                <div class="actions">
                    <div class="live-demo" @click="goToAngelsweb">
                        <i class="mdi mdi-webcam"></i>
                        <p>Live Demo</p>
                    </div>
                    <div class="view-details" @click="openModal('angelsweb')">
                        <i class="mdi mdi-eye-outline"></i>
                        <p>View Details</p>
                    </div>
                </div>
            </div>

            <div class="angelsapp-section">
                <img class="splash-img" src="../assets/img/projects/angelsapp-splash.png" alt="angelsapp">
                <div class="main-title">
                    <div class="title">
                        <h4>Angel's Pizza</h4>
                        <p>Food Delivery Application</p>
                    </div>
                    <div class="stacks">
                        <img src="/img/stacks/ionic.svg" alt="ionic">
                        <img src="/img/stacks/javascript.svg" alt="javascript">
                        <img src="/img/stacks/nuxtjs.svg" alt="nuxt">
                        <img src="/img/stacks/mongodb.svg" alt="mongodb">
                    </div>
                </div>
                <div class="divider"></div>
                <div class="actions">
                    <div class="live-demo" @click="goToAngelsapp">
                        <i class="mdi mdi-webcam"></i>
                        <p>View Code</p>
                    </div>
                    <div class="view-details" @click="openModal('angelsapp')">
                        <i class="mdi mdi-eye-outline"></i>
                        <p>View Details</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />


        <!-- MODAL -->
        <div v-if="selectedProject" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <!-- MODAL HEADER -->
                <div class="header-wrapper">
                    <div class="header">
                        <div class="title">
                            <p>{{ selectedProject.name }}</p>
                        </div>
                        <button class="close-btn" @click="closeModal">
                            <i class="mdi mdi-close"></i>
                        </button>
                    </div>
                    <div class="sub-header">
                        <div class="sub-title">
                            <i class="mdi mdi-clock-outline"></i>
                            <p class="date">{{ selectedProject.date }}</p>
                        </div>
                        <div class="sub-title">
                            <i class="mdi mdi-laptop"></i>
                            <p class="type">{{ selectedProject.type }}</p>
                        </div>
                    </div>
                </div>
                
                <!-- SCROLLABLE MODAL BODY -->
                <div class="body-wrapper">
                    <div class="image-wrapper">
                        <img :src="selectedProject.splashImage" :alt="selectedProject.name">
                        <p class="status">Project Status: <span class="color"></span> {{ selectedProject.status }}</p>
                    </div>
                    
                    <div class="overview">
                        <div class="title-overview">
                            <i class="mdi mdi-note-text-outline"></i>
                            <p>Project Overview</p>
                        </div>
                        <p class="description">{{ selectedProject.longDescription }}</p>
                    </div>

                    <div class="tools">
                        <div class="title-tools">
                            <i class="mdi mdi-xml"></i>
                            <p>Tools and Technologies</p>
                        </div>
                        <div class="stack-images">
                            <img v-for="stack in selectedProject.stacks" :key="stack" :src="stack" :alt="stack.split('/').pop()">
                        </div>
                    </div>

                    <div class="features">
                        <div class="title-features">
                            <i class="mdi mdi-star-outline"></i>
                            <p>Key Features</p>
                        </div>
                        <div class="list">
                            <ul>
                                <li v-for="(feature, index) in selectedProject.features" :key="index">{{ feature }}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="contributors">
                        <div class="title-contributors">
                            <i class="mdi mdi-account-multiple-outline"></i>
                            <p>Contributor/s</p>
                        </div>
                        <div class="wrap-people">
                            <div class="people" v-for="contributor in selectedProject.contributors" :key="contributor.name" :class="{ 'clickable': contributor.link }" @click="goTo(contributor.link)">
                                <p class="name">{{ contributor.name }}</p>
                                <p class="role">{{ contributor.role }}</p>
                                <i v-if="contributor.link" class="mdi mdi-open-in-new icon-link"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- MODAL FOOTER -->
                <div class="footer-modal">
                    <div class="source-code" @click="goTo(selectedProject.sourceCodeUrl)">
                        <i class="mdi mdi-github"></i>
                        <p>Source Code</p>
                    </div>
                    <div class="demo" @click="goTo(selectedProject.liveDemoUrl)">
                        <i class="mdi mdi-webcam"></i>
                        <p>{{ selectedProject.liveDemoText }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const selectedProject = ref(null);

const projectDetails = {
    bbud: {
        name: 'B-Bud System',
        date: 'Feb - Oct 2025',
        type: 'Website',
        status: 'Completed',
        splashImage: new URL('../assets/img/projects/bbud-splash.png', import.meta.url).href,
        stacks: [
            '/img/stacks/vuejs.svg',
            '/img/stacks/javascript.svg',
            '/img/stacks/nuxtjs.svg',
            '/img/stacks/mongodb.svg'
        ],
        features: [
            'Real-time resident data management.',
            'Automated certificate and permit generation.',
            'Community announcements and alerts.',
            'Secure role-based access for barangay officials.',
            'Integrated reporting and analytics dashboard.',
            'AI Document Validation.'
        ],
        contributors: [
            { name: 'Raldin Casidar', role: 'Senior Web Developer', link: 'https://github.com/raldincasidar-studio' },
            { name: 'Peter Robert Ayono', role: 'Frontend & Backend Developer', link: 'https://github.com/codex-pet' },
            { name: 'Earl Jarvy Almosera', role: 'UI/UX Designer', link: 'https://www.facebook.com/earljarvy.almocera.1'}
        ],
        sourceCodeUrl: 'https://github.com/raldincasidar-studio/b-bud-v2',
        liveDemoUrl: 'https://b-bud.online/',
        liveDemoText: 'Live Demo',
        longDescription: 'Modernize your local governance with B-Bud, a smart management system designed to connect the barangay with its people. Beyond simplifying admin tasks and record management, B-Bud offers a mobile app where residents can easily request paperwork, handle transactions, and stay informed with the latest news—all secured by intelligent AI document validation.'
    },
    mediseen: {
        name: 'MediSeen',
        date: 'Jan - Apr 2025',
        type: 'Website',
        status: 'Completed',
        splashImage: new URL('../assets/img/projects/mediseen-splash.png', import.meta.url).href,
        stacks: [
            '/img/stacks/vuejs.svg',
            '/img/stacks/javascript.svg',
            '/img/stacks/nuxtjs.svg',
            '/img/stacks/firebase.svg'
        ],
        features: [
            'Search for medicines by name or generic equivalent.',
            'Secure role-based access for Admins.',
            'User reviews and ratings for system enhancement.',
            'Real-time inventory updates.'
        ],
        contributors: [
            { name: 'Raldin Casidar', role: 'Senior Web Developer', link: 'https://github.com/raldincasidar-studio' },
            { name: 'Peter Robert Ayono', role: 'Frontend & Backend Developer', link: 'https://github.com/codex-pet' },
            { name: 'Earl Jarvy Almosera', role: 'UI/UX Designer', link: 'https://www.facebook.com/earljarvy.almocera.1'},
            { name: 'Erl Yves Tagaro', role: 'Frontend Developer', link: 'https://www.facebook.com/rlyvs.py'}
        ],
        sourceCodeUrl: 'https://github.com/raldincasidar-studio/mediseen',
        liveDemoUrl: 'https://mediseen.vercel.app/',
        liveDemoText: 'Live Demo',
        longDescription: 'MediSeen is your dedicated search engine for medication knowledge. Instantly look up any drug to understand exactly how to use it, its potential side effects, and vital safety precautions for your well-being. Plus, you can join the conversation by leaving comments and sharing your experience to help others.'
    },
    angelsweb: {
        name: "Angel's Pizza",
        date: 'Nov 2024 - Present',
        type: 'Website',
        status: 'Staging',
        splashImage: new URL('../assets/img/projects/angelsweb-splash.png', import.meta.url).href,
        stacks: [
            '/img/stacks/vuejs.svg',
            '/img/stacks/javascript.svg',
            '/img/stacks/nuxtjs.svg',
            '/img/stacks/mongodb.svg'
        ],
        features: [
            'Interactive menu with customization options.',
            'Secure online payment gateway integration.',
            'User account and order history.',
            'Promotional deals and coupon system.',
            'Responsive design for desktop and mobile.'
        ],
        contributors: [
            { name: 'Raldin Casidar', role: 'Senior Web Developer', link: 'https://github.com/raldincasidar-studio' },
            { name: 'Peter Robert Ayono', role: 'Frontend Developer', link: 'https://github.com/codex-pet' },
            { name: 'Earl Jarvy Almosera', role: 'Frontend Developer', link: 'https://www.facebook.com/earljarvy.almocera.1'},
            { name: 'Erl Yves Tagaro', role: 'Frontend Developer', link: 'https://www.facebook.com/rlyvs.py'}
        ],
        sourceCodeUrl: 'https://github.com/user/angelsweb-repo',
        liveDemoUrl: 'https://angels-pizza.com/',
        liveDemoText: 'Live Demo',
        longDescription: "A fully functional e-commerce website for Angel's Pizza, allowing customers to browse the menu, customize their orders, and purchase their favorite pizza and pasta online for delivery or pickup."
    },
    angelsapp: {
        name: "Angel's Pizza App",
        date: 'Nov 2024 - Present',
        type: 'Mobile App',
        status: 'Staging',
        splashImage: new URL('../assets/img/projects/angelsapp-splash.png', import.meta.url).href,
        stacks: [
            '/img/stacks/ionic.svg',
            '/img/stacks/javascript.svg',
            '/img/stacks/nuxtjs.svg',
            '/img/stacks/mongodb.svg'
        ],
        features: [
            'Cross-platform compatibility (iOS and Android).',
            'Push notifications for order status updates.',
            'Geolocation for easy delivery address input.',
            'Loyalty rewards program integration.',
            'Offline access to the menu.'
        ],
        contributors: [
            { name: 'Raldin Casidar', role: 'Senior Web Developer', link: 'https://github.com/raldincasidar-studio' },
            { name: 'Peter Robert Ayono', role: 'Frontend Developer', link: 'https://github.com/codex-pet' },
            { name: 'Earl Jarvy Almosera', role: 'Frontend Developer', link: 'https://www.facebook.com/earljarvy.almocera.1'},
            { name: 'Erl Yves Tagaro', role: 'Frontend Developer', link: 'https://www.facebook.com/rlyvs.py'}
        ],
        sourceCodeUrl: 'https://github.com/DavidHeartBenetez/ionic-vue',
        liveDemoUrl: 'https://github.com/DavidHeartBenetez/ionic-vue',
        liveDemoText: 'View Code',
        longDescription: "A mobile application for Angel's Pizza that provides a seamless food ordering experience. Built with Ionic for cross-platform compatibility, it allows users to order on the go from their mobile devices."
    }
};

const openModal = (projectId) => {
  selectedProject.value = projectDetails[projectId];
};

const closeModal = () => {
  selectedProject.value = null;
};

watch(selectedProject, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const goToBbud = () => window.open('https://b-bud.online/', '_blank');
const goToMediseen = () => window.open('https://mediseen.vercel.app/', '_blank');
const goToAngelsweb = () => window.open('https://angels-pizza.com/', '_blank');
const goToAngelsapp = () => window.open('https://github.com/DavidHeartBenetez/ionic-vue', '_blank');

const goTo = (url) => {
  if (url) {
    window.open(url, '_blank');
  }
};
</script>

<style scoped>
/* =========================================
   GLOBAL STYLES & HOVER EFFECTS
   ========================================= */
[style*="cursor: pointer"], a, .live-demo, .view-details, .source-code, .demo, .close-btn {
    transition: all 0.2s ease-in-out;
}

.live-demo:hover, .view-details:hover {
    transform: translateY(-2px);
    color: #555;
}

/* Hover effect for the whole project card */
.bbud-section, .mediseen-section, .angelsweb-section, .angelsapp-section {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.bbud-section:hover, .mediseen-section:hover, .angelsweb-section:hover, .angelsapp-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.back-btn:hover i {
    transform: translateX(-5px);
}

.main-container {
    max-width: 1110px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    
    /* FIX: Added padding so content doesn't touch phone edges */
    padding: 0 20px;
    box-sizing: border-box;

    .main-header {
        display: flex;
        align-items: center;
        padding: 40px 0;

        .back-btn {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding-right: 20px;
            color: var(--text-primary);
            text-decoration: none;

            i {
                font-size: 30px;
                margin-right: 10px;
            }

            p {
                font-size: 16px;
            }
        }

        .title-header {
            font-size: 26px;
            font-weight: 600;
        }
    }

    .main-body {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(2, auto); 

        /* Applied to all project sections to keep code DRY */
        .bbud-section, .mediseen-section, .angelsweb-section, .angelsapp-section {
            max-width: 100%; /* Changed from 549px to 100% so it fits the grid cell perfectly */
            width: 100%;
            border: 1px solid var(--border-color);
            border-radius: 25px;
            overflow: hidden; /* Ensures the image doesn't break the border-radius */
            background-color: var(--bg-card);

            .splash-img {
                width: 100%; /* Ensures image fits perfectly */
                border-bottom: 1px solid var(--border-color);
                display: block; /* Removes weird image gap at the bottom */
            }
         
            .main-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;

                .title {
                    display: flex;
                    flex-direction: column;

                    h4 {
                        font-size: 20px;
                    }

                    p {
                        font-size: 14px;
                        font-weight: lighter;
                    }
                }

                .stacks {
                    display: flex;
                    gap: 10px; /* Reduced slightly to fit better on medium screens */
                    flex-wrap: wrap; /* Allows icons to wrap if space gets tight */

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }

            .divider {
                border-bottom: 1px solid var(--border-color);
                /* FIX: Changed from 500px to fluid calc so it doesn't cause scrolling on phones */
                width: calc(100% - 40px); 
                margin: 0 auto;
            }

            .actions {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 20px; /* Standardized padding */

                .live-demo, .view-details {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    i { font-size: 20px; }
                    p { margin: 0 10px; font-weight: 500; }
                }
            }
        }
    }


}


/* =========================================
   MODAL STYLES
   ========================================= */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px; /* Added padding so modal doesn't touch screen edges on mobile */
    box-sizing: border-box;
}

.modal-content {
    background: var(--modal-bg);
    border-radius: 16px;
    max-width: 1200px;
    width: 100%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    max-height: 95vh;
    display: flex;
    flex-direction: column; 
    overflow: hidden; 
}

.header-wrapper {
    padding: 26px 36px;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--modal-bg);
    position: relative;
    flex-shrink: 0; /* Prevents header from squishing */
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title p {
    font-size: 30px;
    font-weight: bold;
    padding-right: 40px; /* Prevents text from hiding under the close button */
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: var(--close-btn-color);
}

.close-btn:hover { color: var(--close-btn-hover); transform: scale(1.1); }

.sub-header {
    display:flex;
    align-items: center;
    padding-top: 5px;
    flex-wrap: wrap; /* Allows wrap on mobile */
    gap: 15px;
}

.sub-title {
    display: flex;
    align-items: center;
    gap: 10px;
}

.sub-title i { font-size: 20px; }
.sub-title p { font-size: 16px; }

/* --- SCROLLABLE BODY --- */
.body-wrapper {
    padding: 26px 36px;
    overflow-y: auto; 
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    gap: 30px; /* Slightly increased gap for breathing room */
}

/* --- Minimal Scrollbar Styling --- */
.body-wrapper {
    scrollbar-width: thin;
    scrollbar-color: #4F4F4F transparent;
}
.body-wrapper::-webkit-scrollbar { width: 6px; }
.body-wrapper::-webkit-scrollbar-track { background: transparent; }
.body-wrapper::-webkit-scrollbar-thumb {
    background-color: #4F4F4F;
    border-radius: 20px;
}
.body-wrapper::-webkit-scrollbar-thumb:hover { background-color: #828282; }

.image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.image-wrapper img {
    width: 100%;
    border-radius: 20px;
}

.status {
    text-align:center;
    font-weight: 500;
    background-color: var(--status-bg);
    padding: 8px 20px;
    border-radius: 20px;
    display: inline-block;
}

.color {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
    margin: 0px 10px;
}

.overview .title-overview,
.tools .title-tools,
.features .title-features,
.contributors .title-contributors {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.overview .title-overview i,
.tools .title-tools i,
.features .title-features i,
.contributors .title-contributors i { font-size: 26px; }

.overview .title-overview p,
.tools .title-tools p,
.features .title-features p,
.contributors .title-contributors p {
    font-size: 22px;
    font-weight: bold;
}

.description {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-muted);
}

.stack-images {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.stack-images img {
    width: 40px;
    height: 40px;
}

.features ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 20px;
}

.features li {
    font-size: 16px;
    line-height: 1.5;
    color: var(--text-muted);
}

.contributors .wrap-people {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.people {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px; 
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 15px 10px; 
    max-width: 357px;
    width: 100%;
    position: relative; 
}

.people.clickable:hover {
    border-color: var(--text-secondary);
    background-color: var(--bg-card-hover);
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.people .name {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}

.people .role {
    font-size: 12px;
    background-color: var(--status-bg);
    padding: 6px 12px;
    border-radius: 20px;
    text-align: center;
}

.icon-link {
    font-size: 14px;
    color: var(--text-light);
    position: absolute;
    top: 10px;
    right: 12px;
}

.footer-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 36px;
    gap: 20px;
    border-top: 1px solid var(--border-color);
    background-color: var(--modal-bg);
    flex-shrink: 0;
}

.source-code, .demo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(--btn-secondary-bg);
    padding: 12px 20px;
    border-radius: 12px;
    width: 45%;
}

.source-code:hover, .demo:hover { background-color: var(--btn-secondary-hover); }
.source-code i, .demo i { font-size: 20px; }
.source-code p, .demo p { font-size: 15px; font-weight: 600; }


/* =========================================
   RESPONSIVE DESIGN (MEDIA QUERIES)
   ========================================= */

/* TABLET SCREENS (Under 950px) */
@media (max-width: 950px) {
    .main-container .main-body {
        /* Changes from 2 columns to 1 column on tablets/phones */
        grid-template-columns: 1fr; 
    }
}

/* MOBILE SCREENS (Under 650px) */
@media (max-width: 650px) {
    /* Header Stacking */
    .main-container .main-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        padding: 30px 0 20px 0;
    }
    
    .main-container .main-header .title-header {
        font-size: 22px;
    }

    /* Card Adjustments */
    .main-container .main-body .bbud-section .main-title,
    .main-container .main-body .mediseen-section .main-title,
    .main-container .main-body .angelsweb-section .main-title,
    .main-container .main-body .angelsapp-section .main-title {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    /* MODAL MOBILE ADJUSTMENTS */
    .header-wrapper {
        padding: 20px; /* Reduced padding */
    }

    .title p {
        font-size: 24px; /* Smaller title */
    }

    .body-wrapper {
        padding: 20px; /* Reduced padding */
    }

    .overview .title-overview p,
    .tools .title-tools p,
    .features .title-features p,
    .contributors .title-contributors p {
        font-size: 18px; /* Smaller section titles */
    }

    .footer-modal {
        padding: 20px;
        flex-direction: column; /* Stacks the two bottom buttons */
        gap: 10px;
    }

    .source-code, .demo {
        width: 100%; /* Makes buttons full width on mobile */
    }
}
</style>