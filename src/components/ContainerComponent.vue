<template>
<!-- <div>
    <PostComponent :data="data[0]"/>
</div> -->
<div v-if="step == 0">
    <div v-for="(a,i) in data" :key="a">
        <PostComponent :data="data[i]"/>
    </div>
</div>

<!-- 필터선택페이지 -->
<div v-if="step == 1">
    <div :class="seletedFilter" class="upload-image" :style="{backgroundImage : `url(${url})`}"></div>
    <div class="filters" >
        <!-- <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div> -->
        <FilterBoxComponent v-for="(a) in filters" :key="a" :url="url" :filter="a">
            <span>{{a}}</span>
            <!-- <template v-slot:a></template>
            <template v-slot:b></template> -->
        </FilterBoxComponent>
    </div> 
</div>

<!-- 글작성페이지 -->
<div v-if="step == 2">
    <div :class="seletedFilter" class="upload-image" :style="{background : `url(${url})`}"></div>
    <div class="write">
        <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
    </div>
</div>
</template>

<script>
import PostComponent from './PostComponent.vue';
import FilterBoxComponent from './FilterBoxComponent.vue';

export default {
    data() {
        return {
            value : '',
            filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
            seletedFilter : '',
        }
    },
    mounted() {
        this.emitter.on('clickBox', (a) => {
            this.seletedFilter = a;
        })
    },
    components : {
        PostComponent,
        FilterBoxComponent,
    },
    props : {
        data : Array,
        step : Number,
        url : String
    }

}
</script>


<style>
.upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
    }
.filters{
    overflow-x:scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>