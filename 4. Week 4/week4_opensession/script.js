import userCard from "./components/UserCard.js"

// // Register a component - global registration
// Vue.component("user-card",{
//     props: ["name", "avatar", "bio"],
//     template: `
//     <div class="card">
//         <img :src="avatar" :alt="name" />
//         <h2>{{name}}</h2>
//         <p>{{bio}}</p>
//         <p><input v-model="name"/></p>
//         <p>{{name}}</p>
//         <slot></slot>
//         <p>{{myData1}}</p>
//         <h3 :class="attr">{{attr}}</h3>
//         <button v-on:click="viewDetails"> View Details </button>
//      </div>   
//     `,
//     data: function(){
//         return {
//             myData1: "12345",
//             attr: "attr1",
//             name: ""
//         }
//     },
//     methods: {
//         viewDetails: function(){
//             this.$emit("view-detail", this.myData1)
//         }
//     }
// })

const app = new Vue({
    el: "#app",
    data: {
        users: [
            {
                id: 1,
                name: "Alice",
                avatar: "https://i.pravatar.cc/100?img=1",
                bio: "Frontend Engineer",
                details: "Hi, this is Alice, and I have work ex of 3 years."
            },
            {
                id: 2,
                name: "Beta",
                avatar: "https://i.pravatar.cc/100?img=2",
                bio: "Backend Engineer",
                details: "Hi, this is Beta, and I have work ex of 5 years."
            }
        ],
        name:""
     
    },
    methods: {
        showDetails: function (details){
            alert(details)
        }
    },
    components:{
        "user-card": userCard
    }
})

// addEventListener("click", () => {

// })