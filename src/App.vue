<template>
    <div class="App">
        <div class="content">
            <add-post @create="create" />
            <post-unit :posts="posts.length === 0 ? helloPost : posts" 
                :isHello="posts.length !== 0 ? true : false"
                @remove="remove" />
        </div>
    </div>
</template> 

<script>
import PostUnit from './Components/PostUnit'
import AddPost from './Components/AddPost'

export default {
    components: {
        PostUnit,
        AddPost
    },
    data() {
        return {
            helloPost: [{ title: 'Введите название поста', description: 'И его описание, чтобы пост появился прямо тут!' }],
            posts: []
        }
    },
    mounted() {
        this.loadLS()
    },
    methods: {
        create(post) {
            this.posts.unshift(post)
            localStorage.setItem('posts', JSON.stringify(this.posts))
        },
        remove(id){
            this.posts = this.posts.filter(x => x.id !== id)
            localStorage.setItem('posts', JSON.stringify(this.posts))
        },
        loadLS() {
            const savedPosts = localStorage.getItem('posts')
            this.posts = savedPosts ? JSON.parse(savedPosts) : []
        }
    }
}
</script>

<style lang="sass">
*
    margin: 0
    padding: 0
    box-sizing: border-box

.App
    display: flex
    justify-content: center
    width: 100%
    height: 100%

    .content
        width: 800px
        max-width: 95%
        display: flex
        flex-direction: column
        align-items: center
        padding: 20px 0

</style>