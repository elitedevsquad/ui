<template>
    <button :disabled="loading" @click.prevent.stop="$emit('click', $event);">
        <span v-if="loading" class="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"
            style="vertical-align: sub">
        </span>

        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        loading: { default: false, type: Boolean },
    },
};
</script>
