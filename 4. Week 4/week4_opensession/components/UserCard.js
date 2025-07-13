const userCard = {
    props: ["name", "avatar", "bio"],
    template: `
    <div class="card">
        <img :src="avatar" :alt="name" />
        <h2>{{name}}</h2>
        <p>{{bio}}</p>
        <p><input v-model="name"/></p>
        <p>{{name}}</p>
        <slot></slot>
        <p>{{myData1}}</p>
        <h3 :class="attr">{{attr}}</h3>
        <button v-on:click="viewDetails"> View Details </button>
     </div>   
    `,
    data: function(){
        return {
            myData1: "12345",
            attr: "attr1",
            name: ""
        }
    },
    methods: {
        viewDetails: function(){
            this.$emit("view-detail", this.myData1)
        }
    }
}

export default userCard