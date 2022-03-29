<template>
  <div>
    <header class="custom__bg">
      <v-row>
        <v-col cols="12" md="6">
          <v-card
            outlined
            tile
            color="transparent"
            height="100vh"
            class="pa-10 d-flex align-center justify-center mt-n16"
          >
            <v-card outlined tile color="transparent">
              <div
                class="text-h3 text-md-h2 text-lg-h1 font-weight-light white--text"
              >
                AGROLOG
              </div>
              <p class="text-h5 font-weight-light grey--text text--lighten-3">
                Creating innovations to lift and transform the poor into the
                engine of economic growth.
              </p>
              <v-divider class="custom__divider white">&nbsp;</v-divider>
              <div class="mt-6">
                <v-btn
                  href="#who__we__are"
                  tile
                  depressed
                  large
                  color="white success--text"
                  class="mr-4 btny"
                  
                >
                  EXPLORE
                </v-btn>
                <v-btn
                  href="#agrolog__projects"
                  tile
                  depressed
                  outlined
                  large
                  color="white"
                >
                  Learn More
                </v-btn>
              </div>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </header>
    <!-- WHO WE ARE -->
    <section class="grey lighten-4" id="who__we__are">
      <v-container>
        <v-card
          outlined
          tile
          min-height="500px"
          data-aos="fade-up"
        >
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-8 grey--text text--darken-3 text-center custom__heading-green"
          >
            WHO WE ARE
          </h2>
          <v-card-text class="mt-12">
            <v-row>
              <v-col cols="12" md="6">
                <v-card
                  tile
                  outlined
                  class="mb-10 pa-2"
                  color="transparent"
                  data-aos="fade-up"
                >
                  <h2 class="text-h5 success--text">About Us</h2>
                  <div
                    class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light font-weight-light"
                  >
                    AGROLOG is a company registered in Nigeria with a vision to
                    create social innovations that will lift the rural poor out
                    of poverty and transform them into the engine of economic
                    growth. Our mission is to create platforms, opportunities
                    and sustainable agribusinesses that will drive economic
                    growth.
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" class="hidden-md-and-up">
                <v-img src="../assets/ginger.jpeg"></v-img>
              </v-col>
              <v-col cols="12" sm="4" class="hidden-md-and-up">
                <v-img src="../assets/ginger2.jpeg"></v-img>
              </v-col>
              <v-col cols="12" sm="4" class="hidden-md-and-up">
                <v-img src="../assets/ginger3.jpeg"></v-img>
              </v-col>
              <v-col cols="12" md="6" class="hidden-sm-and-down">
                <div class="composition">
                  <v-img
                    class="composition__photo composition__photo--p1"
                    src="../assets/ginger.jpeg"
                  ></v-img>
                  <v-img
                    class="composition__photo composition__photo--p2"
                    src="../assets/ginger2.jpeg"
                  ></v-img>
                  <v-img
                    class="composition__photo composition__photo--p3"
                    src="../assets/ginger3.jpeg"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <section class="services" id="services">
      <div class="services-wrap container">
        <h2
          class="impact text-h5 text-md-h4 font-weight-light pt-8 grey--text text--darken-3 text-center "
        >
          WHAT WE DO
        </h2>
        <!-- <p class="lead">
          Our services cover a wide range of innovative initiatives designed to
          help people experience technology differently and make the most of it
          with a view to identifying opportunities, solving problems and
          creating value.
        </p> -->

        <div class="services-cards">
          <div class="carddd">
            <i class="fas fa-chart-bar fa-3x"></i>

            <!-- <h4>GreyHobb</h4> -->
            <p>
              We are growing community of smallholder farmers that produce
              quality Ginger/Tumeric and soy beans sustainably. All produce that
              meet the AgroLog seal of quality are nurtured with a consciousness
              of a tradition of responsibility at every stage from land
              preparation to harvest.
            </p>
            <!-- <div class="learn"><a href="greyhobb.html">Learn More </a></div> -->
          </div>

          <div
            class="carddd"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <i class="fas fa-warehouse fa-3x"></i>

            <!-- <h4>GreyTech</h4> -->
            <p >
              We operate a Ginger Hub at Kachia in Kaduna state where produce is
              evaluated, graded, branded for the market as well as for value
              addition. On the forward integration front we work with partner
              clusters to achieve best practices in postharvest handling that
              deliver quality to the table.
            </p>
            <!-- <div class="learn"><a href="">Learn More </a></div> -->
          </div>

          <div class="carddd">
            <i class="fas fa-user-friends fa-3x"></i>

            <!-- <h4>GreyCreate</h4> -->
            <p>
              Our community of farmers are organized in cooperative clusters
              across 12 Local Government Areas that grow ginger in Kaduna state.
              We have 10 service centers that serve the needs of our farmers.
              Our initial focus is on vegetables but our network is growing to
              include commodities across the spectrum of agribusiness.
            </p>
            <!-- <div class="learn"><a href="">Learn More </a></div> -->
          </div>

          <div class="carddd">
            <i class="fas fa-chart-pie fa-3x"></i>

            <!-- <h4>GreyFund</h4> -->
            <p >
              The core of that tradition being aflatoxin free, quality produce
              that meets global best practices and standards. The overarching
              goal is create an enterprise in farming for these smallholder
              farmers with that assure them and their families of a future that
              would otherwise remain elusive.
            </p>
            <!-- <div class="learn"><a href="">Learn More </a></div> -->
          </div>
        </div>
      </div>
    </section>
    <section class="rice-farm">
      <div class="rice-farm-wrap container">
        <div class="left">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-8 grey--text text--darken-3"
          >
            Global Reach
          </h2>
          <p  class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light ">
            To keep the pace on meeting international standards on best farming
            practices with a view to farming optimally, we strive to partner and
            collaborate with global players of the highest competence in the
            agricultural sector with decades, if not centuries of track records
            of success in innovative agriculture. Some of these
            agro-corporations include; Alphavet, Hungaro Seeds, AgroFeed,
            Babolna Tetra, STE Tech etc.
          </p>
        </div>
        <div class="right">
          <div class="image-grid">
            <div class="image-row">
              <div class="image image-01"></div>
              <div class="image image-02"></div>
              <div class="image image-03"></div>
            </div>
            <div class="image-row">
              <div class="image image-04"></div>
              <div class="image image-05"></div>
              <div class="image image-06"></div>
            </div>
            <!-- <div class="image-row">
              <div class="image image-06"></div>
              <div class="image image-07"></div>
              <div class="image image-08"></div>
              <div class="image image-09"></div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

     <section class="social-resp">
      <div class="wrapper flexer container">
        <div class="left">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/gLtJTtKNTvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
        <div class="right px-5">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-2 mt-5 grey--text text--darken-3 text-left custom__heading-left"
          >
            AGROLOG'S CORPORATE SOCIAL RESPONSIBILITY
          </h2>
          <div
            class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light "
          >

          <p> As part of its Corporate Social Responsibility (CSR), Agrolog has embarked on a mission to cater for over 10,000 Internally Displaced Persons (IDPs) in Kaduna state, Nigeria. Farmers/Herders clash, insurgency and kidnappings are some of the reasons for the displacement of community inhabitants and in response to the unfortunate situation, Agrolog, in February, 2022 provided; food stuff such as <span v-if="readMore"></span><span v-else>...</span><span v-show="readMore">maize, rice, beans, soy beans, palm oil, salt and seasoning as well as medication, sanitary pads, soaps and detergents for these IDPs across several local governments costing about 20 Million Naira. There are further plans to provide skill acquisition, empowerment programs and hopefully resettlement for the displaced which is totally in line with Agrolog’s overall vision of lifting the rural poor out of poverty and transforming them into the engine of economic prosperity.</span><v-btn @click="readMore =! readMore"
                  color="success"
                  small
                  plain
                  ><span v-if="readMore">Show Less</span>
              <span v-else>Show More</span></v-btn></p>

            
             
          </div>


        </div>
      </div>
    </section>

    <section class="social-resp">
      <div class="wrapper container">
        
        <div class="right">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-2 mt-5 grey--text text--darken-3 text-left custom__heading-left"
          >
           THE AGROLOG - IDH PROJECT
          </h2>
          <div
            class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light"
          >

          <p> Agrolog and IDH collaborates with a view to lifting small holder ginger farmers another step higher in the ginger value chain business. As a result of Agrolog’s prior initiatives, ginger farmers in Kaduna, Nigeria have gained visibility in terms of best ginger farming practices through mechanization for improved yield and production of quality aflatoxin-free ginger for global markets. Today the IDH partnership presents an objective whose aim is to; facilitate access to credit facilities and quality inputs by Small Holder Farmers, introduce more eco-friendly practices, facilitate certification for export of produce<span v-if="readMore"></span><span v-else>...</span><span v-show="readMore"> initiate trade and broker partnership with off-takers, make investment linkages and trade relations with both local and international partners, introduce technologies for value chain sustainability, facilitate block-chain farming/supply business model, provide training support and benchmark for standardized international best practices.</span><v-btn @click="readMore =! readMore"
                  color="success"
                  small
                  plain
                  ><span v-if="readMore">Show Less</span>
              <span v-else>Show More</span></v-btn></p>

            
             
          </div>


        </div>

        <div class="left lefty">
         <img class="smaller" src="../assets/dr1.jpg" alt="">
         <div class="twos">
           <img src="../assets/dr2.jpg" alt="">
           <img src="../assets/dr3.jpg" alt="">

         </div>
        </div>
      </div>
    </section>
    <!-- WHAT WE DO -->
    <!-- <section class="white">
      <v-container>
        <v-card tile outlined color="white">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-2 grey--text text--darken-3 text-center custom__heading-orange"
          >
            WHAT WE DO
          </h2>
          <v-card-text>
            <v-row>
              <v-col cols="12" class="mt-4">
                <v-card color="#C8E6C9" tile>
                  <v-row class="pa-4">
                    <v-col cols="12" sm="6" md="6" lg="3">
                      <v-card outlined tile height="100%" data-aos="fade-right">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-chart-areaspline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-body-2 text-md-body-1">
                          We are growing community of smallholder farmers that
                          produce quality Ginger/Tumeric and soy beans
                          sustainably. All produce that meet the AgroLog seal of
                          quality are nurtured with a consciousness of a
                          tradition of responsibility at every stage from land
                          preparation to harvest.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="3">
                      <v-card outlined tile height="100%" data-aos="fade-right">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-office-building-marker-outline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-body-2 text-md-body-1">
                          We operate a Ginger Hub at Kachia in Kaduna state
                          where produce is evaluated, graded, branded for the
                          market as well as for value addition. On the forward
                          integration front we work with partner clusters to
                          achieve best practices in postharvest handling that
                          deliver quality to the table.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="3">
                      <v-card outlined tile height="100%" data-aos="fade-left">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-account-group-outline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-body-2 text-md-body-1">
                          Our community of farmers are organized in cooperative
                          clusters across 12 Local Government Areas that grow
                          ginger in Kaduna state. We have 10 service centers
                          that serve the needs of our farmers. Our initial focus
                          is on vegetables but our network is growing to include
                          commodities across the spectrum of agribusiness.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="3">
                      <v-card outlined tile height="100%" data-aos="fade-left">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-cog-outline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-body-2 text-md-body-1">
                          The core of that tradition being aflatoxin free,
                          quality produce that meets global best practices and
                          standards. The overarching goal is create an
                          enterprise in farming for these smallholder farmers
                          with that assure them and their families of a future
                          that would otherwise remain elusive.
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </section> -->
    <!-- AGROLOG-MASTERCARD GINGER VALUE CHAIN PROJECT -->
    <section id="agrolog__projects">
      <v-container>
        <v-card tile outlined color="white">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-2 mt-5 grey--text text--darken-3 text-center custom__heading-green"
          >
            AGROLOG-MASTERCARD GINGER VALUE CHAIN PROJECT
          </h2>
          <div
            class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light px-10"
          >
            In the wake of the Covid 19 pandemic Agrolog in partnership with
            Mastercard Foundation launched an intervention (the Recovery and
            Resilience Program) for 60,000 smallholder farmers (SMH) out of 1.2
            million vulnerable indigenous ginger farming communities of Kaduna
            state covering 12 local government areas. Many of these famers,
            mainly youth and women, depend on their ginger as the sole source of
            cash to support the production of other food crops.
          </div>
          <v-card-text>
            <v-carousel
              show-arrows
              height="auto"
              hide-delimiter-background
              light
            >
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="4" xs="12">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/Jy55ihjiPmU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                  <v-col cols="12" sm="4" xs="12">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/kpmnvJ-yAJQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                  <v-col cols="12" sm="4" xs="12">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/4jE8BKJam7M"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    ></v-col
                  >
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="4" xs="12">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/BCUA6_bsOeE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    ></v-col
                  >
                  <v-col cols="12" sm="4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/fBnm_rUTIhk"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/p0Ki3TpnIVY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/0cvOc_s67Ko"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/__84dO5VYjQ"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe
                  ></v-col>
                  <v-col cols="12" sm="4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/JfTZNttAayA"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/QyHWVrHFloA"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe
                  ></v-col>
                  <v-col cols="12" sm="4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/NJs_Gd80EBQ"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/QyHWVrHFloA"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/JO7P-iqe05A"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
            <div></div>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <!-- <carousel-3d
      class="carousel"
      :controls-visible="true"
      :clickable="true"
      :height="300"
    >
      <slide class="slide" :index="i" :key="i" v-for="(slide, i) in slides">
        <figure class="carousel-img">
          <img :src="slide.src" />

          <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption>
        </figure>
        <h4>Lorem, ipsum dolor.</h4>
        <figcaption>
          <v-btn text color="white">{{ slide.text }}</v-btn>
        </figcaption>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia
          ratione pariatur, harum mollitia quisquam et doloremque unde
          necessitatibus blanditiis?
        </p>
        <a href="Learn More">Learn More</a>
      </slide>
    </carousel-3d> -->
    <section class="project">
      <h2
        class="text-h5 text-md-h4 font-weight-light pt-8 grey--text text--darken-3 text-center impact custom__heading-green"
      >
        Project Impact
      </h2>
      <Hey />
    </section>

    <section class="social-resp">
      <div class="wrapper container">
        
        <div class="right">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-2 mt-5 grey--text text--darken-3 text-left custom__heading-left"
          >
           STERLING BANK SUPPORTS AGROLOG FARMERS WITH CREDIT FACILITIES
          </h2>
          <div
            class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light"
          >

          <p> As farmers rejoice at the new dawn of a prosperous ginger value chain business resulting from the mastery of best ginger farming practices introduced by Agrolog, Sterling Bank offers a strong arm to Agrolog’s registered small holder ginger farmers with successful track record of ginger farming. A single digit interest loan for farmers to farm even more<span v-if="readMore"></span><span v-else>...</span><span v-show="readMore"> ginger for a larger market.This initiative positions farmers for independence, especially as most of these farmers through Agrolog’s initiatives are now financially inclusive..</span><v-btn @click="readMore =! readMore"
                  color="success"
                  small
                  plain
                  ><span v-if="readMore">Show Less</span>
              <span v-else>Show More</span></v-btn></p>

            
             
          </div>


        </div>

        <div class="left">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/LN10nsX5SW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
        </div>
      </div>
    </section>

    <section class="social-resp">
      <div class="wrapper flexer container">

        <div class="left">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/cH9XhLclaxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <div class="right px-5">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-2 mt-5 grey--text text--darken-3 text-left custom__heading-left"
          >AGROLOG'S GINGER IS AFLATOXIN FREE
          </h2>
          <div
            class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light"
          >

          <p>A major impediment faced by farmers whose desire is to farm for the global community is the presence of aflatoxin in their crops. Agrolog in partnership with Harvestfield has introduced Aflasafe to ginger farming. This solution, drastically reduces if not eliminates the presence of Aflatoxin in Agrolog’s ginger. Today Agrolog ginger farmers boast to farm for the European market and the rest of the world.</p>

            
             
          </div>


        </div>

        
      </div>
    </section>

    <section class="social-resp">
      <div class="wrapper container">

        
        
        <div class="right">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-2 mt-5 grey--text text--darken-3 text-left custom__heading-left"
          >MECHANIZATION ACROSS THE GINGER VALUE CHAIN
          </h2>
          <div
            class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light"
          >

          <p>At Agrolog, we believe that there is an untapped abundance in ginger farming and that farmers must unlearn most of the traditional methods of farming ginger and embrace best practices for better and improved yield. This is why we invest immensely on farmers’ training, monitoring and supervision not just during planting, growing and harvesting seasons but also during processing. Farmers are welcome to learn mechanized ginger processing skills at our Service Centers located across 12 Local Government Areas in Kaduna State.</p>

            
             
          </div>


        </div>

        <div class="left px-2">
         <iframe width="100%" height="315" src="https://www.youtube.com/embed/CQAWZAUlvfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        
      </div>
    </section>
    

   

    <section class="rice-farm">
      <div class="rice-farm-wrap-two flex container">
        <div class="left">
          <div class="image-grid">
            <div class="image-row">
              <div class="image image-05">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/ZqjI2TZIQ1k"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <!-- <div class="image image-03"></div> -->
            </div>
            <div class="image-row">
              <div class="image image-04"></div>
              <div class="image image-01"></div>
              <div class="image image-02"></div>
            </div>
            <div class="image-row">
              <!-- <div class="image image-06"></div> -->
              <!-- <div class="image image-07"></div> -->
              <!-- <div class="image image-08"></div>
              <div class="image image-09"></div> -->
            </div>
          </div>
        </div>

        <div class="right">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-8 grey--text text--darken-3"
          >
            Agrolog Rice Farm
          </h2>

           <p class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light"> Our rice farm covers a collective land area of over 1,000 hectares
            across Kaduna and Benue states. As food scarcity increases throughout
            the continent as a result of insecurity, Covid 19, Farmer/Herders
            clash and poverty, we have taken the initiative to also increase our rice
            production to produce more food for our growing population.
             In the past decade, rice consumption has been on a steady increase which reached
             4.7% as at 2017. Rice is one of the most consumed staples in Nigeria, with a 
             consumption per capita of 32kg, also accounting for 20% of Africa's total consumption
            <span v-if="readMore"></span><span v-else>...</span><span v-show="readMore"> In 2011, rice accounted for 10% of household food expenditure, and 6.6% of total 
             household spending. Given the importance of rice as a staple food in Nigeria, boosting 
             its production is of paramount importance to Agrolog and we plan to increase its production 
             in the year 2022.</span><v-btn @click="readMore =! readMore"
                  color="success"
                  small
                  plain
                  ><span v-if="readMore">Show Less</span>
              <span v-else>Show More</span></v-btn></p>
          <p class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light">
            
          </p>

                 
        </div>
      </div>
    </section>

    <!-- <div>
      <VueSlickCarousel v-bind="settings">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VueSlickCarousel>
    </div> -->
    <!-- EMPOWERING AFRICA -->
    <section class="grey lighten-4">
      <v-card tile outlined color="white">
        <h2
          class="text-h5 text-md-h4 font-weight-light pt-2 mt-5 grey--text text--darken-3 text-center custom__heading-green"
        >
          EMPOWERING AFRICA TO FEED THE FUTURE
        </h2>
        <v-card-text>
          <v-row class="container">
            <v-col cols="12" sm="6" class="pt-0">
              <div
                class="text-center mt-0 pt-0 mt-sm-16 text-body-1 text-md-h6 font-weight-light"
              >
                Agrolog is committed to empowering young and innovative minds
                throughout Africa with requisite tools in Agribusiness as well
                as providing mentorship in the sector for sustainable growth.
              </div>
            </v-col>
            <v-col cols="12" sm="6" class="pt-0">
              <v-card flat tile>
                <v-img
                  contain
                  height="300"
                  width="100%"
                  src="../assets/empowering.jpg"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
    <!-- OUR SERVICES -->
    <section class="grey lighten-4">
      <v-card tile outlined color="white">
        <h2
          class="text-h5 text-md-h4 font-weight-light pt-4 grey--text text--darken-3 text-center custom__heading-orange"
        >
          OUR SERVICES
        </h2>
        <v-card-text>
          <v-row class="container">
            <v-col cols="12" sm="6">
              <!-- <v-img
                height="300"
                contain
                src="../assets/undraw_services_5tv9(2).svg"
              ></v-img> -->
              <v-card tile outlined data-aos="flip-up">
                <v-img
                  height="300"
                  width="100%"
                  src="../assets/farming_women.jpg"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <div
                class="text-center mt-16 text-body-1 text-md-h6 font-weight-light"
                data-aos="flip-down"
              >
                Agrolog provides its community of farmers servces in both
                backward and forward integration components of the value chains.
                For details on services click below.
              </div>
              <div class="text-center mt-4">
                <v-btn @click="goServices()" color="#f9952d" small outlined tile
                  >Click here</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
    <!-- HOW YOU CAN JOIN US -->
    <section class="grey lighten-4">
      <v-card tile outlined color="grey lighten-4">
        <h2
          class="text-h5 text-md-h4 font-weight-light pt-4 mt-5 grey--text text--darken-3 text-center custom__heading-green"
        >
          HOW YOU CAN JOIN US
        </h2>
        <v-card-text>
          <v-row class="container">
            <v-col cols="12" sm="6">
              <div
                class="text-center mt-16 text-body-1 text-md-h6 font-weight-light"
                data-aos="flip-down"
              >
                AgroLog is open to partnership with institutional as well as
                individual investors and Donor organisations to structure
                financing packages for its small holder farmer members for
                returns and social impact. For details click below.
              </div>
              <div class="text-center mt-4">
                <v-btn
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdkINs4WMlK4bSQ6bljdtKzHVBIpvYVNUXRK_9PFs5XKIsFgA/viewform"
                  color="success"
                  small
                  outlined
                  tile
                  >Click here</v-btn
                >
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card tile outlined color="white" data-aos="flip-up">
                <!-- <v-card color="transparent" tile outlined>
                  <v-img
                    height="300"
                    width="100%"
                    src="../assets/join_us.jpg"
                  ></v-img>
                </v-card> -->
                <v-img
                  height="300"
                  contain
                  src="../assets/undraw_fill_forms_yltj.svg"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
    <!-- OUR PROJECTIONS -->
    <section class="grey lighten-4">
      <v-card tile outlined color="white" class="custom__bg-1">
        <h2
          class="text-h5 text-md-h4 font-weight-light pt-4 white--text text-center custom__heading-white"
        >
          <span class="warning--text font-weight-light">OUR</span> PROJECTIONS
        </h2>
        <v-card-text>
          <v-row class="container" justify="center" align="center">
            <v-col cols="10">
              <v-card
                tile
                elevation="10"
                color="transparent"
                class="py-4"
                data-aos="zoom-in"
              >
                <div
                  class="white--text d-flex flex-column align-center justify-center my-4"
                >
                  <span class="text-h4 text-sm-h3 text-md-h2 font-weight-thin"
                    >500,000</span
                  >
                  <span
                    class="text-body-2 text-sm-body-1 text-md-h6 font-weight-light text-center"
                  >
                    Youth and women farmers targeted by 2025</span
                  >
                </div>
                <v-divider class="white mx-16"></v-divider>
                <div
                  class="white--text d-flex flex-column align-center justify-center my-4"
                >
                  <span class="text-h4 text-sm-h3 text-md-h2 font-weight-thin"
                    >5,000,000+</span
                  >
                  <span
                    class="text-body-2 text-sm-body-1 text-md-h6 font-weight-light text-center"
                  >
                    Jobs to be created</span
                  >
                </div>
                <v-divider class="white mx-16"></v-divider>
                <div
                  class="white--text d-flex flex-column align-center justify-center my-4"
                >
                  <span class="text-h4 text-sm-h3 text-md-h2 font-weight-thin"
                    >2,500,000</span
                  >
                  <span
                    class="text-body-2 text-sm-body-1 text-md-h6 font-weight-light text-center"
                  >
                    Youths and women to gain social security through the Social
                    Safety Nets</span
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
    <!-- OUR PARTNERS -->
    <section id="agrolog__partners">
      <div class="white mt-1">
        <v-row class="pa-2 container">
          <v-col
            cols="12"
            sm="4"
            md="3"
            class="d-flex justify-center align-center"
          >
            <v-card color="transparent" class="pa-2" tile>
              <h3 class="text-h6 text-md-h5 text-center font-weight-light">
                Trusted fully by our partners across Africa & beyond
              </h3>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" md="1">
            <v-img contain src="../assets/gurara.jpeg" height="100"></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <v-img
              contain
              src="../assets/harvestfield.jpeg"
              height="100"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <v-img contain src="../assets/nabg.jpeg" height="100"></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <v-img contain src="../assets/ocp.jpeg" height="100"></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="1">
            <v-img
              contain
              src="../assets/palm_valley.jpeg"
              height="100"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="1">
            <v-img contain src="../assets/greysoft.jpeg" height="100"></v-img>
          </v-col>
        </v-row>
      </div>
    </section>
    <!-- FOOTER -->
    <v-footer dark padless class="grey darken-3 white--text text-center">
      <v-card flat tile class="grey darken-3 white--text text-center container">
        <v-card-text>
          <v-btn
            v-for="item in footerItems"
            :key="item.href"
            class="mx-4 white--text"
            icon
            :href="item.href"
          >
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text
          class="white--text pt-0 text-body-2 text-sm-body-1 font-weight-light"
        >
          Agrolog Limited (RC 1527119) is a registered agribusiness
          company specialized in production and trade of agricultural
          commodities, agrologistics, various agricultural investment and farm
          management. Innovations that assure the delivery of wholesome food to
          consumers constitute the value proposition which AgroLog brings to its
          clients.
        </v-card-text>
        <div
          class="text-center white--text pt-0 text-body-2 text-sm-body-1 font-weight-bold"
        >
          <span>Head Office: 31, Gwari Avenue Barnawa Kaduna Nigeria</span>
        </div>
        <v-divider></v-divider>

        <v-card-text class="white--text body-1">
          {{ new Date().getFullYear() }} —
          <strong class="success--text mr-4">Agrolog</strong>
          <span>
            <v-btn small outlined href="https://agrolog.farm:2096/">
              <v-icon class="mr-1">mdi-email</v-icon>
              <span class="text-capitalize">Check Mail</span>
            </v-btn>
          </span>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import Hey from "./Hey.vue";
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// // optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

// import { Carousel3d, Slide } from "vue-carousel-3d";
// import Movie from "./Movie";
// import "swiper/dist/css/swiper.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Home",
  data: () => ({
    // slides: [
    //   { src: require("../../public/01.jpg"), text: "Cheb Khaled" },
    //   { src: require("../../public/02.jpeg"), text: "Soolking" },
    //   { src: require("../../public/03.png"), text: "Chakira" },
    //   { src: require("../../public/03.png"), text: "Chakira" },
    //   { src: require("../../public/03.png"), text: "Chakira" },
    //   { src: require("../../public/03.png"), text: "Chakira" },
    //   { src: require("../../public/03.png"), text: "Chakira" },
    // ],

    footerItems: [
      { icon: "mdi-facebook", href: "https://www.facebook.com/agrolog3" },
      { icon: "mdi-twitter", href: "https://twitter.com/agrolog3" },
      {
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/in/agrolog-farm-819549207",
      },
      {
        icon: "mdi-instagram",
        href: "https://www.instagram.com/agrolog300/",
      },
    ],
    readMore:false
  }),

  components: {
    // Carousel3d,
    // Slide,
    Hey,
  },

  // data: () => ({

  //   footerItems: [
  //     { icon: "mdi-facebook", href: "https://www.facebook.com/agrolog3" },
  //     { icon: "mdi-twitter", href: "https://twitter.com/agrolog3" },
  //     {
  //       icon: "mdi-linkedin",
  //       href: "https://www.linkedin.com/in/agrolog-farm-819549207",
  //     },
  //     { icon: "mdi-instagram", href: "https://www.instagram.com/agrolog300/" },
  //   ],
  // }),
  methods: {
    goServices() {
      this.$router.push("/service");
    },
  },
};
</script>

<style lang="scss">
.v-carousel__controls {
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  bottom: -40px;
  display: none;
  height: 50px;
  justify-content: center;
  list-style-type: none;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.mdi:before,
.mdi-set {
  display: inline-block;
  font: normal normal normal 24px/1 "Material Design Icons";
  font-size: inherit;
  text-rendering: auto;
  // background: green;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
  height: 24px;
  font-size: 24px;
  width: 24px;
  color: white;
}
.impact {
  font-size: 2rem;
  text-transform: uppercase;
  color: #424242 !important;
  caret-color: #424242 !important;
  font-weight: 300;
}

// .carousel-3d-container figcaption {
//   position: absolute;
//   background-color: rgba(0, 0, 0, 0.5);
//   color: #fff;
//   bottom: 0;
//   position: absolute;
//   bottom: 0;
//   padding: 15px;
//   font-size: 12px;
//   min-width: 100%;
//   box-sizing: border-box;
// }

.carousel {
  // display: grid;
  // place-items: center;
  // background-color: #ffff;
  // box-shadow: 5px 10px 18px #e6e5e5;
  text-align: center;
  width: 100%;
  /* height: 100%; */
  cursor: pointer;
  /* background-color: transparent; */
  height: 500px !important;

  /* perspective: 1000px; */
  perspective: 2000px;
  box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97);
}

.slide {
  background-color: #ffff;
  box-shadow: 5px 10px 18px #e6e5e5;
  text-align: center;
  width: 100%;
  /* height: 100%; */
  cursor: pointer;
  /* background-color: transparent; */
  height: 440px !important;

  /* perspective: 1000px; */
  perspective: 2000px;
  box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97);
  padding: 1rem;
  border: none;
}

.carousel img {
  width: 300px;
  height: 200px;
  // object-fit: contain;
}
.carousel h4 {
  margin: 0.75rem 0;
}
.carousel a {
  background-color: #009432;
  padding: 0.45rem;
  margin: 0.75rem 0;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
}
.carousel-3d-controls {
  display: none;
}
.custom__bg {
  background: linear-gradient(rgba(0, 148, 50, 0.9), rgba(0, 148, 146, 0.7)),
    url("../assets/ginger.jpeg");
  -webkit-background: linear-gradient(
      rgba(0, 148, 50, 0.9),
      rgba(0, 148, 146, 0.7)
    ),
    url("../assets/ginger.jpeg");
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - 52px);
}

.custom__bg-1 {
  background: linear-gradient(rgba(0, 148, 50, 0.9), rgba(0, 148, 146, 0.7)),
    url("../assets/ginger.jpeg");
  -webkit-background: linear-gradient(
      rgba(0, 148, 50, 0.9),
      rgba(0, 148, 146, 0.7)
    ),
    url("../assets/ginger.jpeg");
  background-size: cover;
  background-attachment: fixed;
  height: 80%;
}

.custom__divider {
  width: 110px;
}
.custom__heading-green::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #009432;
  content: " ";
  margin: 0 auto;
  // margin-top: 10px;
  margin-bottom: 30px;
}

.custom__heading-left::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #009432;
  content: "";
  margin: 0 ;
  // margin-top: 10px;
  margin-bottom: 30px;
}

.custom__heading-orange::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #f9952d;
  content: " ";
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
}

.custom__heading-white::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #ffffff;
  content: " ";
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
}

.filter--green {
  filter: invert(20%) sepia(100%) saturate(1000%) hue-rotate(50deg)
    brightness(60%) contrast(100%);
}

.composition {
  position: relative;

  &__photo {
    width: 55%;
    height: 200px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    border-radius: 0.2rem;
    position: absolute;
    z-index: 10;
    transition: all 0.2s;
    outline-offset: 2rem;

    &--p1 {
      left: 0;
      top: -2rem;
    }
    &--p2 {
      right: 0;
      top: 2rem;
    }
    &--p3 {
      left: 20%;
      top: 5rem;
    }

    &:hover {
      outline: 1px solid #f9952d;
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
      z-index: 20;
    }
  }

  &:hover &__photo:not(:hover) {
    transform: scale(0.95);
  }
}

.slide-fade-enter-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}

.services {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.services .services-wrap {
  text-align: center;
}
.services .services-wrap h2 {
  position: relative;
  line-height: 0px;
  /* font-size: clamp(1rem, 2rem, 3.5rem); */
  font-size: var(--h1-font-size);
  font-style: normal;
  text-align: center;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  margin: 1.5rem auto;
  font-weight: 500;
  /* max-width: 200px; */
  /* color: #fff; */
  font-size: 2.5rem;
  text-transform: uppercase;
  color: #424242 !important;
  caret-color: #424242 !important;
  font-weight: 300;
  padding-bottom: 1rem;
}

.rice-farm .left h2{

  position: relative;
}

.rice-farm .left h2::after{
content: "";
  position: absolute;
  width: 90px;
  height: 2px;
  background-color: #009432;
  bottom: -40%;
  left: 50%;
  transform: translate(-50%, 10px);
  margin-top: 1rem;
}

.services .services-wrap h2::after {
  content: "";
  position: absolute;
  width: 70px;
  height: 3px;
  background-color: #009432;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 10px);
  margin-top: 1rem;
}
.services .services-wrap p.lead {
  /* line-height: 30.2px; */
  /* font-size: clamp(0.75rem, 1.2rem, 2rem); */
  font-size: var(--h3-font-size);
  font-style: normal;
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 700px;
  margin: 0 auto 1rem;
}

.services .services-wrap .services-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  place-items: center;
  /* padding: 1rem; */
}
.services .services-wrap .services-cards .carddd {
  /* position: relative;
  left: -300px; */
  /* background-color: #e4e4e4; */
  background-color: #ffff;
  color: var(--text-color);
  padding: 1rem;
  border: 2px solid rgba(77, 77, 77, 0.18);
  min-height: 400px;
  min-width: 270px;
  box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  /* opacity: 0.25 !important; */
}

.services .services-wrap .services-cards .carddd:hover {
  transform: scale(1.1) !important;
}

.services .services-wrap .services-cards i {
  /* color: #ab042c; */
  margin: 0.75rem 0;
  color: #009432;
}
.services .services-wrap .services-cards h4 {
  /* margin: 0.75rem 0; */
  font-weight: 700;
  font-size: clamp(--h2-font-size);
  font-style: normal;
  line-height: 20.6px;
}
.services .services-wrap .services-cards p {
  margin: 1rem 0;
  /* margin: 0.75rem 0; */
  font-weight: 400;
  font-style: normal;
  font-size: clamp(--h3-font-size);
  text-align: center;
  height: 100px;
}

.rice-farm-wrap {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  // place-items: center;
  align-items: center;
}
.rice-farm .left p{
  font-size: 1.25rem;
}
.rice-farm-wrap-two {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  // place-items: center;
  align-items: center;
}
.wrapper{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
  align-items: center;
}

.lefty {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lefty img{
  width: 100%;
}



.lefty .twos {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1rem;
}
@media (max-width: 800px) {
  .rice-farm-wrap-two {
    // display: grid;
    // grid-template-columns: 1fr;
    gap: 2rem;
    // place-items: center;
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
  }

  .wrapper{
  grid-template-columns:1fr;

}

.flexer{
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}


  
  .rice-farm-wrap-two .left {
    order: 1;
    width: 100%;
  }
  .rice-farm-wrap-two .right {
    order: 2;
    text-align: center;
  }
  .rice-farm-wrap .left {
    order: 1;
    text-align: center;
  }
  .rice-farm-wrap .right {
    order: 2;
    text-align: center;
  }

  .rice-farm-wrap {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    // place-items: center;
  }
}

.rice-farm-wrap h2::after,
.rice-farm-wrap-two h2::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #009432;
  content: " ";
  margin: 0 auto;
  // margin-top: 10px;
  margin-bottom: 30px;
  position: absolute;
  // left: 50%;
  // transform: translateX(-50%);
}
.rice-farm-wrap h2,
.rice-farm-wrap-two h2 {
  margin: 1rem auto;
  font-weight: 500;
  /* max-width: 200px; */
  /* color: #fff; */
  font-size: 2rem;
  text-transform: uppercase;
  color: #424242 !important;
  caret-color: #424242 !important;
  font-weight: 300;
  // padding-bottom: 1rem;
}

.image-grid {
  // padding: 12px;
}
.image-grid img {
  object-fit: cover !important;
  width: 100%;
}
.image-grid img:hover {
  transform: scale(1.1);
  transition: 0.45s ease-in-out;
  cursor: pointer;
}

.image-row {
  display: flex;
}

.image-row .image {
  margin: 12px;
  height: 240px;
}
.image-row .image:hover {
  transform: scale(1.1);
  transition: 0.45s ease-in-out;
  cursor: pointer;
}

.image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  // box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15),
  //   0 6px 20px rgba(0, 0, 0, 0.7);
}

.image-01 {
  background-image: url("../assets/BenueRice3.jpg");
  flex: 1;
}

.image-02 {
  background-image: url("../assets/BenueRice4.jpg");
  flex: 1;
}

.image-03 {
  background-image: url("../assets/BenueRice5.jpg");
  flex: 1;
}

.image-04 {
  background-image: url("../assets/BenueRice6.jpg");
  flex: 1;
}

.image-05 {
  // background-image: url("../assets/rice4.jpg");
  flex: 3;
}

// .image-06 {
//   background-image: url("../assets/rice5.jpg");
//   flex: 2;
// }

.image-07 {
  background-image: url("../assets/BenueRice7.jpg");
  flex: 3;
}

// .image-08 {
//   background-image: url("../assets/rice7.jpg");
//   flex: 3;
// }

// .image-09 {
//   background-image: url("../assets/rice10.jpg");
//   flex: 1;
// }
.rice-farm-wrap .image-grid {
  // padding: 12px;
}
.rice-farm-wrap .image-grid img {
  object-fit: contain !important;
  width: 100%;
  height: 100%;
}
.rice-farm-wrap .image-grid img:hover {
  transform: scale(1.1);
  transition: 0.45s ease-in-out;
  cursor: pointer;
}

.rice-farm-wrap .image-row {
  display: flex;
}

.rice-farm-wrap .image-row .image {
  margin: 12px;
  height: 240px;
}
.rice-farm-wrap .image-row .image:hover {
  transform: scale(1.1);
  transition: 0.45s ease-in-out;
  cursor: pointer;
}

.rice-farm-wrap .image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  // box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15),
  //   0 6px 20px rgba(0, 0, 0, 0.7);
}

.rice-farm-wrap .image-01 {
  background-image: url("../assets/Manzo3.png");
  flex: 3;
}

.rice-farm-wrap .image-02 {
  background-image: url("../assets/Manzo33.png");
  flex: 2;
}

.rice-farm-wrap .image-03 {
  background-image: url("../assets/manzo333.png");
  flex: 2;
}

.rice-farm-wrap .image-04 {
  background-image: url("../assets/HungaroSeed.png");
  flex: 2;
}

.rice-farm-wrap .image-05 {
  background-image: url("../assets/Tetra.png");
  flex: 2;
}

.image-06 {
  background-image: url("../assets/Alphavet.png");
  flex: 3;
}

.rice-farm-wrap .image-07 {
  background-image: url("../assets/BenueRice7.jpg");
  flex: 2;
}

// .image-08 {
//   background-image: url("../assets/rice7.jpg");
//   flex: 3;
// }

// .image-09 {
//   background-image: url("../assets/rice10.jpg");
//   flex: 1;
// }

@media screen and (max-width: 600px) {
  .image-row {
    flex-direction: column;
  }
  .image-01 {
    background-image: url("../assets/rice1.jpg");
    flex: 2;
  }

  .image-row .image {
    flex-basis: auto;
  }

  .rice-farm-wrap {
    grid-template-columns: 1fr;
  }

  .btny{
    margin: .55rem 0;
  }
}
</style>
