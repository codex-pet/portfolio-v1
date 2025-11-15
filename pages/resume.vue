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
            <div class="download-btn">
                <p>Download Resume</p>
                <i class="mdi mdi-download"></i>
            </div>
        </div>

        <div class="main-body">
            <img src="../assets/img/resume.jpg" alt="">
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
        justify-content: space-between;
        align-items: center;
        padding:40px 0;

        .back-wrapper {
            display: flex;
            align-items: center;

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

            p {
                margin-right: 10px;
            }

            i {
                font-size: 26px;
            }
        }
    }

    .main-body {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: auto
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