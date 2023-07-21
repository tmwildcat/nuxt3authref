<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
    middleware: ['guest']
})
</script>
<template>
    <div>
        Guest only page
    </div>
</template>