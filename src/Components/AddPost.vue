<template>
  <div class="AddPost">
    <input v-model="post.title" placeholder="Название"/>
    <input v-model="post.description" placeholder="Описание"/>
    <button @click="create">Добавить</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid"

export default {
  data() {
    return {
      post: {
        title: '', description: ''
      }
    }
  },
  methods: {
    create() {
      if (this.post.title === '' || this.post.description === '') { return }
      this.post.id = uuidv4()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        description: ''
      }
    }
  }

}
</script>

<style lang="sass" scoped>
.AddPost
    width: 100%
    border-radius: 5px
    height: 350px
    background: linear-gradient(to right, #20A4F3, #182B3A)
    box-shadow: 0px 0px 5px 1px #1c628e
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    position: relative

    input
        width: 70%
        height: 50px
        margin: 20px
        border: none
        outline: none
        text-align: center
        font-size: larger
        border-radius: 5px

        &:focus
          outline: 3px solid black

    button
        position: absolute
        bottom: 10px
        height: 50px
        width: 150px
        font-weight: 600
        font-size: 15px
        letter-spacing: 1px
        background: linear-gradient(to right, #182B3A, #20A4F3)
        color: #fff
        border: none
        outline: none
        cursor: pointer
        box-shadow: 0px 0px 5px  #fff
        border-radius: 5px
        transition: box-shadow 0.5s ease

        &:hover
            box-shadow: 0px 0px 10px  #fff

        &:active
            box-shadow: unset
            
</style>