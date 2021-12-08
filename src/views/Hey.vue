<template>
  <VueSlickCarousel v-bind="settings" class="container">
    <div class="card">
      <figure class="carousel-img">
        <img src="../assets/DryingTent.jpg" />

        <!-- <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption> -->
      </figure>
      <h4>Drying Tents</h4>
      <!-- <figcaption>
          <v-btn text color="white">{{ slide.text }}</v-btn>
        </figcaption> -->
      <p>
        Agrolog has acquired several Drying Tents in various service centers to
        enhance efficient ginger processing after harvest. This is a key aspect
        of the ginger value chain that the communities are happy to learn about.
      </p>
      <!-- <a href="Learn More">Read More</a> -->
    </div>
    <div class="card">
      <figure class="carousel-img">
        <img src="../assets/farmss.jpg" />

        <!-- <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption> -->
      </figure>
      <h4>Distribution of Farm Inputs</h4>
      <!-- <figcaption>
          <v-btn text color="white">{{ slide.text }}</v-btn>
        </figcaption> -->
      <p>
        The Agrolog/Mastercard partners provide farmers the opportunity to
        access quality farm inputs such as bags of ginger seeds, fertilizer,
        Aflasafe, herbicides, paracot, lifeline etc
      </p>
      <!-- <a href="Learn More">Read More</a> -->
    </div>
    <div class="card">
      <figure class="carousel-img">
        <img src="../assets/farm2.jpg" />

        <!-- <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption> -->
      </figure>
      <h4>
        Farm Inputs
      </h4>
      <!-- <figcaption>
          <v-btn text color="white">{{ slide.text }}</v-btn>
        </figcaption> -->
      <p>
        Happy farmers cart away inputs to their farms just in time to apply them
        according to training instructions from expert trainers
      </p>
      <!-- <a href="Learn More">Read More</a> -->
    </div>
    <div class="card">
      <figure class="carousel-img">
        <img src="../assets/mech1.jpg" />

        <!-- <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption> -->
      </figure>
      <h4>Mechanization of Ginger Farming</h4>
      <!-- <figcaption>
          <v-btn text color="white">{{ slide.text }}</v-btn>
        </figcaption> -->
      <p>
        Agrolog doubles down on mechanization and illustrate the need for
        mechanization in modern farming. The villagers are happy to learn
        something new.
      </p>
      <!-- <a href="Learn More">Read More</a> -->
    </div>
    <div class="card">
      <figure class="carousel-img">
        <img src="../assets/mech2.jpg" />

        <!-- <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption> -->
      </figure>
      <h4>Mechanization at its Peak</h4>
      <!-- <figcaption>
          <v-btn text color="white">{{ slide.text }}</v-btn>
        </figcaption> -->
      <p>
        As more farmers begin to learn and use tractors in their farm, they soon
        realize the difference. They are able to cover more work in less time.
        Now they happily expect a bumper harvest like they have never seen
        before.
      </p>
      <!-- <a href="Learn More">Read More</a> -->
    </div>
    <div class="card">
      <figure class="carousel-img">
        <img src="../assets/womene.jpg" />

        <!-- <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption> -->
      </figure>
      <h4>High Women Engagement</h4>
      <!-- <figcaption>
          <v-btn text color="white">{{ slide.text }}</v-btn>
        </figcaption> -->
      <p>
        The ratio of women to youth in the Agrolog/Mastercard Ginger Value Chain
        Project is 70/30. This is so because of the marginalization of women in
        the most rural communities. The sensitization has helped communities
        leaders appreciate this decision.
      </p>
      <!-- <a href="Learn More">Read More</a> -->
    </div>
    <div class="card">
      <figure class="carousel-img">
        <img src="../assets/womenss.jpg" />

        <!-- <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption> -->
      </figure>
      <h4>Women Training on Post Harvest Ginger Processing</h4>
      <!-- <figcaption>
          <v-btn text color="white">{{ slide.text }}</v-btn>
        </figcaption> -->
      <p>
        After harvest, ginger can be used for several purposes; it could be used
        as oil, spice, powder, confectionery, paste, drink, medicine etc.
        Agrolog has repeatedly carried on trainings for women of project
        communities to take due advantage of this opportunity.
      </p>
      <!-- <a href="Learn More">Read More</a> -->
    </div>
    <div class="card">
      <figure class="carousel-img">
        <img src="../assets/youthss.jpg" />

        <!-- <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption> -->
      </figure>
      <h4>Over 500 Youth trained on ICT for Business</h4>
      <!-- <figcaption>
          <v-btn text color="white">{{ slide.text }}</v-btn>
        </figcaption> -->
      <p>
        The eventual and inevitable success of the ginger valua chain project
        will lead to a boom in the economy of Southern Kaduna. Youth in these
        communities are therefore trained to take their businesses to another
        level leveraging ICT.
      </p>
      <!-- <a href="Learn More">Read More</a> -->
    </div>
  </VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,

        focusOnSelect: true,
        infinite: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
.container {
  width: 90%;
  margin: 0 auto;
  max-width: 1440px;
}

.card {
  box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97);
  background-color: #ffff;
  padding: 2rem;
  /* width: 350px !important; */
  width: 100%;
  height: 100%;
  min-height: 500px;
  /* height: 450px !important; */
  margin-bottom: 1rem;
  /* box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75); */
  /* margin: 0 1rem; */
}
.card img {
  width: 100%;
  /* width: 300px; */
  height: 200px;
}
.card h4 {
  margin: 0.75rem 0;
}
.card a {
  background-color: #009432;
  padding: 0.45rem;
  margin: 0.75rem 0;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
}

/* .slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 50px;
  line-height: 1;
  opacity: 1;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

.slick-slider[data-v-3d1a4f76] {
  position: relative;
  padding: 0 2rem 2rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list[data-v-3d1a4f76] {
  position: relative;
  display: block;
  overflow: hidden;

  margin: 0;
  padding: 0;
  transform: translateZ(0);
}

.slick-dots li button {
  font-size: 50px;
  line-height: 1;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  /* color: #fff; */
  border: 0;
  border-radius: 50%;
  outline: none;
  background: #009432;
}
.slick-dots li button:before {
  font-family: "slick";
  font-size: 6px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: "•";
  text-align: center;
  opacity: 0.25;
  color: #fff !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-next {
  /* right: 0; */
  top: 50%;
  transform: translate(0, -50%);
}
.slick-prev {
  /* right: 0; */
  top: 50%;
  transform: translate(0, -50%);
}
.slick-prev,
.slick-next {
  content: "" !important;
  /* font-size: 50px !important; */
  line-height: 1;
  position: absolute;
  top: 50%;
  /* display: block; */
  display: flex;
  width: 50px;
  height: 50px;
  /* padding: 1rem; */
  transform: translate(0, -50%);
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 50%;
  outline: none;
  background: #009432 !important;
  /* text-indent: -9000px; */
}

.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 30px;
  line-height: 1;
  opacity: 0.75;
  color: white;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-indent: 9000px;
}

button #value {
  display: none;
}

@media (max-width: 700px) {
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-slider[data-v-3d1a4f76] {
    position: relative;
    /* padding: 1rem; */
  }

  .slick-dots {
    position: absolute;
    bottom: -30px;
    display: block;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
