<template>
  <header class="header">
    <div class="header-the">
      <hr class="header-the-line" />
      <p class="header-the-p">The</p>
      <hr class="header-the-line" />
    </div>
    <h1 class="header-name">{{ allInfo.name }}</h1>
    <p class="header-text">{{ allInfo.text }}</p>
    <hr class="header-line" />
    <div class="header-ad">
      <p class="header-ad-sale">{{ allInfo.adPrice }}</p>
      <p class="header-ad-descr">{{ allInfo.adText }}</p>
    </div>
    <div class="header-info">
      <div class="header-info-weather">
        <p class="header-info-weather-title">NATIONAL WEATHER</p>
        <p class="header-info-weather-text">
          {{ allInfo.weatherA }}<br>
          {{ allInfo.weatherR }}<br>
          {{ allInfo.weatherS }}<br>
          {{ allInfo.weatherV }}
        </p>
      </div>
    </div>
    <div @click="changePage(allInfo)" class="header-sun" title="change reading mode">
      <div class="header-sun-runes">
        <a :class="{ underlined: !allInfo.onMainPage }">ĆПИĆƠК ĆТРÂТЕЙ<br></a>
        <a :class="{ underlined: allInfo.onMainPage }">К ПРƠТЧТЕНИЮ ĆЕЙЧÂĆ<b>{{ showBookmarkCount }}</b></a>
      </div>
      <img
        class="header-sun-pic"
        alt="runic sun"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BlackSun.svg/1200px-BlackSun.svg.png"
      />
    </div>
    <img @click="cacheBookmarks()" v-if="!allInfo.onMainPage" class="bookmarkIcon" :class="{'animated': animated}" src="../../public/img/bookmark.svg" alt="bookmark icon" title="Cache your bookmarks">
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["allInfo", "showBookmarkCount"]),
  async mounted() {
    this.$store.dispatch("fetchInfo");
  },
  methods: {
    changePage(allInfo) {
      this.$set(allInfo, "onMainPage", !allInfo.onMainPage);
    },
    cacheBookmarks() {
      this.animated = true;
      this.$store.commit('cacheBookmarks');
      setTimeout(()=>this.animated = false, 500)
    },
  },
  data() {
    return({
      animated: false
    })
  }
};
</script>

<style scoped lang="scss">

header {
  display: grid;
  grid-template-columns: 30% auto 30%;
  grid-template-rows: auto;
  grid-template-areas:
    "the the the"
    "name name name"
    "text text text"
    "line line line"
    "ad info sun";
  text-align: center;
}
.header-the {
  grid-area: the;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
}
.header-the-line {
  margin-left: 0;
  margin-right: 0;
  flex-grow: 20;
  height: 3px;
  background-color: black;
  border: 0;
}

@include width_phone {
  .header-the-line{
    height: 2px;
  }
}
.header-the-p {
  flex-grow: 1;
  font-family: "Marck Script", cursive;
  font-weight: 600;
  font-size: 2em;
}

@include width_phone {
  .header-the-p{
    font-size: 1.2em;
  }
}

.header-name {
  grid-area: name;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
  font-family: "Ruslan Display", cursive;
  margin: 0;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end);
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@include width_phone {
  .header-name{
    font-size: 1.6em;
  }
}

.header-text {
  font-family: "Kelly Slab", cursive;
  grid-area: text;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
}

@include width_phone {
  .header-text{
    font-size: 0.7em;
  }
}

.header-line {
  grid-area: line;
  width: 100%;
  height: 2px;
  background-color: black;
  border: 0;
}

.header-ad {
  grid-area: ad;
  display: flex;
  align-items: center;
  border: 2px solid black;
  font-family: "Kelly Slab", cursive;
  padding: 5px;
}

@include width_phone {
  .header-ad{
    display: none;
  }
}

.header-ad-sale {
  flex-grow: 1;
  margin: 0;
  font-weight: bold;
  font-size: 1em;
}

.header-ad-descr {
  flex-grow: 2;
  margin: 0;
}

.header-info {
  grid-area: info;
  margin: 0px 10px;
  border: 2px dotted black;
  border-top: 0;
  border-bottom: 0;
}

@include width_phone {
  .header-info{
    display: none;
  }
}

.header-info-weather-title {
  margin: 0;
  font-family: "Kelly Slab", cursive;
  font-weight: bold;
}
.header-info-weather-text {
  font-size: 12px;
  margin: 0;
  /* text-align: left; */
}

.header-sun {
  grid-area: sun;
  height: 80px;
  display: flex;
  justify-self: end;
  border-right: 2px solid black;
  text-align: right;
}

@include width_phone {
  .header-sun{
    grid-area: ad/ad/sun/sun;
    font-size: 1em;
    margin-left: 20%;
    border-right: 2px solid transparent;
  }
}

.header-sun-runes {
  margin: 0px;
  font-family: "Amatic SC", cursive;
  font-size: 1.5em;
  line-height: 1;
}

@include width_phone {
  .header-sun-runes{
    padding-top: 10px;
  }
}

.underlined {
  text-decoration: underline;
}

.header-sun-pic {
  animation: spin 5s linear 0s infinite;
  height: 70px;
  width: 70px;
  margin: 0 10px;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.bookmarkIcon {
  z-index: 1000;
  position: absolute;
  top: -20px;
  right: 10%;
  height: 163px;
}

@include width_phone {
  .bookmarkIcon {
    position: absolute;
    top: -20px;
    right: 0px;
    height: 100px;
  }
}

.animated{
  animation: pull 0.5s linear 0s;
}

@keyframes pull {
  from {
    transform: translateY(0px)
  }
  to {
    transform: translateY(20px)
  }
}

</style>
