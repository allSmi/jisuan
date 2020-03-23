<template>
  <div>
    <div class="container" v-for="(item,$index) in allItem" :key="item.title">
      <el-row>
        <el-col :span="4">{{item.title}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="2">当前价：</el-col>
        <el-col :span="12">
          <el-input type="number" :step="item.step" v-model="item.currentPrice"></el-input>
        </el-col>
      </el-row>
      <el-row v-for="detail in item.detail" :key="detail.time">
        <el-row :gutter="20">
          <el-col :span="4">日期：{{detail.time}}</el-col>
          <el-col :span="4">收盘价：{{detail.end}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">买入价格</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light">买入数量</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light">花费</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" v-for="buyAndSale in detail.buyAndSale" :key="buyAndSale.buyPrice">
          <el-col :span="4">
            <div class="grid-content bg-purple">{{buyAndSale.buyPrice}}</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light">{{buyAndSale.buyNum}}</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light">{{buyAndSale.buyPrice * buyAndSale.buyNum}}</div>
          </el-col>
        </el-row>
      </el-row>
      <el-row>--------------------------------------------------------------------</el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple-light">当前市值</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">实际花费</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">盈亏</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div
            class="grid-content bg-purple-light"
          >{{Math.round(item.currentNum * item.currentPrice) }}</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">{{item.actualPrice}}</div>
        </el-col>
        <el-col :span="4">
          <div
            class="grid-content bg-purple"
          >{{Math.round(item.currentNum * item.currentPrice - item.actualPrice)}}</div>
        </el-col>
      </el-row>
      <el-row>当前市值：{{item.currentNum}} * {{item.currentPrice}} = {{Math.round(item.currentNum * item.currentPrice) }}</el-row>
      <el-row>
        <el-col :span="4">如果想盈利</el-col>
        <el-col :span="4">下一日涨幅如果为</el-col>
        <el-col :span="4">则今天按收盘价需要买入多少才能回本</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">计算</el-col>
        <el-col :span="4">
          <el-select v-model="item.nextDayPercent" :data-select="$index">
            <el-option
              v-for="percent in item.allPercent"
              :key="percent.value"
              :label="percent.label"
              :value="percent.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col
          :span="4"
          v-if="item.nextDayPercent"
        >{{Math.round(-(item.currentNum * item.currentPrice -item.actualPrice) / Number(item.nextDayPercent) -item.actualPrice,0)}}</el-col>
      </el-row>
    </div>
  </div>
</template>

  <script>
// import $ from "jquery";
import { allItem, allPercent } from "./data";

export default {
  data() {
    return {
      allItem: [],
      selectIndex: null
    };
  },
  mounted() {
    this.init();
  },
  update() {
    this.init();
  },
  methods: {
    init() {
      for (let index = 0; index < allItem.length; index++) {
        let all = allItem[index];
        let currentNum = 0;
        let actualPrice = 0;
        for (let detail of all.detail) {
          for (const buyAndSale of detail.buyAndSale) {
            currentNum += Number(buyAndSale.buyNum);
            actualPrice +=
              Number(buyAndSale.buyNum) * Number(buyAndSale.buyPrice);
          }
        }
        all.allPercent = allPercent;
        all.currentNum = currentNum;
        all.actualPrice = actualPrice;
      }
      this.allItem = allItem;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  padding: 10px 30px 50px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
