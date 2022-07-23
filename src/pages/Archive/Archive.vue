<template>
  <div class="archive w-90 mg-t-15">
    <el-row :gutter="20">
      <el-col :md="17">
        <div class="content">
          <el-timeline>
            <el-timeline-item center timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item center timestamp="2018/4/2" placement="top">
              Event start
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              Event end
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
      <el-col :md="7">
        <side></side>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Archive",
};
</script>

<style>
</style>