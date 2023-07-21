<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
    middleware: ['auth']
})
</script>
<template>
    <div>
        Auth only page
    </div>
</template>