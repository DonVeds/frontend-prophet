<template>
  <header class="header">
      <div class="header-the">
          <hr class="header-the-line">
          <p class="header-the-p">The</p>
          <hr class="header-the-line">
      </div>
      <h1 class="header-name">{{allInfo.name}}</h1>
      <p class="header-text">{{allInfo.text}}</p>
      <hr class="header-line"> 
      <div class="header-ad">
          <p class="header-ad-sale">{{allInfo.ad[0]}}</p>
          <p class="header-ad-descr">{{allInfo.ad[1]}}</p>
      </div>
      <div class="header-info">
          <div class="header-info-weather">
              <p class="header-info-weather-title">NATIONAL WEATHER</p>
              <p class="header-info-weather-text">{{allInfo.weather[0]}}<br>{{allInfo.weather[1]}}<br>{{allInfo.weather[2]}}<br>{{allInfo.weather[3]}}</p>
          </div>
      </div>
      <div class="header-sun">
        <div class="header-sun-runes">
          <p>ᚹᛁᛚᛚ ᛒᛖ ᛒᚱᛁᚷᚻᛏ</p>
          <p>ĆПИĆƠК ĆТРÂТЕЙ</p>
          <p>К ПРƠТЧТЕНИЮ ĆЕЙЧÂĆ <b>{{showBookmarkCount}}</b></p>
        </div>
        <img class="header-sun-pic" alt="runic sun" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BlackSun.svg/1200px-BlackSun.svg.png"/>
      </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: mapGetters(['allInfo', 'showBookmarkCount']),
  async mounted() {
    this.$store.dispatch('fetchInfo')
  }
}
</script>

<style scoped lang="scss">
  header{
      display: grid;
      grid-template-columns: 30% auto 30%;
      grid-template-rows: auto ;
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
  .header-the-line{
      margin-left: 0;
      margin-right: 0;
      flex-grow: 20; 
      height: 3px;
      background-color: black;
      border:0;
  }
  .header-the-p{
      flex-grow: 1;
      font-family: 'Marck Script', cursive;
      font-weight: 600;
      font-size: 2em;
  }

  .header-name {
      grid-area: name;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
      font-family: 'Ruslan Display', cursive;
      margin: 0;
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      white-space: nowrap; /* Keeps the content on a single line */
      margin: 0 auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: .15em; /* Adjust as needed */
      animation: 
          typing 3.5s steps(40, end);
  }
  @keyframes typing {
      from { width: 0 }
      to { width: 100% }
  }

  .header-text {
      font-family: 'Kelly Slab', cursive;
      grid-area: text;
      margin: 0;
      font-weight: bold;
      text-transform: uppercase;
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
      font-family: 'Kelly Slab', cursive;
      padding: 5px;
  }

  .header-ad-sale {
      flex-grow: 1;
      margin: 0;
      font-weight: bold;
      font-size: 1em
  }


  .header-ad-descr {
      flex-grow: 2;
      margin: 0;
  }

  .header-info{
      grid-area: info;
      margin: 0px 10px;
      border: 2px dotted black;
      border-top: 0;
      border-bottom: 0;
  }

  .header-info-weather-title {
      margin: 0;
      font-family: 'Kelly Slab', cursive;
      font-weight: bold;
  }
  .header-info-weather-text {
      font-size: 12px;
      margin: 0;
      /* text-align: left; */
  }

  .header-sun {
      height: 80px;
      display: flex;
      justify-self: end;
      border-right: 2px solid black;
      text-align: right;
  }

  .header-sun-runes {
    margin:0px;
    font-size: 0.9em;
    font-family: 'Amatic SC', cursive;
    font-size: 1.5em;
    line-height: 1;
  }

  .header-sun-runes > p {
    margin: 0;
  }


  .header-sun-pic {
    animation: spin 5s linear 0s infinite;
    height: 70px;
    width: 70px;
    margin: 0 10px;
  }
  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }

</style>

