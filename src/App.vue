<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">投稿</li>
      
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>こんにちは {{$store.state.name}}</h4>
  <h4>{{$store.state.age}}</h4>
  <button @click="$store.commit('changeName')">変更</button>
  <button @click="$store.commit('increaseAge')">UP</button>

  <ContainerComponent :data="data" :step="step" :url=url @write="myContent=$event"/>
  <button @click="more">もっと表示</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>

<script>
import ContainerComponent from "./components/ContainerComponent.vue";
import VueStaData from './assets/data.js';
import axios from 'axios';
axios.post;

export default {
  name: "App",
  data() {
    return {
      data : VueStaData,
      clickCnt : 0,
      step : 0,
      url : '',
      myContent : '',
      seletedFilter : '',
    }
  },
  mounted() {
        this.emitter.on('clickBox', (a) => {
            this.seletedFilter = a;
        })
    },
  components: {
    ContainerComponent,
  },
  methods: {
    publish() {
      var my =  {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.url,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.myContent,
        filter: this.seletedFilter,
      };
      this.data.unshift(my);
      this.step = 0;
      
    },
    more() {
      // axios.post('URL', {name : 'YAMADA'}).then().catch(err => {
      // });

      axios.get(`https://codingapple1.github.io/vue/more${this.clickCnt}.json`)
      .then(result => {
        this.data.push(result.data);
        this.clickCnt++;
      })
      // https://codingapple1.github.io/vue/more0.json

    },
      upload(e) {
        let a = e.target.files;
        let url = URL.createObjectURL(a[0])
        this.url = url;
        // console.log(url);
        this.step = 1;
      }
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 0px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
