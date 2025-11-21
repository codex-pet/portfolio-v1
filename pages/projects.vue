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
                        <img src="../assets/img/stacks/Vue.js.svg" alt="vue">
                        <img src="../assets/img/stacks/Javascript.svg" alt="javascript">
                        <img src="../assets/img/stacks/Nuxt.JS.svg" alt="nuxt">
                        <img src="../assets/img/stacks/MongoDB.svg" alt="mongodb">
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
                        <img src="../assets/img/stacks/Vue.js.svg" alt="vue">
                        <img src="../assets/img/stacks/Javascript.svg" alt="javascript">
                        <img src="../assets/img/stacks/Nuxt.JS.svg" alt="nuxt">
                        <img src="../assets/img/stacks/Firebase.svg" alt="firebase">
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
                        <img src="../assets/img/stacks/Vue.js.svg" alt="vue">
                        <img src="../assets/img/stacks/Javascript.svg" alt="javascript">
                        <img src="../assets/img/stacks/Nuxt.JS.svg" alt="nuxt">
                        <img src="../assets/img/stacks/MongoDB.svg" alt="mongodb">
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
                        <img src="../assets/img/stacks/Ionic.svg" alt="ionic">
                        <img src="../assets/img/stacks/Javascript.svg" alt="javascript">
                        <img src="../assets/img/stacks/Nuxt.JS.svg" alt="nuxt">
                        <img src="../assets/img/stacks/MongoDB.svg" alt="mongodb">
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

        <div class="footer">
            <div class="border"></div>
            <i class="mdi mdi-copyright"> 2025 Peter Ayono. All rights reserved.</i>
        </div>

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
                            <div class="people" v-for="contributor in selectedProject.contributors" :key="contributor.name">
                                <p class="name">{{ contributor.name }}</p>
                                <p class="role">{{ contributor.role }}</p>
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
            new URL('../assets/img/stacks/Vue.js.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Javascript.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Nuxt.JS.svg', import.meta.url).href,
            new URL('../assets/img/stacks/MongoDB.svg', import.meta.url).href
        ],
        features: [
            'Real-time resident data management.',
            'Automated certificate and permit generation.',
            'Community announcements and alerts.',
            'Secure role-based access for barangay officials.',
            'Integrated reporting and analytics dashboard.'
        ],
        contributors: [
            { name: 'Raldin Casidar', role: 'Senior Web Developer' },
            { name: 'Peter Robert Ayono', role: 'Frontend & Backend Developer' },
            { name: 'Earl Jarvy Almosera', role: 'UI/UX Designer' }
        ],
        sourceCodeUrl: 'https://github.com/user/bbud-repo',
        liveDemoUrl: 'https://b-bud.online/',
        liveDemoText: 'Live Demo',
        longDescription: 'B-Bud is a comprehensive Barangay Management System designed to streamline administrative processes, manage resident records, and facilitate communication within the local community.'
    },
    mediseen: {
        name: 'MediSeen',
        date: 'Jan - Apr 2025',
        type: 'Website',
        status: 'Completed',
        splashImage: new URL('../assets/img/projects/mediseen-splash.png', import.meta.url).href,
        stacks: [
            new URL('../assets/img/stacks/Vue.js.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Javascript.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Nuxt.JS.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Firebase.svg', import.meta.url).href
        ],
        features: [
            'Search for medicines by name or generic equivalent.',
            'Locate nearby pharmacies with available stock.',
            'Compare prices and view store hours.',
            'User reviews and ratings for pharmacies.',
            'Real-time inventory updates.'
        ],
        contributors: [
            { name: 'Raldin Casidar', role: 'Senior Web Developer' },
            { name: 'Peter Robert Ayono', role: 'Frontend & Backend Developer' },
            { name: 'Erl Yves Tagaro', role: 'Frontend Developer' },
            { name: 'Earl Jarvy Almosera', role: 'UI/UX Designer' },
        ],
        sourceCodeUrl: 'https://github.com/user/mediseen-repo',
        liveDemoUrl: 'https://mediseen.vercel.app/',
        liveDemoText: 'Live Demo',
        longDescription: 'MediSeen helps users locate and find information about medicines available in nearby pharmacies. It provides details on availability, pricing, and alternatives to ensure users can find the medication they need.'
    },
    angelsweb: {
        name: "Angel's Pizza",
        date: 'Nov 2024 - Present',
        type: 'Website',
        status: 'Staging',
        splashImage: new URL('../assets/img/projects/angelsweb-splash.png', import.meta.url).href,
        stacks: [
            new URL('../assets/img/stacks/Vue.js.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Javascript.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Nuxt.JS.svg', import.meta.url).href,
            new URL('../assets/img/stacks/MongoDB.svg', import.meta.url).href
        ],
        features: [
            'Interactive menu with customization options.',
            'Secure online payment gateway integration.',
            'User account and order history.',
            'Promotional deals and coupon system.',
            'Responsive design for desktop and mobile.'
        ],
        contributors: [
            { name: 'Raldin Casidar', role: 'Senior Web Developer' },
            { name: 'Peter Robert Ayono', role: 'Frontend Developer' },
            { name: 'Erl Yves Tagaro', role: 'Frontend Developer' },
            { name: 'Earl Jarvy Almosera', role: 'Frontend Developer' },
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
            new URL('../assets/img/stacks/Ionic.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Javascript.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Nuxt.JS.svg', import.meta.url).href,
            new URL('../assets/img/stacks/MongoDB.svg', import.meta.url).href
        ],
        features: [
            'Cross-platform compatibility (iOS and Android).',
            'Push notifications for order status updates.',
            'Geolocation for easy delivery address input.',
            'Loyalty rewards program integration.',
            'Offline access to the menu.'
        ],
        contributors: [
            { name: 'Raldin Casidar', role: 'Senior Web Developer' },
            { name: 'Peter Robert Ayono', role: 'Frontend Developer' },
            { name: 'Erl Yves Tagaro', role: 'Frontend Developer' },
            { name: 'Earl Jarvy Almosera', role: 'Frontend Developer' },
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

// --- Original Link Functions (can be kept for redundancy or removed) ---
const goToBbud = () => window.open('https://b-bud.online/', '_blank');
const goToMediseen = () => window.open('https://mediseen.vercel.app/', '_blank');
const goToAngelsweb = () => window.open('https://angels-pizza.com/', '_blank');
const goToAngelsapp = () => window.open('https://github.com/DavidHeartBenetez/ionic-vue', '_blank');

// --- Generic Link Function for Modal ---
const goTo = (url) => {
  if (url) {
    window.open(url, '_blank');
  }
};
</script>

<style scoped>
.main-container {
    max-width: 1110px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    /* outline: 1px solid red; */

    .main-header {
        display: flex;
        align-items: center;
        padding:40px 0;

        .back-btn {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding-right: 20px;
            color: black;
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
        display:grid;
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(2, auto); 

        .bbud-section {
            max-width: 549px;
            width: 100%;
            border: 1px solid #DADADA;
            border-radius: 25px;

            .splash-img {
                border-top-right-radius: 25px;
                border-top-left-radius: 25px;
                border-bottom: 1px solid #DADADA;
            }
         
            .main-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;


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
                    gap: 20px;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }

            .divider {
                border-bottom: 1px solid #DADADA;
                width: 500px;
                margin: 0 auto;
            }

            .actions {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                margin: 6px 0px;

                .live-demo {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 10px; 
                        
                    }

                }

                .view-details {
                    display: flex;
                    align-items: center;
                    border-radius: 6px;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 10px;
                        
                    }
                }
            }

            
        }

        .mediseen-section {
            max-width: 549px;
            width: 100%;
            border: 1px solid #DADADA;
            border-top: 0px;
            border-radius: 25px;

            .splash-img {
                border-top-right-radius: 25px;
                border-top-left-radius: 25px;
                border-bottom: 1px solid #DADADA;
            }
         
            .main-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;


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
                    gap: 20px;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }

            .divider {
                border-bottom: 1px solid #DADADA;
                width: 500px;
                margin: 0 auto;
            }

            .actions {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                margin: 6px 0px;

                .live-demo {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 10px;
                        
                    }

                }

                .view-details {
                    display: flex;
                    align-items: center;
                    border-radius: 6px;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 10px;
                        
                    }
                }
            }

            
        }

        .angelsweb-section {
            max-width: 549px;
            width: 100%;
            border: 1px solid #DADADA;
            border-top: 0px;
            border-radius: 25px;


            .splash-img {
                border-top-right-radius: 25px;
                border-top-left-radius: 25px;
                border-bottom: 1px solid #DADADA;
                
            }
         
            .main-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;


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
                    gap: 20px;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }

            .divider {
                border-bottom: 1px solid #DADADA;
                width: 500px;
                margin: 0 auto;
            }

            .actions {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                margin: 6px 0px;

                .live-demo {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 10px; 
                        
                    }

                }

                .view-details {
                    display: flex;
                    align-items: center;
                    border-radius: 6px;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 10px; 
                        
                    }
                }
            }

            
        }

        .angelsapp-section {
            max-width: 549px;
            width: 100%;
            border: 1px solid #DADADA;
            border-top: 0px;
            border-radius: 25px;

            .splash-img {
                border-top-right-radius: 25px;
                border-top-left-radius: 25px;
            }
         
            .main-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;


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
                    gap: 20px;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }

            .divider {
                border-bottom: 1px solid #DADADA;
                width: 500px;
                margin: 0 auto;
            }

            .actions {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                margin: 6px 0px;

                .live-demo {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 10px; 
                        
                    }

                }

                .view-details {
                    display: flex;
                    align-items: center;
                    border-radius: 6px;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    p {
                        margin:0 10px;
                        
                    }
                }
            }

            
        }
    }

     .footer {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        .border {
            border-top: 1px solid #DADADA;
            width: 800px;
        }

        i {
            padding: 25px;
        }
    }
}


/* --- MODIFIED AND NEW MODAL STYLES --- */
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
}

.modal-content {
    background: white;
    border-radius: 16px;
    max-width: 1200px;
    width: 95%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    max-height: 95vh;
    display: flex;
    flex-direction: column; 
    overflow: hidden; 
}

.header-wrapper {
    padding: 26px 36px;
    border-bottom: 1px solid #DADADA;
    background-color: white;
    position: relative;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title p {
    font-size: 30px;
    font-weight: bold;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #888;
    transition: color 0.3s ease;
}

.close-btn:hover {
    color: #333;
}

.sub-header {
    display:flex;
    align-items: center;
    padding-top: 5px;
}

.sub-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
}

.sub-title i {
    font-size: 20px;
}

.sub-title p {
    font-size: 16px;
}

/* --- SCROLLABLE BODY --- */
.body-wrapper {
    padding: 26px 36px;
    overflow-y: auto; 
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* --- Minimal Scrollbar Styling --- */
.body-wrapper {
    scrollbar-width: thin;
    scrollbar-color: #4F4F4F transparent;
}
.body-wrapper::-webkit-scrollbar {
    width: 6px;
}
.body-wrapper::-webkit-scrollbar-track {
    background: transparent;
}
.body-wrapper::-webkit-scrollbar-thumb {
    background-color: #4F4F4F;
    border-radius: 20px;
}
.body-wrapper::-webkit-scrollbar-thumb:hover {
    background-color: #828282;
}

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
    font-weight: 400;
    background-color: #e0e0e0;
    padding: 8px;
    border-radius: 20px;
    max-width: 300px;
    width: 100%;
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
}

.overview .title-overview i,
.tools .title-tools i,
.features .title-features i,
.contributors .title-contributors i {
    font-size: 30px;
}

.overview .title-overview p,
.tools .title-tools p,
.features .title-features p,
.contributors .title-contributors p {
    font-size: 24px;
    font-weight: bold;
}

.description {
    padding-top: 10px;
    font-size: 18px;
}

.stack-images {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 20px;
}

.stack-images img {
    width: 40px;
    height: 40px;
}

.features .list {
    padding: 10px 30px;
}

.features ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.features li {
    font-size: 18px;
}

.contributors .wrap-people {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 10px ;
}

.people {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 1px solid #c4bfbf;
    border-radius: 12px;
    padding: 8px;
    max-width: 357px;
    width: 100%;
}

.people .name {
    font-size: 18px;
    font-weight: bold;
}

.people .role {
    font-size: 12px;
    background-color: #e0e0e0;
    padding: 8px 12px;
    border-radius: 20px;
}

.footer-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 36px;
    gap: 20px;
    border-top: 1px solid #DADADA;
    background-color: white;
}

.source-code, .demo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    background-color: #e0e0e0;
    padding: 10px 12px;
    border-radius: 12px;
    width: 45%;
    transition: background-color 0.3s ease;
}

.source-code:hover, .demo:hover {
    background-color: #d1d1d1;
}

.source-code i, .demo i {
    font-size: 20px;
}

.source-code p, .demo p {
    font-size: 14px;
    font-weight: 500;
}
</style>