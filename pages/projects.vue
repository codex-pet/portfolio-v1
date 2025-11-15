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
                    <div class="live-demo">
                        <i class="mdi mdi-webcam"></i>
                        <p>Live Demo</p>
                    </div>
                    <div class="view-details">
                        <i class="mdi mdi-eye-outline"></i>
                        <p>View Details</p>
                    </div>
                </div>
            </div>

            <div class="mediseen-section">
                <img class="splash-img" src="../assets/img/projects/mediseen-splash.png" alt="bbud">
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
                    <div class="live-demo">
                        <i class="mdi mdi-webcam"></i>
                        <p>Live Demo</p>
                    </div>
                    <div class="view-details">
                        <i class="mdi mdi-eye-outline"></i>
                        <p>View Details</p>
                    </div>
                </div>
            </div>

            <div class="angelsweb-section">
                <img class="splash-img" src="../assets/img/projects/angelsweb-splash.png" alt="bbud">
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
                    <div class="live-demo">
                        <i class="mdi mdi-webcam"></i>
                        <p>Live Demo</p>
                    </div>
                    <div class="view-details">
                        <i class="mdi mdi-eye-outline"></i>
                        <p>View Details</p>
                    </div>
                </div>
            </div>

            <div class="angelsapp-section">
                <img class="splash-img" src="../assets/img/projects/angelsapp-splash.png" alt="bbud">
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
                    <div class="live-demo">
                        <i class="mdi mdi-webcam"></i>
                        <p>Live Demo</p>
                    </div>
                    <div class="view-details">
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
    </div>
</template>
<script setup>

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
</style>