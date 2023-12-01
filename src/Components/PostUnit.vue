<template>
  <div class="PostUnit" v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <button v-if="isHello" @click="remove(post.id)"> <img :src="crossSvg"/> </button>
    </div>
</template>

<script>
import crossSvg from '../../cross.svg'

export default {
    props: {
        posts: {
            type: Array,
            required: true
        },
        isHello: {
            type: Boolean,
        }
    },
    data() {
        return{
            crossSvg: crossSvg
        }
    },
    methods: {
        remove(id){
            this.$emit('remove', id)
        }
    }
}
</script>

<style lang="sass" scoped>
.PostUnit
    width: 600px
    max-width: 80%
    margin: 40px 0px
    box-shadow: 0px 0px 5px 2px #1c628e
    border-radius: 5px
    display: flex
    flex-direction: column
    align-items: center
    padding: 20px
    position: relative

    h2
        margin: 20px 0
        letter-spacing: 1px
        overflow-wrap: break-word
        max-width: 100%
        text-align: center

    p
        margin: 20px 0
        overflow-wrap: break-word
        max-width: 100%
        text-align: center

    button
        height: 25px
        aspect-ratio: 1/1
        border: none
        cursor: pointer
        position: absolute
        top: 5px
        right: 5px
        border-radius: 5px
        transition: height 0.3s ease

        &:hover
            height: 28px

        &:active
            height: 25px

        img
            background: linear-gradient(to right, #20A4F3, #182B3A)
            width: 100%
            height: 100%
            border-radius: 5px
        
</style>
