<template>
    <div class="footer">
        <div class="border"></div>
        <i class="mdi mdi-copyright"> 2025 Peter Ayono. All rights reserved.</i>
    </div>
</template>

<style scoped>
.footer {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .border {
        border-top: 1px solid #DADADA;
        width: 100%; 
        max-width: 800px;
    }

    i {
        padding: 25px;
        font-size: 11px;
        text-align: center;
    }
}

/* TABLET SCREENS (Under 950px) */
@media (max-width: 950px) {
    /* Fix the hardcoded footer border width */
    .footer .border {
        width: 100%;
    }
}
</style>
