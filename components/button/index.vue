<template>
    <button :style="{backgroundColor: color}">
        <span>p</span>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'w-button',
    props: {
        color: {
            type: String
        }
    }
}
</script>