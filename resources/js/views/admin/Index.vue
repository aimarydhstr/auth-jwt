<template>
    <h1>Hi {{ user.name }}</h1>
</template>

<script>
    export default {

        async created() {
            await axios.get('/api/v1/auth/me', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    console.log(response);
                });
        }
    }

</script>
