<template>
    <div class="common-container">
        <el-button type="primary" size="small">测试按钮组件</el-button>
        <span class="title">文件</span>
        <div class="qr-code">
            <Qrcode :value="url" :size="200" level="H"></Qrcode>
        </div>
    </div>
</template>

<script>
import Qrcode from 'qrcode.vue'

export default {
    components: { Qrcode },
    data() {
        return {
            url: 'http://192.168.0.196:18060'
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    color: $primaryColor;
}
.qr-code {
    padding: 5px;
    border: 1px solid #dedede;
    margin-top: 15px;
    width: fit-content;
}
</style>
