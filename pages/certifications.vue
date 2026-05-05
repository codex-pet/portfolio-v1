<template>
    <div class="main-container">
       <div class="main-header">
            <NuxtLink to="/" class="back-btn">
                <i class="mdi mdi-arrow-left"></i>
                <p>Back to Home</p>
            </NuxtLink>
            <p class="title-header">All Certifications</p>
        </div>
        
        <div class="main-body">
            <div class="certificate">
                <div class="title">
                    <h4>Philippine Startup Challenge 9 (PSC)</h4>   
                    <i class="mdi mdi-arrow-right"></i>
                </div>
                <p>Awarded with a certificate "Special Jury Awad" or outstanding creativity and innovation.</p>
            </div>
            <div class="certificate">
                <div class="title">
                    <h4>ZAMBASULTA Business and Innovation Summit 2024</h4>   
                    <i class="mdi mdi-arrow-right"></i>
                </div>
                <p>Was an attendee in PSC 9 at Zamboanga City for the iDEYA Pitching competition.</p>
            </div>
            <div class="certificate">
                <div class="title">
                    <h4>CLAWVATION: Startup Innovation Video Pitching Competition</h4>   
                    <i class="mdi mdi-arrow-right"></i>
                </div>
                <p>Was held a Champion and awarded for being outstanding, innovative, and strategic.</p>
            </div>
        </div>

        <Footer />

    </div>
</template>

<script setup>
</script>

<style scoped>
/* Smooth hover transitions for interactive elements */
[style*="cursor: pointer"], a, .certificate, .back-btn i {
    transition: transform 0.2s ease-in-out;
}

.certificate:hover {
    transform: translateY(-5px);
}

.back-btn:hover i {
    transform: translateX(-5px); /* Makes the arrow gently point left on hover */
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
        align-items: center;
        padding: 40px 0;

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
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(2, auto); 
        margin-top: 25px;

        .certificate {
            padding: 15px 20px;
            border: 1px solid #DADADA;
            border-radius: 10px;
            background-color: var(--card-bg, #ffffff);
            cursor: pointer;

            .title {
                display: flex;
                justify-content: space-between;
                align-items: flex-start; /* Changed from center so long titles don't push the icon weirdly */
                margin-bottom: 10px;
                gap: 10px;

                h4 {
                    font-size: 18px;
                    line-height: 1.3;
                }

                i {
                    font-size: 20px;
                    cursor: pointer;
                    margin-top: 2px;
                }
            }
            
            p {
                font-size: 14px;
                color: #555; /* Slightly muted text for better hierarchy */
                line-height: 1.5;
            }
        }
    }


}

/* =========================================
   RESPONSIVE DESIGN (MEDIA QUERIES)
   ========================================= */

/* TABLET & MOBILE SCREENS (Under 768px) */
@media (max-width: 768px) {
    .main-container .main-body {
        /* FIX 3: Changes from 2 columns to 1 column on smaller screens */
        grid-template-columns: 1fr; 
    }

    .main-container .main-header {
        /* Stacks the Back button and Title on mobile for better space usage */
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        padding: 30px 0 20px 0;
    }

    .main-container .main-header .title-header {
        font-size: 22px; /* Slightly smaller title on mobile */
    }
}
</style>
