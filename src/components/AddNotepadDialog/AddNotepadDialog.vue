<template>
  <el-dialog @close="$emit('closeDialog')" v-model="dialogTableVisible" title="创建笔记本"> 111 </el-dialog>
</template>

<script>
import { ref, defineComponent, watch,defineEmits, toRefs, onMounted } from "vue";
export default defineComponent({
    props:{
        dialogTableVisible:false
    },
    emits:['closeDialog'],

    setup(props){
        const emit = defineEmits(["closeDialog"]); //注册emit
        const {dialogTableVisible}=toRefs(props)

        onMounted(()=>{
            console.log(dialogTableVisible.value)
        })

        return {
            emit,
            dialogTableVisible
        }
    }
});
</script>

<style lang="less" scoped></style>
