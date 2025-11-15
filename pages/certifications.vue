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
        margin-top: 25px;

        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;

            i {
                font-size: 20px;
                cursor: pointer;
            }
        }

        .certificate {
            padding: 15px 20px;
            border: 1px solid #DADADA;
            border-radius: 10px;

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
