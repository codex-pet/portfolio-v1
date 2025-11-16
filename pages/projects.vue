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
        <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <!-- Close button is now reliably inside the modal-content -->
                <button class="close-btn" @click="closeModal">
                    <i class="mdi mdi-close"></i>
                </button>
                <div v-if="selectedProject">
                    <!-- Modal content goes here -->
                    <img class="modal-img" :src="selectedProject.splashImage" :alt="selectedProject.name">
                    <h3 class="modal-title">{{ selectedProject.name }}</h3>
                    <p class="modal-description">{{ selectedProject.longDescription }}</p>
                    <div class="modal-stacks">
                        <strong>Technologies Used:</strong>
                        <div class="stacks-images">
                           <img v-for="stack in selectedProject.stacks" :key="stack" :src="stack" :alt="stack.split('/').pop()">
                        </div>
                    </div>
                     <div class="modal-actions">
                        <div class="live-demo" @click="goTo(selectedProject.liveDemoUrl)">
                            <i class="mdi mdi-webcam"></i>
                            <p>{{ selectedProject.liveDemoText }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// --- Modal State and Data ---
const isModalVisible = ref(false);
const selectedProject = ref(null);


const projectDetails = {
    bbud: {
        name: 'B-Bud',
        splashImage: new URL('../assets/img/projects/bbud-splash.png', import.meta.url).href,
        stacks: [
            new URL('../assets/img/stacks/Vue.js.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Javascript.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Nuxt.JS.svg', import.meta.url).href,
            new URL('../assets/img/stacks/MongoDB.svg', import.meta.url).href
        ],
        liveDemoUrl: 'https://b-bud.online/',
        liveDemoText: 'Live Demo',
        longDescription: 'B-Bud is a comprehensive Barangay Management System designed to streamline administrative processes, manage resident records, and facilitate communication within the local community.'
    },
    mediseen: {
        name: 'MediSeen',
        splashImage: new URL('../assets/img/projects/mediseen-splash.png', import.meta.url).href,
        stacks: [
            new URL('../assets/img/stacks/Vue.js.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Javascript.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Nuxt.JS.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Firebase.svg', import.meta.url).href
        ],
        liveDemoUrl: 'https://mediseen.vercel.app/',
        liveDemoText: 'Live Demo',
        longDescription: 'MediSeen helps users locate and find information about medicines available in nearby pharmacies. It provides details on availability, pricing, and alternatives to ensure users can find the medication they need.'
    },
    angelsweb: {
        name: "Angel's Pizza",
        splashImage: new URL('../assets/img/projects/angelsweb-splash.png', import.meta.url).href,
        stacks: [
            new URL('../assets/img/stacks/Vue.js.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Javascript.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Nuxt.JS.svg', import.meta.url).href,
            new URL('../assets/img/stacks/MongoDB.svg', import.meta.url).href
        ],
        liveDemoUrl: 'https://angels-pizza.com/',
        liveDemoText: 'Live Demo',
        longDescription: "A fully functional e-commerce website for Angel's Pizza, allowing customers to browse the menu, customize their orders, and purchase their favorite pizza and pasta online for delivery or pickup."
    },
    angelsapp: {
        name: "Angel's Pizza App",
        splashImage: new URL('../assets/img/projects/angelsapp-splash.png', import.meta.url).href,
        stacks: [
            new URL('../assets/img/stacks/Ionic.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Javascript.svg', import.meta.url).href,
            new URL('../assets/img/stacks/Nuxt.JS.svg', import.meta.url).href,
            new URL('../assets/img/stacks/MongoDB.svg', import.meta.url).href
        ],
        liveDemoUrl: 'https://github.com/DavidHeartBenetez/ionic-vue',
        liveDemoText: 'View Code',
        longDescription: "A mobile application for Angel's Pizza that provides a seamless food ordering experience. Built with Ionic for cross-platform compatibility, it allows users to order on the go from their mobile devices."
    }
};

const openModal = (projectId) => {
  selectedProject.value = projectDetails[projectId];
  isModalVisible.value = true;
};

watch(isModalVisible, (newVal) => {
  if (newVal) {
    // When the modal is visible, hide the body's scrollbar
    document.body.style.overflow = 'hidden';
  } else {
    // When the modal is hidden, restore the body's scrollbar
    document.body.style.overflow = '';
  }
});

const closeModal = () => {
  isModalVisible.value = false;
};

// --- Original Link Functions ---
const goToBbud = () => {
  window.open('https://b-bud.online/', '_blank');
};
const goToMediseen = () => {
  window.open('https://mediseen.vercel.app/', '_blank');
};
const goToAngelsweb = () => {
  window.open('https://angels-pizza.com/', '_blank');
};
const goToAngelsapp = () => {
  window.open('https://github.com/DavidHeartBenetez/ionic-vue', '_blank');
};

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
    padding: 2rem; /* Added padding */
    border-radius: 16px;
    max-width: 1000px;
    width: 90%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    max-height: 90vh; /* Adjusted max height */
    overflow-y: auto;
    position: relative; /* This ensures the close button is positioned relative to the modal */
}

/* --- Minimal Scrollbar Styling (Dark Theme) --- */
/* For Firefox */
.modal-content {
  scrollbar-width: thin;
  scrollbar-color: #4F4F4F transparent; /* Darker thumb */
}

/* For WebKit browsers (Chrome, Safari, Edge) */
.modal-content::-webkit-scrollbar {
  width: 4px;
}

.modal-content::-webkit-scrollbar-track {
  background: transparent;
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: #4F4F4F; /* Darker thumb */
  border-radius: 20px;
  border: 2px solid transparent; 
  background-clip: content-box;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background-color: #828282; /* Lighter grey on hover */
}
/* --- End of Scrollbar Styling --- */



.close-btn {
    position: absolute;
    top: 20px;  /* Adjusted positioning */
    right: 20px; /* Adjusted positioning */
    background: transparent;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #888;
    transition: color 0.3s ease;
    z-index: 10;
}

.close-btn:hover {
    color: #333;
}


.modal-img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.modal-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0.5rem;
    padding-right: 40px; /* Add padding to prevent text from going under the close button */
}

.modal-description {
    font-size: 16px;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.modal-stacks {
    margin-bottom: 1.5rem;
}

.modal-stacks strong {
    display: block;
    margin-bottom: 0.5rem;
}

.stacks-images {
    display: flex;
    flex-wrap: wrap; /* Added for responsiveness */
    gap: 15px;
}

.stacks-images img {
    width: 35px;
    height: 35px;
}

.modal-actions .live-demo {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    background-color: #f0f0f0;
    padding: 10px 15px;
    border-radius: 8px;
    transition: background-color 0.3s;
}

.modal-actions .live-demo:hover {
    background-color: #e0e0e0;
}

.modal-actions .live-demo i {
    font-size: 20px;
}

.modal-actions .live-demo p {
    margin: 0 0 0 10px;
}
</style>