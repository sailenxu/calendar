<template>
  <div>
    <el-container>
      <el-aside width="150px">
        <div class="leftAside" style="padding-top: 20px">
          <el-select v-model="value" placeholder="选择分组">
            <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.name">
            </el-option>
          </el-select>
          <div style="text-align: center; padding-top: 10px">
            <el-button size="mini">添加分组</el-button>
            <el-button size="mini">添加成员</el-button>
          </div>
          <div class="elTagName">
            <el-tag style="color: white; background-color: #FF7F00;" type="success">张三</el-tag>
          </div>
          <div class="elTagName">
            <el-tag style="color: white; background-color: #238E68;" type="info">李四</el-tag>
          </div>
        </div>
      </el-aside>
      <el-main>
        <FullCalendar ref="calendar" :options="calendarOptions"/>
      </el-main>
      <el-dialog
        title="日程"
        :visible.sync="dialogVisible"
        >
        <span>abc</span>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {getTagList} from "@/api/demo-api";

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      risk: 'case：\\n1.三方支付0 + 「余额」支付覆盖车费走普通支付的push\\n2.「先乘后付」三方支付全部走先乘后付的push\\n3.以「先乘后付」三方支付部分 + 部分「余额」支付\\t走先乘后付的push\\n包含微信和支付宝先乘后付',
      dialogVisible: false,
      options: [],
      value: '',
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],// 选择要使用的插件，例如 dayGrid，可以根据需要添加其他插件
        // height: 600,
        contentHeight: 'auto',
        editable: false,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: false,
        weekends: true,
        eventClick: this.handleEventClick,
        select: this.handleDateSelect,
        events: [],
        // 其他 FullCalendar 配置选项...
      }
    };
  },
  methods: {
    handleDateSelect() {
      console.info('aaa');
      this.dialogVisible = true;
    },
    handleEventClick(event) {
      console.info('bbb' + event.event.title);
      this.dialogVisible = true;
    }
  },
  mounted() {
    getTagList().then(res => {
      console.info(res);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.fc-daygrid-day-top {
  height: 23px;
}

.leftAside {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.elTagName {
  padding-top: 10px;
  text-align: center;
}
</style>
