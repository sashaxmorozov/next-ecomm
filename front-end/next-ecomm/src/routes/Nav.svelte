<script>
    import { logIn } from "../routes/utils/auth.js"
    import { logOut } from "../routes/utils/auth.js"
    import { goto } from "$app/navigation";
    
    function goToLogin() {
        goto('/login');
    }
    function goToMain() {
        goto('/');
    }
    function goToUpload() {
        goto('/upload');
    }
    </script>
    
    <div class="absolute top-4 right-4 space-x-1">
    {#if $logIn} 
    <button class="btn object-right rounded-none btn-outline btn-info" on:click={logOut}> Logout </button>
    <button class="btn object-right rounded-none btn-outline btn-info" on:click={goToUpload}> Upload image </button>
    {:else}
    <button class="btn object-right rounded-none btn-outline btn-info" on:click={goToLogin}> Login </button>
    {/if}
    
    <button class="btn object-right rounded-none btn-outline btn-info" on:click={goToMain}> Main </button>
</div>