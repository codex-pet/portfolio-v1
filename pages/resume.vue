<template>
    <div class="main-container">
        <div class="main-header">
            <div class="back-wrapper">
                <NuxtLink to="/" class="back-btn">
                    <i class="mdi mdi-arrow-left"></i>
                    <p>Back to Home</p>
                </NuxtLink>
                <p class="title-header">Resume</p>
            </div>
            <div class="download-btn" @click="downloadResume">
                <p>Download Resume</p>
                <i class="mdi mdi-download"></i>
            </div>
        </div>

        <div class="main-body">
            <img src="../assets/img/peter-resume.jpg" alt="">
        </div>

        <Footer />

    </div>
</template>

<script setup>
const downloadResume = () => {
  const filePath = '/peter-resume.pdf'; // Path relative to the public directory
  window.open(filePath, '_blank');
};
</script>

<style scoped>
/* =========================================
   GLOBAL STYLES & HOVER EFFECTS
   ========================================= */
[style*="cursor: pointer"], a, .download-btn {
    transition: all 0.2s ease-in-out;
}

.back-btn:hover i {
    transform: translateX(-5px);
}

.download-btn:hover {
    background-color: #f5f5f5;
    transform: translateY(-2px);
}

.main-container {
    max-width: 1110px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    
    /* FIX 1: Added padding so content doesn't touch phone edges */
    padding: 0 20px;
    box-sizing: border-box;

    .main-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0;

        .back-wrapper {
            display: flex;
            align-items: center;
            gap: 20px; /* Added gap between back button and title */

            .back-btn {
                display: flex;
                align-items: center;
                cursor: pointer;
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
        }
        
        .title-header {
            font-size: 26px;
            font-weight: 600;
        }

        .download-btn {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            border: 1px solid #DADADA;
            border-radius: 8px;
            cursor: pointer;
            background-color: white;

            p {
                margin-right: 10px;
                font-weight: 500;
            }

            i {
                font-size: 24px;
            }
        }
    }

    .main-body {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;

        img {
            width: 80%; /* Looks good on desktop */
            height: auto;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border: 1px solid #eee;
        }
    }


}

/* =========================================
   RESPONSIVE DESIGN (MEDIA QUERIES)
   ========================================= */

/* MOBILE SCREENS (Under 768px) */
@media (max-width: 768px) {
    .main-container .main-header {
        /* FIX 3: Stack header elements on mobile */
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        padding: 30px 0;
    }

    .main-container .main-header .back-wrapper {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .main-container .main-header .download-btn {
        width: 100%; /* Full width button on mobile for easy tapping */
        justify-content: center;
        box-sizing: border-box;
    }

    .main-container .main-body img {
        width: 100%; /* Makes resume larger and more readable on mobile phones */
    }
}

@media (max-width: 480px) {
    .main-container .main-header .title-header {
        font-size: 22px; /* Smaller title for very small phones */
    }
}
</style>